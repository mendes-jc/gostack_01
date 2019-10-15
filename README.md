# Simple Project Manager

## RocketSeat - GoStack 9.0 - Challenge 01

This (very) simple project was made as an answer to the first challenge of GoStack 9.0, by RocketSeat.

It is a very simple API that manages simple projects with tasks.

## How can i run ?

Just clone this repo into any folder.\
Inside the project folder, run *yarn* to download all the dependencies.\
After that, just run: node index.js

## Routes

### GET /projects
It will get all projects in the "database" (an array, actually)

### GET /projects/[id]
Get a specific project based on its id

### POST /projects
Post a new project. You will need a json body like this:

{
  "id": "1",
  "title": "Test Project"
}

### PUT /projects/[id]
With this method you can change a project's title.
You'll need to pass a json body with the new title:

{
  "title": "New Title"
}

### POST /projects/[id]/tasks
Add a new task to an existing project.
You'll need a body with the task title:

{
  "title": "New task"
}

### DELETE /projects/[id]
Delete a project based on its id

### Details

It also has two middlewares:

- One of it verifies (when you pass an id) if there's a project with this id registered.
- The other one counts the number of requests that was made since the server is running and print it to the console.

### That's it!

It is a very simple project, but it feels good when you get acquainted to new resources.
If you think i made some kind of mistake, let me know, it's all about learning.
