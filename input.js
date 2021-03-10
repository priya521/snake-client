
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
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

    if (key === 'g') {
      connection.write('Say: Let\'s go!');
    }

    if (key === 'h') {
      connection.write('Say: I\'m in trouble here!');
    }

    if (key === 'j') {
      connection.write('Say: I can program Snake!');
    }
  });

  return stdin;
};

module.exports = { setupInput };