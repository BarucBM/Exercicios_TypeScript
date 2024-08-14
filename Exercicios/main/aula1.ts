//Exercicio 1 _________________________________________________________________________________________
let nome:String = "Baruc B Moreira"
let idade:Number = 23
let vivo:Boolean = true
let hobbies:String[] = ["Futebol", "Academia", "Videogames"]

//Exercicio 2 _________________________________________________________________________________________
type Livro = {
    titulo:string,
    autor:string,
    nroPag:number,
    disponivel:boolean
}

const livro : Livro = {
    titulo:"A BAtalha do Apocalipse",
    autor:"Eduardo Spohr",
    nroPag:100,
    disponivel:true
}

function livroFrase (livro:Livro): string{
    return livro.disponivel == true? 
    livro.titulo + " do autor " + livro.autor + " possui " + livro.nroPag + " e está disponível." :
    livro.titulo + " do autor " + livro.autor + " possui " + livro.nroPag + " e está não disponível."
}

//Exercicio 3 _________________________________________________________________________________________
function calcAreaCirc (raio?:number): number{
    return raio != 0? 
    3.14 * (1 * 1) : 
    3.14 * (raio * raio)
}


//Exercicio 4 _________________________________________________________________________________________
function repetePalavra (palavra:string, numero?:number): string{
    if (numero == null){ 
        return palavra.repeat(2)
    }else{
        return palavra.repeat(numero)
    }
}

//Exercicio 5 _________________________________________________________________________________________
interface Pessoa {
    nome:string,
    idade:number,
    profissao:string
}

function descreverPessoa (pessoa:Pessoa): string{
    return "A pessoa chamada " + pessoa.nome + " tem " + pessoa.idade + " anos e é " + pessoa.profissao
}

//Exercicio 6 _________________________________________________________________________________________
interface Produto {
    nome:string,
    preco:number,
    quant : number,
    categoria:string
}

function selecProdutos (produtos:Produto[], categoria:string): Produto[]{
    return produtos.filter(produto => produto.categoria == categoria )
}

//Exercicio 7 e 8  _________________________________________________________________________________________
class Carro{
    marca:string;
    modelo:string;
    ano:number;
    static counter:number = 0;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano 
        Carro.counter++
    }

    dados():string {
        return `Marca: ${this.marca} - Modelo: ${this.modelo}  - Ano: ${this.ano}` 
    }

    static carrosContados():string{
        return `Foram criados ${Carro.counter} carros`
    }
}
let carro1:Carro = new Carro("VolksWagen", "Jetta", 2015)
console.log(carro1.dados())
let carro2:Carro = new Carro("Ford", "Voyage", 2012)
console.log(carro2.dados())
let carro3:Carro = new Carro("Porsche", "Cayenne", 2020)
console.log(carro3.dados())

console.log(Carro.carrosContados())

//Exercicio 9 _________________________________________________________________________________________

class Animal{
    som():string{
        return "O animal faz um som"
    }
}

class Cachorro extends Animal{
    override som(): string {
        return "O cachorro late"
    }
}

class Gato extends Animal{
    override som(): string {
        return "O gato mia"
    }
}

//Exercicio 10 _________________________________________________________________________________________
class Funcionario{
    constructor(public nome: string, public salario: number){} 

    calcularSalario(){
    }
}

class FuncionarioHorista extends Funcionario{
    constructor(public nome: string, public salario: number, public horas:number){
        super(nome, salario)
    } 

    override calcularSalario():number {
        return this.salario * this.horas
    }
}

class FuncionarioAssalariado extends Funcionario{
    constructor(public nome: string, public salario: number){
        super(nome, salario)
    } 

    override calcularSalario():number {
        return this.salario
    }
}

let FA :FuncionarioAssalariado = new FuncionarioAssalariado("Baruc", 1500)
console.log(FA.calcularSalario())

let FH : FuncionarioHorista = new FuncionarioHorista("Joao", 15, 200)
console.log(FH.calcularSalario())

