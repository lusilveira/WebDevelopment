console.log('Olá, eu sou o console');

//variáveis NÃO SÃO TIPADAS

// modo antigo não usar
var user = 'Israel Marques';
console.log(user);

//pode usar esse
let email = 'profisrael.copi@fiap.com.br';
console.log(email);

let age = 51;
console.log(age);

let login = false;
console.log(login);

// ver o tipo que foi atribuído
console.log(typeof user, user);
console.log(typeof email, email);
console.log(typeof age, age);
console.log(typeof login, login);

login = 123456;
console.log(typeof login, login);

let color;
console.log(typeof color);

const nameUser='José Eu Mesmo';
console.log(typeof(nameUser), nameUser);

// Evitar concatenação
console.log('Usuário: ' + user + ' Logado: ' + login);

// Template String 
// Iniciar e terminar com crase `escrever o que quiser`
// chamar as variáveis ${nome da variável}
console.log(`Usuário: ${user} email: ${email}`);

let primeiroNumero =  '30';
let segundoNumero = 30;
console.log(`Soma dos valores: ${primeiroNumero + segundoNumero}`);

console.log(primeiroNumero === segundoNumero);

// arrays
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 123, true, false, 678];
console.log(pessoas);
console.table(pessoas);

// push() insere no fim do array
pessoas.push('eu mesmo');
console.log(pessoas);

// pop() retira o conteúdo do último índice
pessoas.pop();
console.log(pessoas);

// unshift() - insere no primeiro índice do array
pessoas.unshift('eu mesmo');
console.log(pessoas);

// shift() - retira o primeiro índice do array
pessoas.shift();
console.log(pessoas);

// retirar índices no meio array
pessoas.splice(2,2)
console.log(pessoas);

// inserir índices no meio array
pessoas.splice(2, 0, 'Ele', 'Nos');
console.log(pessoas);
































