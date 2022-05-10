import Element from '../Element';

class Button extends Element {
  constructor(code, text) {
    super('button', 'btn');
    this.element.innerHTML = text || code;

    this.code = code;

    this.element.dataset.code = code;
  }
}

export default Button;
