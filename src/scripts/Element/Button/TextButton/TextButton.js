import Button from '../Button';
import keys from '../../../data/keys';

class TextButton extends Button {
  constructor(code, text) {
    super(code, text);

    const { eng, ru } = keys[code];
    const [engDefault, engUpperCase] = eng;
    const [ruDefault, ruUpperCase] = ru;

    this.code = code;

    this.engDefault = engDefault;
    this.engUpperCase = engUpperCase;
    this.ruDefault = ruDefault;
    this.ruUpperCase = ruUpperCase;

    this.setSymbol();

    if (code === 'Enter') {
      this.element.classList.add('enter');
      this.element.classList.add('l-text');
      this.currentSymbol = '\n';
      this.text = 'Enter';
    } else if (code === 'Space') {
      this.element.classList.add('space');
      this.currentSymbol = ' ';
      this.text = ' ';
    } else if (code === 'Tab') {
      this.element.classList.add('tab');
      this.currentSymbol = '\t';
      this.text = 'TAB';
    }
    this.setText(this.text);
  }

  setText(text) {
    this.element.innerHTML = text;
  }

  setSymbol() {
    if (TextButton.lang === 'eng') {
      // eslint-disable-next-line no-unused-expressions
      TextButton.shift
        ? this.currentSymbol = this.engUpperCase
        : this.currentSymbol = this.engDefault;
    } else {
      // eslint-disable-next-line no-unused-expressions
      TextButton.shift
        ? this.currentSymbol = this.ruUpperCase
        : this.currentSymbol = this.ruDefault;
    }
    this.text = this.currentSymbol;
    this.setText(this.currentSymbol);
  }

  static shift = false;

  static lang = 'eng';
}
export default TextButton;
