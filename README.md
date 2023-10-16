# biblioteca-online-JavaScript

Descrição da Aplicação: Esta aplicação consiste em um servidor Node.js que fornece uma API REST para gerenciar uma coleção de livros em uma biblioteca online. Ela oferece as seguintes operações:
1.	Consulta da Coleção: Obtenha a lista completa de livros através de http://localhost:3000/livros.
2.	Consulta de um Livro por ID: Recupere informações de um livro específico através de http://localhost:3000/livros/:ID. O servidor responde com detalhes do livro ou mensagens de erro apropriadas.
3.	Adição de um Novo Livro: Adicione um novo livro à coleção enviando um objeto JSON no corpo da solicitação. O ID é gerado automaticamente e o novo livro é retornado na resposta.
4.	Substituição de um Livro Existente: Substitua um livro existente especificando o ID e enviando um objeto JSON no corpo da solicitação. O servidor confirma a substituição ou retorna uma mensagem de erro, dependendo se o livro existia ou não.
5.	Alteração de um Livro: Altere propriedades de um livro enviando um objeto JSON no corpo da solicitação e especificando o ID do livro. O servidor confirma a alteração ou retorna uma mensagem de erro se o livro não existe.
6.	Remoção de um Livro: Remova um livro da coleção especificando o ID no URL. O servidor confirma a remoção ou retorna uma mensagem de erro se o livro não existe.
Este servidor permite o gerenciamento flexível e eficiente de uma coleção de livros online. Certifique-se de testar todas essas operações em várias ordens para garantir o funcionamento adequado da aplicação.
