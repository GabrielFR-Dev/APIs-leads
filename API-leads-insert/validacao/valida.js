function validaNome(nome){

    const regexNome = /^[A-Za-zÀ-ÿ\s'-]+$/;
    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid;
}

function validaEmail(email){

    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = regexEmail.test(email);
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