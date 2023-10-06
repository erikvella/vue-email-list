const {createApp} = Vue;

createApp({

  data(){
    return{

      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      mailGenerate: ''
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
  }

}).mount('#app');