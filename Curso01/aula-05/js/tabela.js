// DOM - Document Object Model
// Manipular HTML e CSS
// Pegar qualquer conteúdo da página - trazer para o JS
// Inserir tags, conteúdos e classes CSS
// Excluir conteúdo
// Listar conteúdo
// Alterar conteúdo dentro dentro da página
// pegar os elementos  - retorna todas as informações do elemento,
// retorna todos os filhos do elemento - retorna  todas as propriedade
// do elemento. 

// pegando elementos pela tag
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);
console.log(getTag1[0].textContent);
getTag1[4].textContent = 'R2D2';

// querySelector pega o primeiro que encontra
// querySelectorAll pega todos os elementos
const getTag2 = document.querySelectorAll('th');
console.log(getTag2);

//pegando pela class
const getClass1 = document.getElementsByClassName('personages');
console.log(getClass1);

const getClass2 = document.querySelectorAll('.name-personage')
console.log(getClass2);

// pegar pelor ID
const getId1 = document.getElementById('starWars');
console.log(getId1);

const getId2 = document.querySelector('#starWars');
console.log(getId2);