//Exercicio 11 _________________________________________________________________________________________
function retornaPrimeiro<T>(objetos:T[]): T{
    return objetos[0]
}

console.log(retornaPrimeiro<string>(["Banana", "Maçã", "Melancia"]))
console.log(retornaPrimeiro<number>([150, 74, 215]))
console.log(retornaPrimeiro<Carro>([carro3, carro2, carro1]))

//Exercicio 12 _________________________________________________________________________________________
class Caixa<T>{
    constructor(public valor:T){}

    getValor():T{
        return this.valor
    }

    setValor(setValor:T):void{
        this.valor = setValor
    }
}

let caixaS : Caixa<string> = new Caixa<string>("Baruc")
console.log(caixaS.getValor())
caixaS.setValor("João")
console.log(caixaS.getValor())

let caixaN : Caixa<number> = new Caixa<number>(100)
console.log(caixaN.getValor())
caixaN.setValor(250)
console.log(caixaN.getValor())

let caixaCar : Caixa<Carro> = new Caixa<Carro>(carro1)
console.log(caixaCar.getValor())
caixaCar.setValor(carro2)
console.log(caixaCar.getValor())

//Exercicio 13 _________________________________________________________________________________________

type Tupla = [number, number]

function calculaDist (ponto:Tupla) : number{
    return Math.sqrt(ponto[0]*ponto[0] + ponto[1]*ponto[1])
}

//Exercicio 14 _________________________________________________________________________________________
enum diasSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

let dia1 :diasSemana = 4;

function tipoDia(dia:diasSemana){
    if(dia > 0 && dia < 6 ) console.log("O dia fornecido é um dia útil")
    else console.log("O dia fornecido não é um dia útil")
}

tipoDia(dia1);

//Exercicio 15 _________________________________________________________________________________________


function extremos(numeros:number[]):Tupla{
    let numersort = numeros.sort((a, b) => (a < b) ? -1 : 1)
    let tupla : [number, number] = [numeros[0], numersort[numersort.length-1]]
    
    
    return tupla
}
console.log(extremos([-1,0,5,6,45,222]))

//Exercicio 16 _________________________________________________________________________________________
class NewProdutos {
   constructor(public nome:string, public preco:number){} 
}

function produtosCaros(produtos:NewProdutos[], valor:number):NewProdutos[]{
    return produtos.filter((prod) => prod.preco > valor)
}

//Exercicio 17 _________________________________________________________________________________________
function inverterFrase(frase:string):string{
    let palavras = frase.split(" ").reverse()
    return palavras.join(" ")
}

//Exercicio 18 _________________________________________________________________________________________
function contaVogais(frase:string){
    let letras = frase.toLowerCase().split("")
    const vogais = 'aeiou'

    let contador: { [vogal: string]: number } = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
    letras.forEach(letra =>{
        if(vogais.includes(letra)){
            contador[letra]++
        }

    })
    console.log(contador)
}

contaVogais("AaaEeeIiiOooUuu")

//Exercicio 19 _________________________________________________________________________________________

async function buscarDados(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucesso:number =( Math.floor(Math.random() * 10) ) + 1
            if (sucesso>5) {
                resolve(["dado1", "dado2", "dado3"]);
            } else {
                reject("Erro ao buscar os dados");
            }
        }, 1000); 
    });
}

//Exercicio 20 _________________________________________________________________________________________

async function buscarDados1(): Promise<string[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["dado1", "dado2", "dado3"]);
        }, 1000);
    });
}

async function buscarDados2(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([10, 20, 30]);
        }, 2000);
    });
}

async function combinar(){
    let [dados1, dados2] = await Promise.all([buscarDados1(),buscarDados2()])
    console.log(dados1 + " // " + dados2)
}
combinar()

//Exercicio 21 _________________________________________________________________________________________

