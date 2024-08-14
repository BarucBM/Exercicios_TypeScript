"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Exercicio 1 _________________________________________________________________________________________
let nome = "Baruc B Moreira";
let idade = 23;
let vivo = true;
let hobbies = ["Futebol", "Academia", "Videogames"];
const livro = {
    titulo: "A BAtalha do Apocalipse",
    autor: "Eduardo Spohr",
    nroPag: 100,
    disponivel: true
};
function livroFrase(livro) {
    return livro.disponivel == true ?
        livro.titulo + " do autor " + livro.autor + " possui " + livro.nroPag + " e está disponível." :
        livro.titulo + " do autor " + livro.autor + " possui " + livro.nroPag + " e está não disponível.";
}
//Exercicio 3 _________________________________________________________________________________________
function calcAreaCirc(raio) {
    return raio != 0 ?
        3.14 * (1 * 1) :
        3.14 * (raio * raio);
}
//Exercicio 4 _________________________________________________________________________________________
function repetePalavra(palavra, numero) {
    if (numero == null) {
        return palavra.repeat(2);
    }
    else {
        return palavra.repeat(numero);
    }
}
function descreverPessoa(pessoa) {
    return "A pessoa chamada " + pessoa.nome + " tem " + pessoa.idade + " anos e é " + pessoa.profissao;
}
function selecProdutos(produtos, categoria) {
    return produtos.filter(produto => produto.categoria == categoria);
}
//Exercicio 7 e 8  _________________________________________________________________________________________
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Carro.counter++;
    }
    dados() {
        return `Marca: ${this.marca} - Modelo: ${this.modelo}  - Ano: ${this.ano}`;
    }
    static carrosContados() {
        return `Foram criados ${Carro.counter} carros`;
    }
}
Carro.counter = 0;
let carro1 = new Carro("VolksWagen", "Jetta", 2015);
console.log(carro1.dados());
let carro2 = new Carro("Ford", "Voyage", 2012);
console.log(carro2.dados());
let carro3 = new Carro("Porsche", "Cayenne", 2020);
console.log(carro3.dados());
console.log(Carro.carrosContados());
//Exercicio 9 _________________________________________________________________________________________
class Animal {
    som() {
        return "O animal faz um som";
    }
}
class Cachorro extends Animal {
    som() {
        return "O cachorro late";
    }
}
class Gato extends Animal {
    som() {
        return "O gato mia";
    }
}
//Exercicio 10 _________________________________________________________________________________________
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    calcularSalario() {
    }
}
class FuncionarioHorista extends Funcionario {
    constructor(nome, salario, horas) {
        super(nome, salario);
        this.nome = nome;
        this.salario = salario;
        this.horas = horas;
    }
    calcularSalario() {
        return this.salario * this.horas;
    }
}
class FuncionarioAssalariado extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
        this.nome = nome;
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
let FA = new FuncionarioAssalariado("Baruc", 1500);
console.log(FA.calcularSalario());
let FH = new FuncionarioHorista("Joao", 15, 200);
console.log(FH.calcularSalario());
//Exercicio 11 _________________________________________________________________________________________
function retornaPrimeiro(objetos) {
    return objetos[0];
}
console.log(retornaPrimeiro(["Banana", "Maçã", "Melancia"]));
console.log(retornaPrimeiro([150, 74, 215]));
console.log(retornaPrimeiro([carro3, carro2, carro1]));
//Exercicio 12 _________________________________________________________________________________________
class Caixa {
    constructor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
    setValor(setValor) {
        this.valor = setValor;
    }
}
let caixaS = new Caixa("Baruc");
console.log(caixaS.getValor());
caixaS.setValor("João");
console.log(caixaS.getValor());
let caixaN = new Caixa(100);
console.log(caixaN.getValor());
caixaN.setValor(250);
console.log(caixaN.getValor());
let caixaCar = new Caixa(carro1);
console.log(caixaCar.getValor());
caixaCar.setValor(carro2);
console.log(caixaCar.getValor());
function calculaDist(ponto) {
    return Math.sqrt(ponto[0] * ponto[0] + ponto[1] * ponto[1]);
}
//Exercicio 14 _________________________________________________________________________________________
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Domingo"] = 0] = "Domingo";
    diasSemana[diasSemana["Segunda"] = 1] = "Segunda";
    diasSemana[diasSemana["Terca"] = 2] = "Terca";
    diasSemana[diasSemana["Quarta"] = 3] = "Quarta";
    diasSemana[diasSemana["Quinta"] = 4] = "Quinta";
    diasSemana[diasSemana["Sexta"] = 5] = "Sexta";
    diasSemana[diasSemana["Sabado"] = 6] = "Sabado";
})(diasSemana || (diasSemana = {}));
let dia1 = 4;
function tipoDia(dia) {
    if (dia > 0 && dia < 6)
        console.log("O dia fornecido é um dia útil");
    else
        console.log("O dia fornecido não é um dia útil");
}
tipoDia(dia1);
//Exercicio 15 _________________________________________________________________________________________
function extremos(numeros) {
    let numersort = numeros.sort((a, b) => (a < b) ? -1 : 1);
    let tupla = [numeros[0], numersort[numersort.length - 1]];
    return tupla;
}
console.log(extremos([-1, 0, 5, 6, 45, 222]));
//Exercicio 16 _________________________________________________________________________________________
class NewProdutos {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
function produtosCaros(produtos, valor) {
    return produtos.filter((prod) => prod.preco > valor);
}
//Exercicio 17 _________________________________________________________________________________________
function inverterFrase(frase) {
    let palavras = frase.split(" ").reverse();
    return palavras.join(" ");
}
//Exercicio 18 _________________________________________________________________________________________
function contaVogais(frase) {
    let letras = frase.toLowerCase().split("");
    const vogais = 'aeiou';
    let contador = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    letras.forEach(letra => {
        if (vogais.includes(letra)) {
            contador[letra]++;
        }
    });
    console.log(contador);
}
contaVogais("AaaEeeIiiOooUuu");
//Exercicio 19 _________________________________________________________________________________________
function buscarDados() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sucesso = (Math.floor(Math.random() * 10)) + 1;
                if (sucesso > 5) {
                    resolve(["dado1", "dado2", "dado3"]);
                }
                else {
                    reject("Erro ao buscar os dados");
                }
            }, 1000);
        });
    });
}
//Exercicio 20 _________________________________________________________________________________________
function buscarDados1() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["dado1", "dado2", "dado3"]);
            }, 1000);
        });
    });
}
function buscarDados2() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([10, 20, 30]);
            }, 2000);
        });
    });
}
function combinar() {
    return __awaiter(this, void 0, void 0, function* () {
        let [dados1, dados2] = yield Promise.all([buscarDados1(), buscarDados2()]);
        console.log(dados1 + " // " + dados2);
    });
}
combinar();
//Exercicio 21 _________________________________________________________________________________________
function criarDiv(texto) {
    let div = document.createElement('div');
    div.textContent = texto;
    document.body.appendChild(div);
}
//Exercicio 22 _________________________________________________________________________________________
function criarList(itens, id) {
    const listaUl = document.getElementById(id);
    itens.forEach(item => {
        let itemLi = document.createElement("li");
        itemLi.textContent = item;
        listaUl === null || listaUl === void 0 ? void 0 : listaUl.appendChild(itemLi);
    });
}
let administrador = {
    id: "bsa1516",
    nome: "Joao Claudio",
    permConfigBasicas: true,
    permConfigInterm: true,
    permSalvamento: true,
    permConfigAdmin: true,
    permTrocaSinais: true,
    permConfigMaster: false,
    permParamFabrica: false
};
let operador = {
    id: "bsb5855",
    nome: "Maria José",
    permConfigBasicas: true,
    permConfigInterm: true,
    permSalvamento: false,
    permConfigAdmin: false,
    permTrocaSinais: false,
    permConfigMaster: false,
    permParamFabrica: false
};
let master = {
    id: "bsc7789",
    nome: "Baruc Moreira",
    permConfigBasicas: true,
    permConfigInterm: true,
    permSalvamento: true,
    permConfigAdmin: true,
    permTrocaSinais: true,
    permConfigMaster: true,
    permParamFabrica: true
};
//Exercicio 26 _________________________________________________________________________________________
let pessoa1 = {
    nome: "Caio",
    idade: 28,
    profissao: "Consultor Técnico"
};
function chaveObjeto(objeto, chave) {
    return objeto[chave];
}
console.log(chaveObjeto(pessoa1, "idade"));
//console.log(chaveObjeto(pessoa1,"email"))
//Exercicio 27 _________________________________________________________________________________________
function tipoVar(entrada) {
    if (typeof entrada === "string")
        console.log("A variável é uma string");
    else
        console.log("A variável é um número");
}
tipoVar("Olá");
tipoVar(150);
//Exercicio 28 _________________________________________________________________________________________
class ClassPessoa {
    constructor(nome, idade) { }
}
class ClassEmpresa {
    constructor(nome, cnpj) { }
}
class ClassCarro {
    constructor(nome, ano) { }
}
function tipoObj(entrada) {
    if (entrada instanceof ClassPessoa)
        console.log("A variável é uma pessoa");
    else if (entrada instanceof ClassEmpresa)
        console.log("A variável é uma empresa");
    else
        console.log("Tipo desconhecido");
}
tipoObj(new ClassPessoa("Baqruc", 23));
tipoObj(new ClassEmpresa("T-Systems", 555555));
tipoObj(new ClassCarro("Ford", 2012));
//Exercicio 29 _________________________________________________________________________________________
function precoTotal(produtos) {
    return produtos
        .filter((produto) => produto.quant > 0)
        .reduce((total, produto) => total = produto.preco * produto.quant, 0);
}
//Exercicio 30 _________________________________________________________________________________________
function procurarProdutoPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria == categoria)
        .reduce((result, produto) => {
        result.push(produto);
        return result;
    }, []);
}
