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
      taskDoneStyle: 'text-decoration-line-through',
      errorMsg: ''
    }
  },
  methods:{
    getApi(apiUrl) {
      axios.get(apiUrl)
        .then(result => {
          console.log(result.data);
        });
    },
    toggleDone(index){
      if (!(this.tasks[index].done)){
        this.tasks[index].done = !this.tasks[index].done;
        console.log(this.tasks[index].text, 'vero');
      } 
      else {
        this.tasks[index].done = !this.tasks[index].done;
        console.log(this.tasks[index].text, 'falso');
      }
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
    
  }
}).mount('#app');