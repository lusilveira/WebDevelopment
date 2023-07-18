//recuperando o tbody - preciso dele para depois criar a linhas e as colunas que receberão as informações
const tbody = document.querySelector('tbody');
// console.log(tbody);

// cancelar o envio do formulário - pegar o evento submit (ESCUTADOR DE EVENTOS) - quando o evento for disparado
// cancelar o envio e executar a função que será criada (pegar os dados digitados e exibir na tela)

document.querySelector('form').addEventListener('submit', function(e) {
    //cancelar o evento 
    e.preventDefault();

    //recuperar as informações que foram digitadas
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ]
    // console.log(campos);

    // criar a TR
    const tr = document.createElement('tr');

    // fazendo um forEach para percorrer o Array e para cada uma das ocorrências criar uma TD
    campos.forEach((campo) => {
        
        //criar uma td
        const td = document.createElement('td');

        // colocar a informação digitada na td
        td.textContent = campo.value;

        // colocar a td na tr
        tr.appendChild(td);
    });

    // adicionar a linha criada e suas tds dentro do tbody
    tbody.appendChild(tr);

    // limpar o formulário
    this.reset();
})