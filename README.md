# My Note Keeper REST API
A REST API using Node.js, Express.js, and MongoDB for a note-keeping application. It allows users to perform CRUD operations on their notes and connect to a MongoDB database and uses Mongoose for object modelling, it also contains error handling with a suitable status code and a descriptive error message.

## Installing Dependencies And Getting Started:
First of all, you should clone the repository and then install the needed dependencies.  Here is a step-by-step guide on how to install and run your project locally.

1. Clone the repository:
```
   git clone https://github.com/Rahaf-Mansour/my-note-keeper
   cd my-note-keeper
```
2. Install dependencies
```
npm i express mongoose
npm i --save-dev dotnet nodemon
```
3. Run the server
```
npm run devStart
```
## Each note contains:
1. Title
2. Content
3. Creation date.
   
## Features:
- **`GET /notes`**: Retrieve all notes.
- **`GET /notes/:id`**: Retrieve a specific note using its ID.
- **`POST /notes`**: Add a new note.
- **`DELETE /notes/:id`**: Delete a specific note using its ID.
- **`PATCH /notes/:id`**: Update a specific note using its ID.
   

## Acknowledgements
I extend my sincere gratitude to Foothill Technology Solutions for granting me the opportunity to participate in this internship cycle. Their unwavering support has been instrumental throughout the development of this project.

<img src="https://github.com/Rahaf-Mansour/fts-portfolio/assets/109438456/6c99016a-121f-43ac-a7eb-bb07321917e9" alt="fts-logo" width="250">

