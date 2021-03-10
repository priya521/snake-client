
const { connect } = require('./client');
console.log('Connecting ...');
connect();


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  //stdin.resume();

const setupInput = function() {
  console.log("Exiting game.");
  process.exit();
}
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
return stdin;
}
module.exports = { setupInput };