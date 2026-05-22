import express from 'express';
import pool from './servico/conexao.js';
import { cadastrarLead } from './servico/cadastro_servico.js';

const app = express();


app.listen(3001, async() => {
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`)
   
    cadastrarLead('fernando', 'fernando@gmail.com')

    

})