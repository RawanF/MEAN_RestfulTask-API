const mongoose = require('mongoose');
const Task = mongoose.model('Task');
module.exports = {
    GetAllTasks: function (req, res) {//Retrieve all Tasks
        Task.find()
            .then(data =>{console.log("data in server",data),res.json(data)})
            .catch(err => res.json(err));
    },
    GetTaskById: function (req, res) {//Retrieve a Task by ID
        Task.find({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newTask: function (req, res) {//Create a Task
        console.log(req.body);
        const t = new Task();
        t.title = req.body.title;
        console.log(req.body.title)
        t.description = req.body.description;
        console.log(req.body.description)
        t.completed = req.body.completed;
        console.log(req.body.completed)
        console.log(t)
        // Task.create({title:req.body.title, description:req.body.description,completed:req.body.completed })
        t.save()
            .then(console.log("Task Created succesfully"))
            .catch(err => res.json(err));
    },
    EditTask: function (req, res) {//Update a Task by ID
        Task.update({ _id: req.params.id }, { $set: { 'title': req.body.title, 'description': req.body.description, 'completed': req.body.completed, 'createdAt': Date.now } })
            .then(data => { console.log("Task Updated succesfully"), res.json(data) })
            .catch(err => res.json(err));

    },
    DeleteTask: function (req, res) {//Delete a Task by ID
        Task.remove({ _id: req.params.id })
            .then(console.log("Task Deleted succesfully"))
            .catch(err => res.json(err));
    },
}