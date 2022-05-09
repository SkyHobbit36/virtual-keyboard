import './style.css';
import { display, keyboard } from './scripts/init';
import TextButton from './scripts/Element/Button/TextButton/TextButton';
import DynamicButton from './scripts/Element/Button/DynamicButton/DynamicButton';
import { keysObjectList, keysTextButtontList } from './scripts/data/keysObjectList';

let caps = false;
const changeSymbols = () => {
  keysTextButtontList.forEach((obj) => {
    obj.setSymbol();
  });
};

const removeActiveClass = (code) => {
  const obj = keysObjectList[code];
  if (!obj) return;

  if (obj.element.classList.contains('active')) {
    obj.element.classList.remove('active');
  }
};

const onEnable = (code, event) => {
  const obj = keysObjectList[code];
  if (!obj) return;

  if (code !== 'CapsLock') {
    obj.element.classList.add('active');
  } else {
    obj.element.classList.toggle('active');
  }

  if (obj instanceof TextButton) {
    event.preventDefault();
    display.add(obj.currentSymbol);
  }
  if (obj instanceof DynamicButton) {
    event.preventDefault();
  }

  if (event.shiftKey) {
    TextButton.shift = true;
    changeSymbols();
  }

  if (event.ctrlKey && event.altKey) {
    if (TextButton.lang === 'eng') {
      localStorage.setItem('lang', 'ru');
      TextButton.lang = 'ru';
    } else {
      localStorage.setItem('lang', 'eng');
      TextButton.lang = 'eng';
    }
    changeSymbols();
  }

  if (code === 'Backspace') {
    display.backspace();
  } else if (code === 'Delete') {
    display.delete();
  }
  if (code !== 'CapsLock') {
    const removeEvent = () => {
      removeActiveClass(code);
      window.removeEventListener('mouseup', removeEvent);
    };
    window.addEventListener('mouseup', removeEvent);
  } else {
    if (TextButton.shift) {
      TextButton.shift = false;
      caps = false;
    } else {
      TextButton.shift = true;
      caps = true;
    }
    changeSymbols();
  }
};

const onDisable = (code) => {
  if (code !== 'CapsLock') {
    removeActiveClass(code);
  }
  if ((code === 'ShiftLeft' || code === 'ShiftRight') && !caps) {
    TextButton.shift = false;
    changeSymbols();
  }
};

window.addEventListener('keydown', (event) => {
  onEnable(event.code, event);
});

keyboard.addEventListener('mousedown', (event) => {
  onEnable(event.target.dataset.code, event);
});

window.addEventListener('keyup', (event) => {
  onDisable(event.code);
});

window.addEventListener('mouseup', (event) => {
  onDisable(event.target.dataset.code);
});
