import { RawKeyHandler } from "./types/raw-key-tester";

RawKeyHandler.init()
  .bind({key: 'escape', ctrl: false, shift: false}, () => {
    console.log('Exiting...');
    process.exit();
  })
  .bind({key: 'c', ctrl: true, shift: false}, () => {
    console.log('Play sound for ctrl+c');
  })
  .bind({key: 'v', ctrl: true, shift: false}, () => {
    console.log('Play sound for ctrl+v');
  });

