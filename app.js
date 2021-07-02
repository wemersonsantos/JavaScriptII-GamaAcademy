const livros = require('./database'); //importando os livros

//pegar o input 

const readline = require('readline-sync') //readline-sync pegar o input pelo terminal

const entradaInicial = readline.question('Deseja buscar um livro? S/N'); //mostrar uma mensagem no terminal para depois reeceber o dados de entrada

//se for sim, mostrar as categorias disponiveis, E qual categoria escolhida
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log("Produtividade", "/ História brasileira /", "/ Américas /", "/ Estilo de vida /", "/ Tecnologia")

    const entradaCategoria = readline.question('Qual categoria deseja? ')

    const retorno = livros.filter(livro => livro.categorias === entradaCategoria)

    console.table(retorno)
    //se não, mostra todas as opções em ordem crescente por páginas
}else{
    const livrosOrdem = livros.sort((a,b)=> a.paginas - b.paginas)//Função callback utilizado pq há 3 algoritmos
    console.log('Essas são todos os livros disponiveis: ')
    console.table(livrosOrdem)
}


