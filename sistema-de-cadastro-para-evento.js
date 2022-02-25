let dataDoEvento = "25/09/2035";
let dataDeHoje = "24/09/2022";
let menorIdade = 18;
let minhaIdade = 19;
let quantidadeDeParticipantes = 99;
let cargoDoUsuario = 1;

if (dataDeHoje != dataDoEvento) {
    console.log("Você tem mais de 18 anos?");
} else {
    console.log("Data limite para cadastro excedida");
}

if (minhaIdade < menorIdade) {
    console.log("Cadastro não permitido para menores de 18 anos")
} else {
    console.log("Verificando quantidade de vagas...");
}

if (quantidadeDeParticipantes <100) {
    console.log("Você é um palestrante?");
} else {
    console.log("Limite de cadastros excedido");
}

if (cargoDoUsuario !=1) {
    console.log("Cadastro como palestrante realizado com sucesso");
} else {
    console.log("Cadastro como participante realizado com sucesso");
}



