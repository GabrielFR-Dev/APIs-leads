import pool from './conexao.js';

export async function cadastrarLead(nome, email) {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO leads (nome, email) VALUES ("'+nome+'","'+email+'")');

    console.log(resposta);

    conexao.release();
}

export async function retornaLead(){
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('SELECT id, nome, email FROM leads');

    conexao.release();
    return resposta

   
}