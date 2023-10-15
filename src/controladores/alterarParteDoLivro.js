const livros = require("../dados/livrosBancoDeDados");


const alterarParteDoLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;


    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroExistente){
        return res.status(400).json({ mensagem: "Não existe livro a ser substituído para o ID informado."})    
    }

    if (titulo) {
        livroExistente.titulo = titulo;
    }
    if (autor) {
        livroExistente.autor = autor;
    }
    if (ano) {
        livroExistente.ano = ano;
    }
    if (numPaginas) {
        livroExistente.numPaginas = numPaginas;
    }
    return res.json({ mensagem: "Livro alterado"});

};
module.exports = alterarParteDoLivro;