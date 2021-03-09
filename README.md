# Treinamento Ignite - Fundamentos de NodeJS

Neste projeto, foi desenvolvido uma API Rest de gerenciamento de cursos, onde foi abordado os seguintes conceitos:

- API Rest
- Criação de uma API NodeJS
- Framework Express
- Utilização do Nodemon
- Rotas da aplicação
- Tipos de parâmetros: Query Params, Route Params e Resquest Body.

Para que os dados fiquem dinâmicos, foi criado uma variável no projeto de cursos, onde cada projeto inserido possui
um UUID (Universal Unique ID) e o respectivo nome do curso.

## Métodos

- ** `POST /courses`**: A rota deve receber `name` dentro do corpo da requisição. Ao cadastrar um novo curso, será devolvido
um objeto no seguinte formato: `{id: "uuid", name}`;

- ** `GET /courses`**: Lista todos os cursos cadastrados na API;

- ** `PUT /courses/:id`**: A rota deve receber `id` nos parâmetros da requisição. Ao atualizar o nome do curso, será devolvido
um objeto no seguinte formato: `{id: "uuid", name}`;

- ** `DELETE /courses/:id`**: A rota deve receber `id` nos parâmetros da requisição. Ao deletar o curso, será devolvido
um status code 200;

## Como utilizar o projeto

Para baixar e utilizar o projeto:

```bash
$ git clone https://github.com/raulneto90/ignite-nodejs-fundaments
$ cd ignite-nodejs-fundaments

# Instalar as dependências do projeto
$ yarn

# Rodar o projeto
$ yarn dev
```

Feito com ❤ por Raul Neto. Me siga no [Linkedin](https://www.linkedin.com/in/raul-neto-777bb988/)