const fs = require('fs');
const cliSelect = require('cli-select');
const path = require('path');
const { spawn } = require('child_process');

fs.readdir(path.join(__dirname, 'patterns'), async (err, files) => {
  const options = {
    values: files,
    valueRenderer: (file) => {
      return file;
    },
  };
  const { value } = await cliSelect(options);
  const command = spawn('ts-node-dev', ['--respawn', `patterns/${value}`]);
  command.stdout.on('data', (output) => {
    console.log(output.toString());
  });
});
