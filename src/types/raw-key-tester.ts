import * as readline from 'readline';
import { KeyData } from './key-data';

export interface KeyConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
}

export class RawKeyHandler {

  private static init_ = false;

  static init(): RawKeyHandler {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode!(true);
    return new RawKeyHandler();
  }

  private constructor() {
    RawKeyHandler.init_ = true;
  }

  bind(config: KeyConfig, callback: () => void): RawKeyHandler {

    if (config.key.length > 0) {
      process.stdin.on('keypress', (chunk: string, keyData: KeyData) => {
        if (keyData.ctrl === config.ctrl &&
            keyData.shift === config.shift &&
            keyData.name === config.key)
        callback();
      });
    }
    else {
      console.log(`Cannot bind empty key!`);
    }

    return this;
  }
}