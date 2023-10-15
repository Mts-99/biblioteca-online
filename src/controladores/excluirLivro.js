const livros = require("../dados/livrosBancoDeDados");


const excluirLivro = (req, res) => {
    const indiceLivro = livros.findIndex(livro => livro.id === Number(req.params.id));

    if (indiceLivro < 0){
        return res.status(400).json({ mensagem: "Não existe livro a ser excluido para o ID informado."})    
    }
    livros.splice(indiceLivro, 1);

    return res.json({ mensagem: "Livro excluido"});

}
module.exports = excluirLivro;