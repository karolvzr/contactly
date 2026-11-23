# Contactly

Aplicação web desenvolvida com React para listar, visualizar e pesquisar usuários, consumindo dados de uma API pública. O projeto apresenta os dados de forma organizada, com cards, campo de pesquisa e feedback de carregamento.

## Tecnologias utilizadas

- React 18+
- JavaScript (ES6+)
- Vite
- Axios
- HTML5
- CSS3

## Funcionalidades

- Consumo de dados de uma API pública.
- Listagem de usuários em cards.
- Exibição de nome, e-mail, cidade e empresa.
- Pesquisa de usuários pelo nome.
- Feedback visual durante o carregamento.
- Mensagem de erro caso não seja possível carregar os dados.
- Layout responsivo para diferentes dispositivos.

## API utilizada

[JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

A API fornece dados fictícios de usuários utilizados para demonstração e desenvolvimento.

##  Estrutura do projeto

```text
src/
├── components/
│   └── UserCard.jsx
├── services/
│   └── api.js
├── App.jsx
├── index.css
└── main.jsx
```

##  Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/contactly.git
```

2. Entre na pasta do projeto:

```bash
cd contactly
```

3. Instale as dependências:

```bash
npm install
```

4. Instale o Axios, caso necessário:

```bash
npm install axios
```

5. Execute o projeto:

```bash
npm run dev
```

6. Acesse o endereço disponibilizado no terminal, normalmente:

```text
http://localhost:5173
```

##  Objetivo

O projeto foi desenvolvido com o objetivo de praticar o consumo de APIs externas utilizando React, Axios, useEffect, useState, componentização, props e renderização de listas com map().

##  Desenvolvido por Karolyne Araujo

Projeto acadêmico – Listagem de Dados com React, Vite e Axios.

