process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd.toLowerCase() === 'pwd') {
    //output current path
    process.stdout.write(process.cwd());
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\npromt > ');
})
