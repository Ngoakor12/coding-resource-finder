# Contributing

Everyone is welcome to raise issues and or make pull requests. Here's a quick guide on how to get started with this project on your local machine:

1. Clone the repo

```bash
git clone https://github.com/Ngoakor12/coding-resource-finder.git
```

2. CD into the right directory
   **frontend** if you want to work on the react client

```bash
cd frontend
```

**backend** if you want to work on the node express server

```bash
cd backend
```

3. Install packages and dependencies

```bash
npm install
```

4. Run locally

**run frontend** (while in frontend folder)

```bash
npm start
```

**run backend** (while in backend folder)

```bash
npm run dev
```

5. Make a new branch

```bash
git checkout -b name-of-my-branch
```

7. Make your contributions

8. If you worked on the frontend, ensure your code is correctly linted before committing and opening a PR. Run `npm run lint` in the frontend directory to lint your code. If there are any errors, please correct them before making a commit.

9. Push your work

```bash
git push -u origin name-of-my-branch
```

10. Open a pull request

    <br />


<h2 id='editor_setup'>Editor Setup</h2>

This project uses Prettier & ESLint to ensure consistency in code style. To ensure you are all set and to reduce friction during code review, please install the ['Prettier - Code formatter'](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and the ['ESLint' extensions](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from Visual Studio Code if you haven't already done so to have the full benefit of automatic code linting and formatting.

For other editors, take a look at the [official Prettier](https://prettier.io/docs/en/editors.html) and [ESLint docs](https://eslint.org/docs/latest/user-guide/integrations#editors).
