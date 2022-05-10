import DynamicButton from '../Element/Button/DynamicButton/DynamicButton';
import TextButton from '../Element/Button/TextButton/TextButton';
import keyboardKeysOreder from './keyboardKeysOrder';
import { keyboard } from '../init';

export const keysObjectList = keyboardKeysOreder.map((el) => {
  if (el === 'Backspace') {
    return new DynamicButton(['backspace', 'l-text'], 'Backspace');
  }
  if (el === 'Delete') {
    return new DynamicButton('del', 'Delete', 'DEL');
  }
  if (el === 'CapsLock') {
    return new DynamicButton(['capslock', 'l-text'], 'CapsLock', 'Caps Lock');
  }
  if (el === 'ShiftLeft') {
    return new DynamicButton(['shift', 'l-text'], 'ShiftLeft', 'Shift');
  }
  if (el === 'ShiftRight') {
    return new DynamicButton(['shift', 'l-text', 'shiftRight'], 'ShiftRight', 'Shift');
  }
  if (el === 'ControlLeft') {
    return new DynamicButton(['ctrl', 'l-text'], 'ControlLeft', 'Ctrl');
  }
  if (el === 'ControlRight') {
    return new DynamicButton(['ctrl', 'l-text'], 'ControlRight', 'Ctrl');
  }
  if (el === 'AltLeft') {
    return new DynamicButton(['alt', 'l-text'], 'AltLeft', 'Alt');
  }
  if (el === 'AltRight') {
    return new DynamicButton(['alt', 'l-text'], 'AltRight', 'Alt');
  }
  if (el === 'ArrowUp') {
    return new TextButton('ArrowUp', '▲');
  }
  if (el === 'ArrowLeft') {
    return new TextButton('ArrowLeft', '◄');
  }
  if (el === 'ArrowDown') {
    return new TextButton('ArrowDown', '▼');
  }
  if (el === 'ArrowRight') {
    return new TextButton('ArrowRight', '►');
  }

  return new TextButton(el);
}).reduce((prev, curr) => {
  const objList = prev;
  objList[curr.code] = curr;
  keyboard.append(curr.element);
  return objList;
}, {});

export const keysTextButtontList = Object.values(keysObjectList)
  .filter((obj) => obj instanceof TextButton && !['Enter', 'Space', 'Tab'].includes(obj.code));
