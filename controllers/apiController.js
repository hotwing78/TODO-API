'use strict'
let Todos = require('../models/todoModel');
let bodyParser = require('body-parser');

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Get views for a particular username
  app.get('/api/todos/:uname', function(req,res){

    Todos.find({ username: req.params.uname },function(err, todos){
      if(err) throw err;

      res.send(todos);
    });
  });

  //Get individual todos via id
  app.get('/api/todo/:id', function(req,res){
    //Find the id by the specified id in params (URL);
    Todos.findById({ _id: req.params.id}, function(err,todo){
       if(err) throw err
       res.send(todo);
    });
  });

  //Now a to add a todo with a POST method
  app.post('/api/todo',function(req, res){
    //We can call req.body do to body-parser node module
    if(req.body.id){
      Todos.findByIdAndUpdate(req.body.id,
        {
        todo: req.body.todo,
        isDone: req.body.isDone,
        attachment: req.body.attachment
        },
        function(err,todo){
          if(err) throw err;
          res.send('Success');

        });
    }else{

      let newTodo = Todos({
        username: 'Damon',
        todo: req.body.todo,
        isDone: req.body.isDone,
        attachment: req.body.attachment
      });
      newTodo.save(function(err){
        if(err) throw err;
        res.send('Successfuly saved')
      })
    }

  });

  app.delete('/api/todo', function(req,res){
    Todos.findByIdAndRemove(req.body.id,function(err){
      if(err) throw err;
      res.send('Successfuly deleted');
    });

  });
}
