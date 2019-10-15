const express = require('express');

const server = express();
server.use(express.json()); //Specify that we're going to use JSON in requests

// Data
const projects = [{id: "1", title: "Project01", tasks: []}]; // {id: "1", title: "Projeto1", tasks: []}
let reqCount = 0;

//Middlewares
const checkProject = (req, res, next) => {
    for(let i = 0; i < projects.length; i++){
        if(projects[i].id == req.params.id){
            req.projectIndex = i;
            break;
        }
    }
    if(req.projectIndex == null){
        return res.status(400).json({message: 'Project not found with this id.'});
    }

    next();
}

const logRequests = (req, res, next) => {
    reqCount++;
    console.log(`Total requests: ${reqCount}`);
    next();
}

//Define Global middlewares

server.use(logRequests);

//REST methods

server.get('/projects', (req, res) => { //Get all projects
    res.json(projects);
})

server.post('/projects', (req, res) =>{ //Create a new project
    projects.push({id: req.body.id, title: req.body.title, tasks: []});
    res.status(201).json({message: 'Project created!', projectList: projects})
})

server.put('/projects/:id', checkProject, (req, res) => {
    const { id } = req.params;
    const title = req.body.title;
    const index = req.projectIndex;

    projects[index].title = title;
    return res.status(200).json({message: 'Project changed successfully!'});
})  

server.delete('/projects/:id', checkProject, (req, res) => {
    const { id } = req.params;
    const index = req.projectIndex;

    projects.splice(index, 1);
    return res.status(200).json({message: 'Project removed successfully!'});
})

server.post('/projects/:id/tasks', checkProject, (req, res) => {
    const { id } = req.params;
    const newTask = req.body.title;
    const index = req.projectIndex;

    projects[index].tasks.push(newTask);
    return res.status(200).json({message: 'New task added successfully!'});
})

console.log('Server running at port 3000');
server.listen(3000);