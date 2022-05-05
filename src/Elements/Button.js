import Element from './Element'

class Button extends Element {
    constructor(text, classes) {

        super('button', 'btn', text)

        if (typeof classes === 'string' || !classes) {
            this.classList.add(classes)
        } else {
            for (const className of classes) {
                this.classList.add(className)
            }
        }

        Button.container.append(this)

        this.addEventListener('click', () => {
            Button.display.innerHTML += text
        })
    }

    static container
    static display
}
export default Button