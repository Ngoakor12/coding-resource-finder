# Contributing Guide

Everyone is welcome to raise issues and/or make pull requests.

In this guide, you will be guided through the usage/contribution flow, which includes:

- Running the project locally
- Opening an issue
- Creating a PR (pull-request)
- Contributing code

## Running the project

### Prerequisites

- Have [`git`](https://git-scm.com/downloads) installed
- Have [`Node.JS`](https://nodejs.org/en/download/) installed

### Cloning the Repository

- Open `terminal` in the `directory` you want to clone this repository to
- In the terminal, type `git clone https://github.com/Ngoakor12/coding-resource-finder.git`
- Type `cd ./coding-resource-finder` to navigate to the root of the project directory

### Running the Backend

- While in the project root directory (`"coding-resource-finder"`), type `cd ./backend` in the terminal, to navigate to the `backend` directory
- Type `npm install` to install project dependencies
- Type `npm run dev` to run the backend server/API

### Running the Frontend

- While in the project root directory (`"coding-resource-finder"`), type `cd ./frontend` in the terminal, to navigate to the `frontend` directory
- Type `npm install` to install project dependencies
- Type `npm run start` to run the frontend web application

[Optionally: Run `npm run lint` to detect (and even auto-fix) code-styling issues]

## Opening an Issue

### Guidelines

Before opening any issue, make sure that:

- No similar issue already exists, by navigating to the `Issues` tab on the repository page and going through the `open` issues
- Add relevant labels to your issues, such as `enhancement`, `bug`, `feature-request`, `backend` etc.
- If you're submitting a PR for an already `closed` issue, `reopen` that issue and state what your PR addresses that the prior one had left out

## Creating a PR

### Guidelines

Before creating an PR, make sure that:

- You navigate through `open` issues, and if one interests you, you ask to work on it. That way, you can be assigned the PR, and others will know that you're already working on it
- Avoid opening PRs that might not have an accompanying issue. If you want to add something, open an issue beforehand, and discuss your changes/additions with the maintainers
- Reference related issues, that your PR resolves, via the provided PR template

## Contributing Code

To contribute code to the project, follow these steps:

- `clone` the repositroy
- `fork` the repository
- Add your forked repo as a remote-url locally using `git remote add <forked-repo-name> <forked-repo-url>`
- Whenever you work on something, make sure you branch out to another branch using `git checkout -b <branch-name>`
- Before making any changes, ensure you're strictly following the `style-guide`, `coding-conventions` and `practices` as requested by the maintainers
- When you're done with your changes, use:
  - `git add .` to add all changed files
  - `git commit -m "<commit-message>"` to mention what changes you've introduced
  - `git push -u <forked-repo-name> <branch-name>` to push your changes to the remote repository
- Once pushed, go over to the repository page, and you'll see a `Compare & pull request` button, click it
- Make sure the PR is being made to the `master` branch of the original repository (this one)
- You'll then be redirected to a page with the PR template, fill it out accordingly, and then `Create pull request`
- You're done! Happy Coding!

## Editor Setup

This project uses Prettier & ESLint to ensure consistency in code style. To ensure you are all set and to reduce friction during code review, it is _recommended_ that you install the ['Prettier - Code formatter'](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and the ['ESLint' extensions](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from Visual Studio Code if you haven't already done so to have the full benefit of automatic code linting and formatting.

For other editors, take a look at the [official Prettier](https://prettier.io/docs/en/editors.html) and [ESLint docs](https://eslint.org/docs/latest/user-guide/integrations#editors).
