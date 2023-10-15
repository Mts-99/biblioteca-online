const livros = require("../dados/livrosBancoDeDados");


const obeterLivroPorId = (req, res) => {
    const livroId = Number(req.params.id);

    if (isNaN(livroId)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido."})
    }
    const livro = livros.find(livro => livro.id === livroId);
    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado."})
 
    }
     return res.json(livro);
}
module.exports = obeterLivroPorId;