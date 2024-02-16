function verificarlogin() {
    let textlogin = document.getElementById("txtlogin");
    let txtsenha = document.getElementById("txtsenha");

    let login = "teste";
    let senha = "senha";

    if (textlogin.value == login && txtsenha.value == senha) {
        console.log("logado com sucesso!");
    } else{
        console.log("login ou senha incorreto! digite e tente novamente")
    }
}