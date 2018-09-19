import { RawKeyHandler } from './types/raw-key-tester';

const player = require('play-sound')(opts = {players: 'aplay'});

RawKeyHandler.init()
  .bind({key: 'escape', ctrl: false, shift: false}, () => {
    console.log('Exiting...');
    process.exit();
  })
  .bind({key: 'c', ctrl: true, shift: false}, () => {
    console.log('Play sound for ctrl+c');
    player.play('../assets/sample.wav',
		(e) => e ? console.log(e) : null );
  })
  .bind({key: 'v', ctrl: true, shift: false}, () => {
    console.log('Play sound for ctrl+v');
  });

