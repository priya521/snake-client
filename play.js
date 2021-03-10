//const net = require('./client/');
//const { IP, PORT } = require('./constants');

// const connect = function() {
//   const conn = net.createConnection({
//     host: '135.23.222.131',
//     port: '50542'
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');

//   conn.on('connect', () => {
//     console.log("Successfully connected to game server.");
//     conn.write('Name: Priya');
//   });

//   conn.on('data', (data) => {
//     console.log(data);
//   });

//   return conn;
// };
// console.log('Connecting ...');
// connect();
//module.exports = { connect };
const { connect } = require('./client');
console.log('Connecting ...');
connect();