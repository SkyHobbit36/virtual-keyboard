import './style.css'

const app = document.querySelector('.app')

const display = document.createElement('textarea')
display.className = 'display'
app.append(display)

const keyboard = document.createElement('div')
keyboard.className = 'keyboard'
app.append(keyboard)



for (let i = 0; i < 70; i++) {
    keyboard.innerHTML += `<div class="btn">${i}</div>`
}