function criarDiv(texto:string){
    let div = document.createElement('div')

    div.textContent = texto

    document.body.appendChild(div)
}

//Exercicio 22 _________________________________________________________________________________________

function criarList(itens:string[], id:string){
    const listaUl = document.getElementById(id)

    itens.forEach(item =>{
        let itemLi = document.createElement("li")
        itemLi.textContent = item
        listaUl?.appendChild(itemLi)
    }) 
}

//Exercicio 25 _________________________________________________________________________________________

interface ConfigBasicas {
    id : string;
    nome : string;
    permConfigBasicas : boolean;
}

interface ConfigManutencao {
    permConfigInterm : boolean;
    permSalvamento : boolean;
}

interface ConfigAdmin {
    permConfigAdmin : boolean;
    permTrocaSinais : boolean;
}

interface ConfigMaster {
    permConfigMaster : boolean;
    permParamFabrica : boolean;
}

type Permissoes  = ConfigBasicas & ConfigManutencao & ConfigAdmin & ConfigMaster;

let administrador : Permissoes = {
    id : "bsa1516",
    nome : "Joao Claudio",
    permConfigBasicas : true,
    permConfigInterm : true,
    permSalvamento : true,
    permConfigAdmin : true,
    permTrocaSinais : true,
    permConfigMaster : false,
    permParamFabrica : false
}

let operador : Permissoes = {
    id : "bsb5855",
    nome : "Maria José",
    permConfigBasicas : true,
    permConfigInterm : true,
    permSalvamento : false,
    permConfigAdmin : false,
    permTrocaSinais : false,
    permConfigMaster : false,
    permParamFabrica : false
}

let master : Permissoes = {
    id : "bsc7789",
    nome : "Baruc Moreira",
    permConfigBasicas : true,
    permConfigInterm : true,
    permSalvamento : true,
    permConfigAdmin : true,
    permTrocaSinais : true,
    permConfigMaster : true,
    permParamFabrica : true
}

//Exercicio 26 _________________________________________________________________________________________

let pessoa1 : Pessoa = {
    nome : "Caio",
    idade : 28,
    profissao : "Consultor Técnico"
}

function chaveObjeto <T,K extends keyof T> (objeto:T,chave:K): T[K]{
    return objeto[chave]
}

console.log(chaveObjeto(pessoa1,"idade"))

//console.log(chaveObjeto(pessoa1,"email"))

//Exercicio 27 _________________________________________________________________________________________

function tipoVar (entrada : number | string ){
    if(typeof entrada === "string") console.log("A variável é uma string")
    else console.log("A variável é um número")
}

tipoVar("Olá")
tipoVar(150)

//Exercicio 28 _________________________________________________________________________________________
class ClassPessoa {
    constructor(nome:string, idade:number){}
}
class ClassEmpresa{
    constructor(nome:string, cnpj:number){}
}
class ClassCarro{
    constructor(nome:string, ano:number){}
}

function tipoObj(entrada : ClassPessoa | ClassEmpresa){
    if( entrada instanceof ClassPessoa) console.log("A variável é uma pessoa")
    else if(entrada instanceof ClassEmpresa) console.log("A variável é uma empresa")
    else console.log("Tipo desconhecido")
}

tipoObj(new ClassPessoa("Baqruc", 23))
tipoObj(new ClassEmpresa("T-Systems", 555555))
tipoObj(new ClassCarro("Ford", 2012))

//Exercicio 29 _________________________________________________________________________________________

function precoTotal (produtos :Produto[]):number{
    return produtos
    .filter((produto) => produto.quant > 0)
    .reduce((total, produto) => total = produto.preco * produto.quant,0  )
}

//Exercicio 30 _________________________________________________________________________________________

function procurarProdutoPorCategoria(produtos :Produto[], categoria:string): Produto[]{
    return produtos.filter(produto => produto.categoria == categoria)
    .reduce<Produto[]>((result, produto) => {
        result.push(produto)
        return result
    },[])
}
