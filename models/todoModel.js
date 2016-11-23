'use strict';
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  attachment: Boolean
});

let Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
