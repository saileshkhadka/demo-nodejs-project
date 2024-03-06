const pool = require('./db');

function getProducts(callback) {
  pool.query('SELECT * FROM products', (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
}

module.exports = {
  getProducts
};
