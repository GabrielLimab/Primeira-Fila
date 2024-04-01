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
* Como usuário, gostaria de poder criar uma conta.
* Como usuário, gostaria de poder fazer login na minha conta.
* Como usuário, gostaria de buscar um filme.
* Como usuário, gostaria de avaliar um filme.
* Como usuário, gostaria de escrever uma resenha sobre o filme.
* Como usuário, gostaria de ver uma resenha de um usuário sobre um filme.
* Como usuário, gostaria de visualizar informações de um filme selecionado.
* Como usuário, gostaria de seguir outro usuário.
* Como usuário, gostaria de curtir resenhas de outros usuários.
* Como usuário, gostaria de ver uma página de perfil com as avaliações e resenhas de um usuário (incluindo a minha).
* Como usuário, gostaria de saber quais são os filmes mais bem avaliados.
* Como usuário, gostaria de ver as resenhas mais curtidas.
* Como usuário, gostaria de listar meus filmes favoritos.
* Como usuário, gostaria de visualizar a avaliação média de um filme.
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

História #5: Como usuário, gostaria de escrever uma resenha sobre o filme.
- Tarefas e responsáveis:
    - Implementar visual do componente de resenha no frontend [Gabriel Teixeira]
    - Implementar a lógica do componente de resenha no frontend [Gabriel Teixeira]
    - Implementar rotas no backend para salvar e ler resenhas [Gabriel Lima]
    - Implementar rotas no backend para editar e deletar resenhas [Lourenço]
    - Conectar componente de resenha com o backend [Daniel]

História #6: Como usuário, gostaria de ver uma resenha de um usuário sobre um filme.
- Tarefas e responsáveis:
    - Desenvolver layout de exibição de resenhas no frontend [Gabriel Teixeira]
    - Implementar funcionalidade para filtrar resenhas de filmes específicos no frontend [Gabriel Teixeira]
    - Criar endpoint no backend para fornecer resenhas de um determinado filme [Gabriel Lima]
    - Desenvolver consulta no banco de dados para selecionar resenhas por filme [Daniel]
    - Conectar a exibição de resenhas no frontend ao backend para mostrar resenhas reais [Lourenço]

História #7: Como usuário, gostaria de visualizar informações de um filme selecionado.
- Tarefas e responsáveis:
    - Implementar página de detalhes de filme no frontend [Daniel]
    - Buscar e exibir informações detalhadas de filmes usando a API de filmes no frontend [Daniel]
    - Criar componente para exibir avaliações dos usuários sobre o filme no frontend [Gabriel Lima]
    - Implementar navegação do catálogo de filmes para a página de detalhes no frontend [Lourenço]

História #8: Como usuário, gostaria de seguir outro usuário.
- Tarefas e responsáveis:
    - Implementar tabela de seguidores no banco de dados [Daniel]
    - Desenvolver endpoints no backend para seguir usuários [Gabriel Lima]
    - Criar botão de seguir no perfil do usuário no frontend [Lourenço]

História #9: Como usuário, gostaria de curtir resenhas de outros usuários.
- Tarefas e responsáveis:
    - Criar sistema de curtidas para resenhas no banco de dados [Daniel]
    - Implementar funcionalidade de curtir resenhas no backend [Gabriel Lima]
    - Desenvolver botão de curtir no frontend [Lourenço]
    - Exibir contagem de curtidas no frontend [Lourenço]
    - Atualizar a visualização de resenhas para incluir curtidas [Gabriel Teixeira]

História #10: Como usuário, gostaria de ver uma página de perfil com as avaliações e resenhas de um usuário (incluindo a minha).
- Tarefas e responsáveis:
    - Criar o design da página de perfil no frontend, exibindo avaliações e resenhas [Gabriel Lima]
    - Desenvolver endpoints no backend para buscar avaliações e resenhas de um usuário específico [Gabriel Teixeira]
    - Implementar componentes no frontend para listar as avaliações e resenhas [Daniel]