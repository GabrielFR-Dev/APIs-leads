function validaNome(nome){
    const isValid = nome.length >= 2;
    return isValid;
}

function validaEmail(email){
    const isValid = email !== '' ? true : false;
    return isValid;
}

export function validaUsuario(nome, email) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);

    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido){
        return {status: true, mensagem: ''};
    } else {
        return {status: false, mensagem: 'Nome ou Email inválidos'}
    }

}