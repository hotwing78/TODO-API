'use strict';
let Todos = require('../models/todoModel');

module.exports = function (app){

  app.get('/api/setupTodos',function(req,res){
    //seed database with initial data
    let starterTodos = [
      {
        username: 'Damon',
        todo: 'Learn MEAN stack',
        isDone: false,
        attachment: false
      },
      {
        username: 'Damon',
        todo: 'Learn Angular2',
        isDone: false,
        attachment: false
      },
      {
        username: 'Damon',
        todo: 'Learn React',
        isDone: false,
        attachment: false
      }
    ];
    Todos.create(starterTodos,function(err,results){
      res.send(results);
    });
  });

}
