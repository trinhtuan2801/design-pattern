const { exec, spawn } = require('child_process');

// Function to run npm commands sequentially

function runNpmCommands() {
  spawn('npm run choose', (error, stdout, stderr) => {
    const output = stdout.trim();
    console.log('----output', output);
  });
}

runNpmCommands();
