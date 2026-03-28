import restaurantImg from './rest.jpg'

export function homePage() {
    const content = document.querySelector('div')

    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    const header = document.createElement('h1')
    const image = document.createElement('img')
    const paragraph = document.createElement('p')


    header.innerText = 'Restaurant Schöneberg'
    image.src = restaurantImg
    paragraph.innerText = 'The best restaurant in Schöneberg, lecker Essen, lecker Bierchen, lecker Leute!'

    content.appendChild(header)
    content.appendChild(image)
    content.appendChild(paragraph)
}