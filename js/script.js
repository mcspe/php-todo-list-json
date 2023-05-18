const {createApp} = Vue;

createApp({
  data(){
    return {
      apiUrl: './php/server.php',
      noTaskMsg: 'Non hai nulla in programma <i class="fa-regular fa-face-grin-wink"></i>',
      newTask: '',
      tasks: [
        // {
        //   text: 'creare cartella repo',
        //   done: false
        // },
        // {
        //   text: 'creare file README',
        //   done: false
        // },
        // {
        //   text: 'inizializzare GitHub',
        //   done: false
        // }
      ],
      taskDoneStyle: 'text-decoration-line-through text-danger',
      errorMsg: ''
    }
  },
  methods:{
    getApi(apiUrl) {
      axios.get(apiUrl)
        .then(result => {
          this.tasks = result.data;
        });
    },
    modifyApi(key, attr) {
      const data = new FormData();
      data.append(key, attr);
      axios.post(this.apiUrl, data)
        .then(result => {
          this.tasks = result.data;
        });
    },
    toggleDone(index){
      this.modifyApi('indexToToggle', index);
      // this.tasks[index].done = !this.tasks[index].done;
    },
    addTask(){
      if (this.newTask != '') {
        const newObjTask = {
          text: this.newTask,
          done: false
        }
        this.newTask = '';
        this.tasks.push(newObjTask);
      }
    },
    removeTask(index){
      if (this.tasks[index].done) {
        this.tasks.splice(index, 1);
      } else {
        this.errorMsg = 'Per rimuovere un task è necessario averlo completato prima';
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000);
      }
    }
  },
  mounted(){
    this.getApi(this.apiUrl);
  }
}).mount('#app');