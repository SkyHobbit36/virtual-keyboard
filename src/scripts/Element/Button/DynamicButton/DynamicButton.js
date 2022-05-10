import Button from '../Button';

class DynamicButton extends Button {
  constructor(classes, code, text) {
    super(code, text);
    if (!classes) return;
    if (typeof classes === 'string') {
      this.element.classList.add(classes);
    } else {
      classes.map((className) => this.element.classList.add(className));
    }
  }
}
export default DynamicButton;
