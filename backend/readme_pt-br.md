# Feedback Widget Backend

<table>
    <tr>
      <td>
        <a href="README.md">🇺🇸 Inglês</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./readme_pt-br.md" disabled>🇧🇷 Português</a>
      </td>
    </tr>
</table>


### Backend desenvolvido com NodeJS

Para executar esse projeto em modo de desenvolvimento, localmente, após clonar o repositório, execute `yarn` ou `npm install` para instalar as dependências.

Renomeie o arquivo `.env.example` para `.env` e defina as variáveis de ambiente do mailtrap.

É recomendado rodar os testes para conferir se tudo está funcionando bem, para isso, execute `yarn test` ou `npm run test`.

Para criar o banco de dados, execute `yarn prisma migrate dev` ou `npx prisma migrate dev`.

E então, para iniciar o projeto em modo de desenvolvimento: `yarn dev` or `npm run dev`

O servidor irá iniciar em http://localhost:3333