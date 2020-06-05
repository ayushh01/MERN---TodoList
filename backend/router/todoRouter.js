const express = require('express');

const Todo = require('../models/todo');

const todoRouter = express.Router();

todoRouter.route('/')
.get((req,res,next)=>{
    Todo.find({})
    .then((todo)=>{
        res.json(todo);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

todoRouter.route('/:id').get(function(req,res,next) {
    let id = req.params.id
    Todo.findById(id , function(err,todo) {
        res.json(todo);
    })
});

todoRouter.route('/add')
.post((req,res,next)=>{
    Todo.create(req.body)
    .then((todo)=>{
        res.status =200;
        res.json({'todo': 'todo added successfully'});
    },(err)=>next(err))
    .catch(err=>{
        res.status = 400;
        res.send('Adding failed');
    })
});

todoRouter.route('/update/:id')
.post((req,res,next)=>{
    Todo.findById(req.params.id)
    .then((todo)=>{
        if(!todo)
        {
            res.status =400;
            res.send('Data Not Found');
        }
        else
        {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save()
            .then((todo)=>{
                res.json('Todo Updated')
            },(err)=>next(err))
            .catch(err=>{
                res.status =400;
                res.send('Update not possible');
            })
        }
    })
});

module.exports = todoRouter;