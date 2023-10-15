const livros = require("../dados/livrosBancoDeDados");


const alterarLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;
    if (!titulo) {      
        return res.status(400).json({ mensagem: "O campo título é obrigatório"})    
    }
    if (!autor) {      
        return res.status(400).json({ mensagem: "O campo autor é obrigatório"})    
    }
    if (!ano) {      
        return res.status(400).json({ mensagem: "O campo ano é obrigatório"})    
    }
    if (!numPaginas) {      
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatório"})    
    }
    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroExistente){
        return res.status(400).json({ mensagem: "Não existe livro a ser substituído para o ID informado."})    
    }

    livroExistente.titulo = titulo;
    livroExistente.autor = autor;
    livroExistente.ano = ano;
    livroExistente.numPaginas = numPaginas;

    return res.json({ mensagem: "Livro susbtituido"});
}
module.exports = alterarLivro;