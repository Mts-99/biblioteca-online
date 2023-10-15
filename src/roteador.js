
const express = require("express");
const obterLivros = require("./controladores/obterLivros");
const obeterLivroPorId = require("./controladores/obeterLivroPorId");
const cadastrarLivro = require("./controladores/cadastrarLivro");
const alterarLivro = require("./controladores/alterarLivros");
const alterarParteDoLivro = require("./controladores/alterarParteDoLivro");
const excluirLivro = require("./controladores/excluirLivro");


const rotas = express();

rotas.get("/livros", obterLivros);
rotas.get("/livros/:id", obeterLivroPorId);
rotas.post("/livros", cadastrarLivro);
rotas.put("/livros/:id", alterarLivro);
rotas.patch("/livros/:id", alterarParteDoLivro);
rotas.delete("/livros/:id", excluirLivro);

module.exports = rotas;