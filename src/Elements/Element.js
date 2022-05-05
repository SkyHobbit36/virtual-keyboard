class Element {
    constructor(
        tag,
        className = '',
        text = '',
        params = {}
    ) {
        this.item = document.createElement(tag)
        this.item.className = className
        for (const param in params) {
            this.item[param] = params[param]
        }
        this.item.innerHTML = text
        return this.item
    }
}

export default Element