//Declaração de Variaveis em javascript 
//Em javascript, existem três formas de declarar variaveis:

//1. Usando o var ( forma mais antiga) 
var idade = 25;
var nome = "maria"
var estudante = true; 

//2. Usando let (introduzindo no ES6)
let idade = 25;
let nome "maria";
let estudante = true;

//3. Usando Const (par avalores constantes)
const PI = 3.14159;
const NOME_EMPRESA = "TechSolutions";

// TIPOS DE DADOS EM JAVASCRIPT

//1. Tipos primitivos
number (numero)
Representa tanto um número inteiros quanto decimais 
let idade = 25; // numero inteiro 
let altura = 1.75; // numero decimal 
let temperatura = 5; // numero negativo 

string (texto)
Representa sequencias de caracteristicas (texto)
let nome = "joão";
let sobrenome = 'silva';
let emderoco = 'rua das flores,123';//templante string(ES6)

Boolean (booleano)
Representa valores lógicos: verdadeira (true) ou False (falso).
let estudante = true;
let aprovado = false;
undefined 
Representa uma variavel que foi declarado, mas não recebeu um valor  
let cidade; // valor é undefined 
null
//Representa a ausencia intencional de valor.
let telefone = null; //explicitamente sem valor

2. TIPOS COMPLEXOS
// ARRAY (VETOR) 
// COLEÇÃO ORDENADA POR VALORES
let frutas =["maça", "banana", "laranja"]
let numeros = [1,2,3,4,5];
let misturado = [1, "dois", true, null];

//Object
// coleção de pares chaves-valor.
let pessoa = { 
nome: "Ana",
idade: 3,
profissao: "desenvolvedora"
};

// verificando o tipo de uma variavel 
let idade = 25;
console.log(typeof idade);

let nome = "maria"
console.log(typeof nome);

let ativo = true;
console.log(typeof ativo);

Conversão entre tipos 
let numeroTexto = "42";
let numero = Number(numeroTexto); 
console.log(typeof numero);// "number"

let numero1 = parseInt(numeroTexto);//Para inteiros
let numero2 = parseFloat(numeroTexto);//Para decimais

//De number para string 
let numero = 42
let texto = String(numero);//"42"(texto)
//Alternativa 
let texto2 = numero.toString();//"42" (texto)
// Para boolean
let valor = 1;
let booleano = Boolean(valor);// true
// Valores que convertem para false:
//0,"",null,undefined, NaN, false

Exemplos Praticos: Calculadora de Idade 
// declaração de varaveis
const anoAtual = 2026;
let anoNascimento = 1990;
// calculando idade
let idade = anoAtual - anoNascimento;
//exibindo o resultado
console.log("você tem " + idade + " anos.");

console.log(`Você tem ${idade} anos`) 

exemplo pratico: 
// calculadora de media de notas
let nota1 =  8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let media = (nota1 + nota2 + nota3) / 3;
console.log(`sua media final é ${media}.`)

//operadores de Aribuição combinados 
let pontos = 100;
console.log(`Pontuação inicial: ${pontos}`);
// O jogador ganhou 50 pontos 
pontos += 50; //adicionar 50 pontos
console.log(`Pontuação após ganhar 50 pontos:${pontos}`);
// O jogador perdeu 30 pontos 
pontos -= 30; //sbtrai 30 pontos 
console.log(`Pontuação após perder 30 pontos: ${pontos}`);