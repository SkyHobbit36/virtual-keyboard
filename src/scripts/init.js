import Display from './Element/Display/Display';
import Element from './Element/Element';
import TextButton from './Element/Button/TextButton/TextButton';

const addElement = (addTo, el, className, text, params) => {
  const { element } = new Element(el, className, text, params);
  addTo.append(element);
  return element;
};

const app = addElement(document.body, 'div', 'app');
addElement(app, 'div', 'desctiption', '<p>Клавиатура сделана под ОС Windows</p><p>Чтобы поменять язык ввода нажмите Ctrl + Alt</p>');
const display = new Display(app);
const keyboard = addElement(app, 'div', 'keyboard');
keyboard.classList.add('eng');

TextButton.lang = localStorage.getItem('lang');

export { display, keyboard };
