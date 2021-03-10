
const { connect } = require('./client');
console.log('Connecting ...');
connect();

if (key === 'w') {
  connection.write('Move: up');
}

if (key === 'a') {
  connection.write('Move: left');
}

if (key === 's') {
  connection.write('Move: down');
}

if (key === 'd') {
  connection.write('Move: right');
}