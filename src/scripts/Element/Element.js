class Element {
  constructor(
    tag,
    className = '',
    text = '',
    params = {},
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;

    this.element.innerHTML = text;

    Object.keys(params).forEach((param) => {
      this.element[param] = params[param];
    });
  }
}

export default Element;
