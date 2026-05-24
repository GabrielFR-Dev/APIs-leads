import pool from './conexao.js';

export async function cadastrarLead(nome, email) {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query("INSERT INTO leads (nome, email) VALUES (?, ?) ", [nome, email]);

    console.log(resposta);

    conexao.release();
}

export async function retornaLead(){
    const conexao = await pool.getConnection();

    const res = await conexao.query("SELECT id, nome, email FROM leads");
    const resposta = res[0];

    conexao.release();
    return resposta
}

export async function retornaLeadID(id){
    const conexao = await pool.getConnection();

    const res = await conexao.query("SELECT id, nome, email FROM leads WHERE id = (?)", [id]);

    const resposta = res[0];

    conexao.release();

    return resposta;
}