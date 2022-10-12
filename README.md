# About This Project: Plexxis Fullstack JS CRUD Exercise

CRUD application that can do the following:

1. Retrieve employees from a REST API
2. Display the employees in a React application using functional components.
3. Used React table to display the employee data as well as used filter and sort hooks to search employees by name or sort them by ascending or descending.
4. Used Sass compiler for styling. I feel that Sass keeps style organized and DRY by allowing you to reuse variables and mixins.
5. Includes UI mechanisms for creating, updating and deleting employees as well as their respective endpoints using axios. I also created forms with inputs that are controlled with state for form validation. I wanted to showcase use of react hooks.
6. Uses a relational database to store the data using SQLite. This was my first introduction to SQLite but I really wanted to take on the challenge of learning how to use it.
7. My main focus for this interview exercise was to showcase my ability and desire to learn and push myself while also prioritizing organized code to the best of my abilities using folders, utils file to re use functions and applying BEM-naming for classes.
8. Created a single repository that contains the front end and back end as well as several feature branches so you are able to see my progress and commits through the process of developing this exercise. I focus on clear and concise commit messages.
9. I started the project from scratch since I wanted to showcase my current knowledge in React and Node/Express.

## 🧠 Learning Process & Blockers

1. Learned React tables for the first time using React Table documentation. I learned a lot from it, specially how beneficial it is to sort and search data.
2. Applied previous knowledge of MySQL to learn SQLite for the first time using Knex.js documentation.
3. Run into some blockers using React tables & SQLite but I was able to overcome them using stack overflow and researching.
4. A big blocker was overthinking if I should add a .env file as well as if the code can be more organized or if I should add more. I really would appreciate any feedback as I work toward improving and learning the best way to do things.

## 💻 Main tech Tools used for this project

### Front-End

React-app & Sass

React Table

Git & GitHub

### Back-End

Node/Express

#### Database

Knex/SQLite

## Installation

### Follow these steps to run a local instance of this project:

1. Clone or download this repository.

2. You will need node, npm, and SQLite already installed in your computer.

3. Run npm install from the server directory to install dependencies.

```
$ cd server
$ npm install

```

4.Run migrations file.

```
npm run migrate or npx knex migrate:latest
```

5. Run seed file to populate data on the database.

```
npm run seed or npx knex seed:run
```

6. Start the server.

```
npm start
```

### Set up Front-End

7. Run npm install from the client directory to install dependencies.

```
$ cd ../client
$ npm install

```

8. Run npm start to load the react app

```
npm start
```
