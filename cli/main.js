#!/usr/bin/env node

const { throws } = require('assert');
const {
  spawn
} = require('child_process');
const { join } = require('path');



const args = process.argv.slice(2);

function main() {
  const command = args[0];


  let lite = null;


  switch (command) {
    case "dev":
      lite = spawn(join(__dirname, '../bin/main'), ['--dev']);
      break;
    case "run":
      lite = spawn(join(__dirname, '../bin/main'));
      break;

    default:
      console.error("Please either  run dev or run")
      break;
  }
  if (lite != null) {
    lite.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    lite.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    lite.on('error', (error) => {
      console.error(`An error occurred: ${error}`);
    });

    lite.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      process.exit(code);
    });
  }
}

main();