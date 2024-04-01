# Escopo do Sistema

## Membros
* Gabriel Lima Barros - Full Stack
* Gabriel Teixeira Carvalho - Full Stack
* Lourenço Montenegro - Full Stack
* Daniel Braga Barbosa - Full Stack

## Objetivo
O objetivo do sistema é criar um ambiente para salvar a avaliar seus filmes favoritos

## Principais Features
* Página de login
* Feed de avaliações de filmes adicionadas por pessoas às quais o usuário se conectou
* Sistema para avaliações de filmes próprias do usuário

## Tecnologias
* JavaScript
* React
* SQLite
* NodeJs

# Backlog do Produto
* Como usuário, gostaria de poder criar uma conta.✅
* Como usuário, gostaria de poder fazer login na minha conta.✅
* Como usuário, gostaria de buscar um filme.✅
* Como usuário, gostaria de avaliar um filme.✅
* Como usuário, gostaria de escrever uma resenha sobre o filme.
* Como usuário, gostaria de ver uma resenha de um usuário sobre um filme.
* Como usuário, gostaria de visualizar informações de um filme selecionado.✅
* Como usuário, gostaria de seguir outro usuário.
* Como usuário, gostaria de curtir resenhas de outros usuários.
* Como usuário, gostaria de ver uma página de perfil com as avaliações de um usuário (incluindo a minha).✅
* Como usuário, gostaria de ver as resenhas de um usuário.
* Como usuário, gostaria de saber quais são os filmes mais bem avaliados. ✅
* Como usuário, gostaria de ver as resenhas mais curtidas.
* Como usuário, gostaria de listar meus filmes favoritos.
* Como usuário, gostaria de visualizar a avaliação média de um filme.✅
* Como usuário, gostaria de marcar um filme como assistido.

# Backlog da Sprint
História #1: Como usuário, gostaria de poder criar uma conta.
- Tarefas e responsáveis:
    - Instalar node.js e Express [Daniel]
    - Configurar banco de dados e criar tabela de usuário [Daniel]
    - Criar e testar uma primeira rota usando o Express [Lourenço]
    - Implementar a lógica de criar usuários no backend [Gabriel Lima]
    - Implementar criptografia de senha [Lourenço]
    - Implementar tela de cadastro [Gabriel Lima]
    - Implementar a lógica de cadastro de usuários com validação da entrada no frontend [Gabriel Teixeira]
    - Conectar tela de cadastro com backend [Gabriel Teixeira]

História #2: Como usuário, gostaria de poder fazer login na minha conta.
- Tarefas e responsáveis:
    - Implementar no backend a lógica de login [Gabriel Lima]
    - Implementar tela de login [Daniel]
    - Implementar a lógica de login com validação da entrada no frontend [Daniel]
    - Conectar tela de login com backend [Lourenço]
    - Implementar tela base para usuários logados [Lourenço]

História #3: Como usuário, gostaria de buscar um filme.
- Tarefas e responsáveis:
    - Implementar visual do componente de busca no frontend [Gabriel Teixeira]
    - Implementar a lógica do componente de busca no frontend [Gabriel Teixeira]
    - Conectar componente de busca com a API de filmes (TMDB) [Gabriel Teixeira]

História #4: Como usuário, gostaria de avaliar um filme.
- Tarefas e responsáveis:
    - Implementar visual do componente de avaliação no frontend [Gabriel Lima]
    - Implementar a lógica do componente de avaliação no frontend [Gabriel Lima]
    - Criar tabela de avaliações dos usuários no banco de dados [Daniel]
    - Implementar rotas no backend para salvar e ler avaliações [Daniel]
    - Implementar rotas no backend para editar e deletar avaliações [Lourenço]
    - Conectar componente de avaliação com o backend [Lourenço]

História #5: Como usuário, gostaria de visualizar informações de um filme selecionado.
- Tarefas e responsáveis:
    - Implementar página de detalhes de filme no frontend [Daniel]
    - Buscar e exibir informações detalhadas de filmes usando a API de filmes no frontend [Daniel]
    - Criar componente para exibir avaliações dos usuários sobre o filme no frontend [Gabriel Lima]
    - Implementar navegação do catálogo de filmes para a página de detalhes no frontend [Lourenço]

História #6:  Como usuário, gostaria de ver uma página de perfil com as avaliações de um usuário (incluindo a minha).
- Tarefas e responsáveis:
    - Criar o design da página de perfil no frontend, exibindo avaliações [Gabriel Lima]
    - Desenvolver endpoints no backend para buscar avaliações de um usuário específico [Gabriel Teixeira]
    - Implementar componentes no frontend para listar as avaliações [Daniel]

História #7: Como usuário, gostaria de marcar um filme como assistido.
- Tarefas e responsáveis:
    - Implementar botão de assistido [Lourenço]
    - Implementar no BD a relação entre usuário e filme [Lourenço]
    - Implementar no backend a lógica de um usuário marcar um filme como assistido [Gabriel Lima]
    - Caso um usuário avalie um filme, ele deve ser marcado como assistido [Gabriel Lima]

História #8: Como usuário, gostaria de saber quais são os filmes mais bem avaliados.
- Tarefas e responsáveis:
    - Implementar sessão de filmes mais bem avaliados na página principal [Gabriel Teixeira]
    - Implementar a lógica para receber os filmes com maior nota média e adicionar à lista da sessão [Daniel]
