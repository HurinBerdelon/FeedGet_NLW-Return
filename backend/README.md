# Feedback Widget Backend

<table>
    <tr>
      <td>
        <a href="README.md" disabled>🇺🇸 English</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./readme_pt-br.md" >🇧🇷 Portuguese</a>
      </td>
    </tr>
</table>


### Backend developed with NodeJS

After cloning the repository, `yarn` or `npm install` to install the dependencies.

Rename the file `.env.example` to `.env` and define mailtrap environmental variables.

You may want to run the tests to check if everything is working well, to do so, run `yarn test` or `npm run test`.

To create the database, run `yarn prisma migrate dev` or `npx prisma migrate dev`.

And them run `yarn dev` or `npm run dev` to run the app in development mode.

The server is going to run at http://localhost:3333