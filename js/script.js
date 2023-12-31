const {createApp} = Vue;

createApp({

  data(){
    return{

      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      arrMailGenerate: [],
      limit: 10
    }
  },

  methods:{
    getApi(){
    axios.get(this.apiUrl)
    .then((response)=>{
      console.log(response.data);
      this.arrMailGenerate.push(response.data.response)
    })
    .catch((error)=>{
      console.log(error);
    })
    }
  },

  mounted(){
    this.getApi();

    for(let i = 0 ; i < this.limit ; i++){
      this.getApi();
    }
  },

}).mount('#app');