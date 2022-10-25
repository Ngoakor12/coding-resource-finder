# Coding Resource Finder

An easier way to find coding related topics and projects on the [ACN syllabus](http://syllabus.africacode.net/).

Built with **ReactJS** and **NodeJS**.

[**Live project**](https://coding-resource-finder.netlify.app/) 🌐

[**Setup locally**](#local-setup) 🔧

## Table of Contents

- [Problem](#problem)
- [Tech Stack](#tech-stack)
- [Features](#challenges)
- [Running the Project Locally](#running-the-project-locally)
- [Running the Project Locally (Using Docker)](#running-the-project-locally-using-docker)
- [Editor Setup](#editor-setup)

## Problem

I like [ACN syllabus](http://syllabus.africacode.net/) and the people behind it. I go there whenever I want to learn something new to see if there are any relevant resources I can use.

The "problem" started when I noticed how searching resources required more clicks and I also had to use the default browser find feature(Ctrl+F). And, there is currently no way to save what resources I'm going through or planning to check out in the future.
To solve these problems that only someone who visits the site frequently notices. I decided to clone the website, not the entire website but the data(links to the resources) to be precise. Then add features that I know would make my life smoother using the original website.

## Tech Stack

- **ReactJS** - for the frontend
- **Context** - global state management
- **React Router** - Internal routing
- JSDOM - web scraping
- **ExpressJS** - API development

## Features

- Search for resources
- Bookmark resources you are busy with or want to work on next
- The website is keyboard navigate-able\*
- Fully responsive\*

These are almost always expected, but hardly correctly implemented.

## Challenges

- Getting the resources data without an API - Overcame this by learning web scraping, getting the data and creating an API to query the data in a less painful way.

## Lessons learned

- Finding undocumented APIs. I learned about it too late in this case.
- Using React Context for global state management.
- Web scraping using JSDOM.
- Deploying React frontends in a subfolder with GitHub Pages.
- Deploying NodeJS API in a subfolder using Heroku.
- Persisting data in local storage in React.
- Server-side and client-side pagination.

## Screenshots

![www ngoako com_coding-resource-finder_(myDevice highres desktop)](<./docs/screenshots/Screenshot%20(141).png>)
![www ngoako com_coding-resource-finder_(myDevice highres desktop) (1)](<./docs/screenshots/Screenshot%20(156).png>)

[More screenshots](./docs/SCREENSHOTS.md)

## Running the Project Locally

### Prerequisites

- Have [`git`](https://git-scm.com/downloads) installed
- Have [`Node.JS`](https://nodejs.org/en/download/) installed
- **[OPTIONAL]** Have [`Docker`](https://www.docker.com/) installed

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

## Running the Project Locally (Using Docker)

### Prerequisites

- Have [`Docker`](https://www.docker.com/) installed

### Running the Entire Application

- While in the project root directory (`"coding-resource-finder"`), and with the [`docker daemon`](https://docs.docker.com/get-started/overview/#the-docker-daemon) running, type `docker compose up -d`
- The web application will be available at `localhost:3000`

(Note: Do **NOT** follow the [Running only the Backend](#running-only-the-backend) and [Running only the Frontend](#running-only-the-frontend) steps, if you have deployed the entire application)

### Running only the Backend

- While in the project root directory (`"coding-resource-finder"`), type `docker build -t crf-backend ./backend`, to build the backend container image
- Type `docker run --name crf-backend -p 2856:2856 -d crf-backend` to run the docker container in detached mode
- The backend API is now available at `localhost:2856`

### Running only the Frontend

- While in the project root directory (`"coding-resource-finder"`), type `docker build -t crf-frontend ./frontend`, to build the frontend container image
- Type `docker run --name crf-frontend -p 3000:3000 -d crf-frontend` to run the docker container in detached mode
- The frontend web application is now available at `localhost:3000`

## Editor Setup

This project uses Prettier & ESLint to ensure consistency in code style.

To reduce friction during code review, please follow [the steps in CONTRIBUTING.md](CONTRIBUTING.md#editor_setup) to get set up.
