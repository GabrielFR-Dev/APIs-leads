import pool from './conexao.js';

export async function cadastrarLead(nome, email) {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO leads (nome, email) VALUES ("'+nome+'","'+email+'")');

    console.log(resposta);

    conexao.release();
}