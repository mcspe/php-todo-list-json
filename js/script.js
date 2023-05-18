const {createApp} = Vue;

createApp({
  data(){
    return {
      apiUrl: './php/server.php',
      noTaskMsg: 'Non hai nulla in programma <i class="fa-regular fa-face-grin-wink"></i><br>Inserisci un nuovo task per aggiungerlo alla tua lista',
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
    },
    addTask(){
      if (this.newTask != '') {
        this.modifyApi('add', this.newTask)
        this.newTask = '';
      }
    },
    removeTask(index){
      if (this.tasks[index].done) {
        this.modifyApi('remove', index);
        // this.tasks.splice(index, 1);
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