import './style.css'
import {homePage} from './home.js'
import {menuPage} from './menu.js'
import {aboutPage} from './about.js'

homePage()

const homeButton = document.querySelector('button#home')
const menuButton = document.querySelector('button#menu')
const aboutButton = document.querySelector('button#about')
const buttons = [homeButton, menuButton, aboutButton]

const tabClicked = evt => {  // Helper to indicate which tab is open in the nav
    for (let btn of buttons) {
        btn.disabled = false
    }
    evt.target.disabled = true
}

for (let btn of buttons) {
    btn.addEventListener('click', (event) => {
        switch (btn) {
            case homeButton:
                homePage()
                break
            case menuButton:
                menuPage()
                break
            case aboutButton:
                aboutPage()
        }
        tabClicked(event)
    })
}