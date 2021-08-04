const cors = require('cors');
const express = require('express');
const app = express();
const axios  = require('axios'); //Para acessar apis no backend

app.use(cors());//Libera acesso a API

let country = document.getElementById('input').value;

app.get('/', async (req,res) =>{
  try{
    //response é a respota do axios, mas eu desestruturei o reponse, para obter data (equivalente a response.data)
    /* const {data} = await axios('https://jsonplaceholder.typicode.com/users'); //API aleatória */
    const {data} = await axios(`https://api.covid19api.com/live/country/${country}/status/confirmed`); //API aleatória
    //console.log(data);

    console.log(data);
    return res.json(data);//Manda a informação pro servidor
  }catch(error){
    console.error(error);
  }
})

app.listen('3010');//Determina a porta do servidor