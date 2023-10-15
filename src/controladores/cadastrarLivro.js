const livros = require("../dados/livrosBancoDeDados");

let proximoId = 1;


const cadastrarLivro = (req, res) => {
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
    

    const novoLivro = {
        id: proximoId,
        titulo,
        autor,
        ano, 
        numPaginas
    }
    livros.push(novoLivro);

    proximoId++;
    return res.status(201).json(novoLivro);
}
module.exports = cadastrarLivro;