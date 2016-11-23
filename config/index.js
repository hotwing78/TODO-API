'use strict';
//This is the module used to connect to the database...it exports the connection string.

let configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://'+ configValues.uname +':'+ configValues.pwd + '@ds159507.mlab.com:59507/nodetodosample';
  }
}
