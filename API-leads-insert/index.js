import express from 'express';
import { cadastrarLead, retornaLead, retornaLeadID } from './servico/servico.js';
import { validaUsuario, validaID } from './validacao/valida.js';

const app = express();
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    const usuarioValido = validaUsuario(nome, email);

    if (usuarioValido.status) {
        await cadastrarLead(nome, email);
        res.status(204).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }
})

app.get('/usuarios', async (req, res) => {
    const lead = await retornaLead();

    res.json(lead);
})

app.get('/usuarios/:id', async (req, res) => {
    const id = req.params.id;

    const idValido = validaID(id)

    if (idValido.status) {
        const leadID = await retornaLeadID(id);
        res.json(leadID);
    } else {
        res.status(404).send({ mensagem: idValido.mensagem })
    }
})


app.listen(3001, async () => {
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`)

})