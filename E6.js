import axios from 'axios'

let numero = 45;

axios.get('https://viacep.com.br/ws/96215420/json/').then(function(res){
  console.log(res.data.logradouro.toUpperCase() + ', ' + numero + ", " + res.data.localidade.toUpperCase() + "/" + res.data.uf.toUpperCase());
})
