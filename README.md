
# Mini ecommerce - Frontend

Essa aplicação tem como objetivo ser a parte para ser utilizada pelo cliente final de um projeto voltado para ser um mini ecommerce.

A loja de produtos recebeu um deploy na [Vercel](https://vercel.com) e pode ser acessado por ~~[esse link]()~~

## Overview
Durante o desenvolvimento, assim como a parte de administração dos produtos, utilizei  padrões e conceitos disponibilizados pela documentação do [Nuxt 3](https://nuxt.com/docs/guide/directory-structure/nuxt), ferramenta principal que utilizei para desenvolver esse projeto.

A aplicação se comunica diretamente com a API desenvolvida para esse projeto ([repositório](https://github.com/ppessanhadev/mini-ecommerce-api)) e ela foi desenvolvida da maneira mais simples e descomplicada possível, deixando toda lógica e regras de negocio voltado para o backend.

#### Tecnologias
Utilizei as seguintes principais ferramentas:

- [pinia](https://pinia.vuejs.org/introduction.html) para gerenciamento de estado global e compartilhamento de informações entre componentes.
- [tailwind](https://docs.nestjs.com/techniques/mongodb) para estilização geral de toda a aplicação e facilitar a parte de responsividade.
- [prettier](https://prettier.io) e [eslint](https://eslint.org) para consistência e padronização de código

#### Páginas

A loja em sí possuí 3 páginas, sendo elas:

| Página                | Descrição                                                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| /                     | Página voltada listagem de produtos disponiveis, gerenciado pelo admin                                                                |
| /cart                 | Página voltada para listagem de todos os produtos no carrinho, sendo atualizado conforme a modificações e com persistencia de dados   |
| /{qualquer_parametro} | Página "not found", caso tente acessar uma outra página que não existe, lhe dá a opção de ser redirecionado para a página de produtos |

#### Como rodar o projeto

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar localmente:

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote [pnpm](https://pnpm.io), para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `cp .env.example .env`
2. `pnpm install`
2. `pnpm dev`


>> A aplicação estará rodando em: http://localhost:3000
