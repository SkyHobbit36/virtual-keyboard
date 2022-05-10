import Element from '../Element';

class Display extends Element {
  constructor(container) {
    super('textarea', 'display', '', { spellcheck: false });
    container.append(this.element);
  }

  add(simbol) {
    this.element.focus();

    let startIndex = this.element.selectionStart;
    let endIndex = this.element.selectionEnd;
    if (startIndex !== endIndex) {
      this.del();
    }
    startIndex = this.element.selectionStart;
    endIndex = this.element.selectionEnd;
    const start = this.element.value.slice(0, endIndex);
    const end = this.element.value.slice(endIndex);
    this.element.value = start + simbol + end;
    this.element.selectionStart = endIndex + 1;
    this.element.selectionEnd = endIndex + 1;
  }

  del() {
    this.element.focus();

    const startIndex = this.element.selectionStart;
    const endIndex = this.element.selectionEnd;
    const start = this.element.value.slice(0, startIndex);
    const end = this.element.value.slice(endIndex);
    this.element.value = start + end;
    this.element.selectionStart = startIndex;
    this.element.selectionEnd = startIndex;
  }

  backspace() {
    if (this.element.selectionStart !== this.element.selectionEnd) {
      this.del();
    } else {
      this.element.focus();

      let startIndex = this.element.selectionStart - 1;
      if (startIndex < 0) startIndex = 0;
      const endIndex = this.element.selectionEnd;
      const start = this.element.value.slice(0, startIndex);
      const end = this.element.value.slice(endIndex);
      this.element.value = start + end;
      this.element.selectionStart = startIndex;
      this.element.selectionEnd = startIndex;
    }
  }

  delete() {
    if (this.element.selectionStart !== this.element.selectionEnd) {
      this.del();
    } else {
      this.element.focus();

      const startIndex = this.element.selectionStart;
      const endIndex = startIndex + 1;
      const start = this.element.value.slice(0, startIndex);
      const end = this.element.value.slice(endIndex);
      this.element.value = start + end;
      this.element.selectionStart = startIndex;
      this.element.selectionEnd = startIndex;
    }
  }
}

export default Display;
