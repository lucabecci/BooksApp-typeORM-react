# BOOK-APP TYPEORM-REACT

#### This is simple app where you can save your books and eliminated. This app was created with typescript, react, node, typeORM, express and postgreSQL(i was used ElepanthSQL for the host of my postgreSQL databse in the cloud).

I used React/Javascript for the front-end and Node/Typescript for the back-end.

> Created by Brian Luca Becci
## 1. Started ⌨️

for get the project you will use:

```tsx
git clone "https://github.com/lucabecci/BooksApp-typeORM-react"
```

## 2. Pre-requeriments 🛠

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- npm > 6.X
- Docker(if you will run this project with Docker)

## 3. Installation 🔩

You will need run this comands for the installation:

```tsx
With npm: 
cd DevelopmentChallenge //we entered the directory.
cd frontend// enter in the frontend
npm install //install the frontend dependencies.
		and 
cd backend//enter in the backend
npm install //install the backend dependencies.

With yarn:
cd DevelopmentChallenge //we entered the directory.
cd frontend// enter in the frontend
yarn install //install the frontend dependencies.
		and 
cd backend//enter in the backend
yarn install //install the backend dependencies.
```

## 4. Use the project

### About the app

Actually, there are two separated apps. The Client which serves the FrontEnd (using React/Javascript), and the API (in Node/Express/Typescript).

### How to run the API

1. In your terminal, navigate to the `backend` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run build` for the api build
4. Run `npm start` to start the app.

### How to run the Client

1. In another terminal, navigate to the frontend directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

### How to run with Docker
0. You need Docker and docker-compose.
1. In your terminal, navigate to the main directory.
2. Run `docker-compose up` to create the image.

## 5. Project structure 📁

### Main

```tsx
|-- node_modules
|-- .prettierignore
|-- backend
|-- frontend
|-- .gitignore
|-- commitlint.config.js
|-- .prettierrc
|-- docker-compose.yml
|-- package.json
|-- README.md
|-- yarn.lock

```

### Backend 📂

```tsx
|-- build
|-- node_modules
|-- src
	|-- config
		|-- config.ts
	|-- controllers
		|-- index.controller.ts
		|-- book.controller.ts
	|-- database
		|-- database.ts
	|-- helpers
		|-- check.ts
	|-- entitys
		|-- Book.ts
	|-- routes
		|-- index.routes.ts
		|-- book.routes.ts
	|-- index.ts
|-- .dockerignore
|-- Dockerfile
|-- .env
|-- books.insomnia.json
|-- .gitignore
|-- nodemon.json
|-- package-lock.json
|-- package.json
|-- README.md
|-- tscongif.json
```

### Frontend 📂

```tsx
|-- build
|-- node_modules
|-- public
|-- src
	|-- components
		|-- Book.css
		|-- CreateBook.js
		|-- Message.js
		|-- Navigation.js
	|-- views
		|-- Books.js
		|-- Creator.js
        |-- Home.js
        |-- NotFound.js
	|-- App.js
	|-- App.css
	|-- index.js
|-- .dockerignore
|-- Dockerfile
|-- .gitignore
|-- package.json
|-- README.md
|-- yarn.lock

```

## 6. Build with 🛠

### Backend 🔧

DEPENDENCIES:

- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for node.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [typeORM](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings..
- [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling done right.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - Proposal to add Metadata to ECMAScript.

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution and REPL for node.js, with source map support.
- [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

### Frontend 🔧

DEPENDENCIES:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## 7. Database 📫

For the database i using PostgreSQL

- [PostgreSQL](https://www.postgresql.org/)
- [Cloud postgreSQL service](https://www.elephantsql.com/)
- Version: 12.5

## 8. Versioned 1️⃣

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

I using husky for the control in commits and push

## 9. Author 🙎🏻‍♂️

***Luca Becci -** code  and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)