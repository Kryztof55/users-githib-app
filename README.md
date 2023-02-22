# GitHub Users Technical Test

This application was created by create-react-app

#### Installation

Some of the dependecies installed to build this application are:
-tailwindcss
-react-query
-axios
-react-router-dom
-sass

```sh
npm install
```

#### Start local server

```sh
npm run start
```

#### Start Storybook

```sh
npm run storybook
```

#### Creating an optimized production build

```sh
npm run build
```

#### You may serve it with a static server

```sh
serve -s build
```

#### Run Unit tests

```sh
npm test
```

## Application description

This application was build by using Tailwind and UI Components built from scratch using Sass. In order to develop an insolate component (Following atomic design and BEM for styles), test it and how the props work, I used [Storybook library](https://storybook.js.org/)

Components Built from scratch

- Atoms
  -- Button
  -- Input Search
  -- Link

- Molecules
  --Avatar
  --Header

Components using tailwind css

- User's details was built by Tailwind css
- General Layout

The folder structure is easy, components folder contains simple components and views contains the pages to show the application, utils for helpers functions.

By using react-query and axios to handle the API request, in order to avoid multiple request while user is typing in the search, I developed a debaunce function.

In order to handle the router I used React Router Dom, passing as parameter in the url the username to request user details

I developed just a single test for Avatar component just it render correctly

// Created by Christopher Farango c.farango.dg@gmail.com
