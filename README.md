# Coding Resource Finder

An easier way to find coding related topics and projects on the [ACN syllabus](http://syllabus.africacode.net/). Built with ReactJS and NodeJS.

[**Live project**](https://coding-resource-finder.netlify.app/) 🌐

[**Setup locally**](#local-setup) 🔧

## Problem

I like [ACN syllabus](http://syllabus.africacode.net/) and the people behind it. I go there whenever I want to learn something new to see if there are any relevant resources I can use.
The "problem" started when I noticed how searching resources required more clicks and I also had to use the default browser find feature(Ctrl+F). And, there is currently no way to save what resources I'm going through or planning to check out in the future.
To solve these problems that only someone who visits the site frequently notices. I decided to clone the website, not the entire website but the data(links to the resources) to be precise. Then add features that I know would make my life smoother using the original website.

## Tech stack

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
  \*These are almost always expected, but hardly correctly implemented.

## Challenges

- Getting the resources data without an API - Overcame this by learning web scraping, getting the data and creating an API to query the data in a less painful way.

## Lessons learned

- Finding undocumented APIs. I learned about it too late in this case.
- Using React Context for global state management.
- Web scraping using JSDOM.
- Deploying React frontends in a subfolder with GitHub Pages.
- Serverside pagination.
- Deploying NodeJS API in a subfolder using Heroku.
- Persisting data in local storage in React.
- Server-side and client-side pagination.

## Screenshots

![www ngoako com_coding-resource-finder_(myDevice highres desktop)](<./docs/screenshots/Screenshot%20(141).png>)
![www ngoako com_coding-resource-finder_(myDevice highres desktop) (1)](<./docs/screenshots/Screenshot%20(156).png>)

[More screenshots](./docs/SCREENSHOTS.md)

## Local setup

**Clone repo**

```
git clone https://github.com/Ngoakor12/coding-resource-finder.git
```

**Install backend dependencies**(while in backend folder)

```
npm install
```

**Run API**

```
npm run dev
```

**Install frontend dependencies**(while in frontend folder)

```
npm install
```

**Run frontend**

```
npm start
```

#### Set up ESLint & Prettier

This project uses Prettier & ESLint to ensure consistency in code style. To reduce friction during code review, please follow the steps below to get set up.

**Install**

Prettier & Eslint are part of the frontend dependencies. They will be installed whenever you run `npm install` in the **frontend** folder.

**Set up Prettier**

If you use Visual Studio Code (recommmended), install the ['Prettier - Code formatter' extension](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). For other editors, take a look at the [official Prettier docs](https://prettier.io/docs/en/editors.html).

Your code will now be formatted using Prettier, following code style as much as automatically possible once you save.

**Set up ESLint**

If you use Visual Studio Code (recommmended), install the ['ESLint' extension](<[https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)>). For other editors, take a look at the [official ESLint docs](https://eslint.org/docs/latest/user-guide/integrations#editors).
