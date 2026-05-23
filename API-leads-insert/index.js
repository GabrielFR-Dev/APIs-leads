import express from 'express';
import pool from './servico/conexao.js';
import { cadastrarLead, retornaLead, retornaLeadID } from './servico/cadastro_servico.js';

const app = express();
app.use(express.json())

app.post('/usuarios', async( req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    
    await cadastrarLead(nome, email);

    res.status(204).end();
})

app.get('/usuarios', async(req, res) => {
    const lead = await retornaLead();

    res.json(lead);
})
app.get('/usuarios/:id', async(req, res) => {
    const id = req.params.id;

    const leadID = await retornaLeadID(id);

    if(leadID.length > 0){
        res.json(leadID);
    }else{
        res.status(404).json({mensagem: "Nenhum id encontrado !!"})
    }
})


app.listen(3001, async() => {
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`)

})