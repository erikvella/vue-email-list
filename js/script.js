const {createApp} = Vue;

createApp({

  data(){
    return{

      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      mailGenerate: '',
      arrMailGenerate: [],
    }
  },

  methods:{
    getApi(){
    axios.get(this.apiUrl)
    .then((response)=>{
      console.log(response.data);
      this.mailGenerate = response.data.response
    })
    .catch((error)=>{
      console.log(error);
    })
    }
  },

  mounted(){
    this.getApi();

    for(let i = 0 ; i < 10 ; i++){
      this.getApi().push(this.arrMailGenerate);
      console.log(this.arrMailGenerate)
    }
  },

}).mount('#app');