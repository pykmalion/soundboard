import { ReadStream } from 'tty';
import * as readline from 'readline';
import { KeyData } from './types/key-data';
// import { Observable } from 'rx/Observable';

// if (process.platform === 'win32') {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     rl.on('SIGINT', () => process.emit('SIGINT'));
// }


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode!(true);

process.stdin.on('keypress', (data: string, key: KeyData) => {

  console.log(`sequence: ${key.sequence}`);
  console.log(`meta: ${key.meta}`);
  console.log(`name: ${key.name}`);
  console.log(`ctrl: ${key.ctrl}`);
  console.log(`shift: ${key.shift}`);
  console.log();

  if (key.ctrl && key.name === 'c') process.exit();
});


// RawKeyHandler.init()
// RawKeyHandler.bind(() => console.log('Play sound for ctrl+c'), )

// setTimeout(() => {
//   console.log();
//   console.log('5 seconds passed. Exiting...');
//   process.exit();
// }, 5000);
