const livros = require("../dados/livrosBancoDeDados");


const obterLivros = (req, res) => {
    return res.json(livros);
}


     module.exports = obterLivros;