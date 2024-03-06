const pool = require('./db');

function getUsers(callback) {
  pool.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
}

module.exports = {
  getUsers
};
