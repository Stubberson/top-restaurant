import {homePage} from './home.js'
import {menuPage} from './menu.js'
import {aboutPage} from './about.js'

homePage()  // Load the home page first

// Nav bar functionality
const homeButton = document.querySelector('button#home')
const menuButton = document.querySelector('button#menu')
const aboutButton = document.querySelector('button#about')

homeButton.addEventListener('click', () => {
    homePage()
})

menuButton.addEventListener('click', () => {
    menuPage()
})

aboutButton.addEventListener('click', () => {
    aboutPage()
})