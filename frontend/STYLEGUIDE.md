# Style Guide

As an open-source codebase grows, different developers with different approaches to problem solving, software design and opinions will converge and attempt to push changes. When this happens, a universal guide for programming style will be needed to ensure a pattern is followed to allow for easier to understand code. That is the purpose of this style guide covering the front-end code.

### Contents

- [React/JavaScript](#1)
  - [Basic Rules](#1.1)
  - [Naming](#1.2)
  - [Tags](#1.3)
  - [Spacing](#1.4)
  - [Quotes](#1.5)
- [Editor Setup](#2)
  - [Install Prettier & ESLint](#2.1)
  - [Set up Prettier](#2.2)
  - [Set up ESLint](#2.3)

<h2 id='1'>React/JavaScript</h2>
<h3 id='1.1'>Basic Rules</h3>

- Follow the best practices contained in [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react).
- Always use JSX syntax.
- Avoid classes and use Hooks to the best possible extent.
- All components should be inside a **descriptive** folder. If a component falls under an **existing** category, e.g Buttons, place its .js file in there. If an existing category doesn't exist, but you feel you can create one, create a descriptive category and use it in naming the folder. If it is impossible to create a category, name the folder the same as the component, e.g if you need to build a Tooltip.js component, you can place it in a folder named Tooltips.
- All styles should be defined in `App.css`.
- SVGs are treated as reusable components. All SVGs are & should be placed in `src/svgs.js.`
- Abstract component **logic** into Context as much as possible.
- Use `<React.Fragment />` syntax instead of `<>` when creating fragments. Doing otherwise might result in an error depending on how your workspace is set up if you use VSCode. We're working on getting rid of this restriction.
- Use ES6 syntax to the best of your ability.
- State the export type when defining the function and not after.

  ```javascript
  // don't do this
  function LiftWeights(){
    // do stuff
  }
  export default LiftWeights


  // do this instead
  export default function SleepAllDay(){
    // do stuff
  }
  ```

- Always use camelCase for prop names.
- Omit the value of the prop when it is explicitly true. There's no need for `primary={true}`, simply use `primary`

<h3 id='1.2'>Naming</h3>

- **File extensions**: Use the .js extension for React components and any utility functions.
- **Component file names**: Component file/folder names should follow the same PascalCase format as React components. Component/folder names should be as descriptive as possible. Avoid loose names like "AsyncComponent" that could encompass a variety of components. Instead, use specific names like ResourceDetailsMenu.js. Don't be afraid to use relatively long names within a reasonable limit (~22 chars).

<h3 id='1.3'>Quotes</h3>

Always use double quotes (") for JSX attributes, but single quotes (') for all other JS.

```javascript
// bad
<Foo style='bar' />

// good
<Foo style="bar" />
```

<h3 id='1.4'>Spacing</h3>

- Always include a single space in your self-closing tag.

```javascript
// bad
<Foo/>

// also bad
<Foo                 />

// why would you do this
<Foo
 />

// good 👍🏽
<Foo />
```

- Do not pad JSX curly braces with spaces.

```javascript
// bad
<Foo bar={ no } />

// good
<Foo bar={yes} />
```

<h3 id='1.5'>Tags</h3>

Always self-close tags that have no children.

```javascript
// bad
<Button variant="primary"></Button>

// good
<Button variant="secondary" />
```

<h2 id='2'>Editor Setup</h2>

This project uses Prettier & ESLint to ensure consistency in code style. To ensure you are all set and to reduce friction during code review, please follow the steps below to get set up.

<h3 id='2.1'>Install Prettier & ESLint</h3>

Prettier & Eslint are part of the frontend dependencies. They will be installed whenever you run npm install in the `frontend` folder.

```
npm install
```

<h3 id='2.2'>Set up Prettier </h3>

If you use Visual Studio Code (recommmended), install the ['Prettier - Code formatter' extension](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) if you haven't done so already. For other editors, take a look at the [official Prettier docs](https://prettier.io/docs/en/editors.html).

Your code will now be formatted using Prettier, following code style as much as automatically possible once you save.

<h3 id='2.3'>Set up ESLint </h3>

If you use Visual Studio Code (recommmended), install the ['ESLint' extension](https://https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) if you haven't done so already. For other editors, take a look at the [official ESLint docs](https://eslint.org/docs/latest/user-guide/integrations#editors).
