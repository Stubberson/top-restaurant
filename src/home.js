import restaurantImg from './rest.jpg'

export function homePage() {
    const content = document.querySelector('div')

    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    const text = document.createElement('div')
    const header = document.createElement('h1')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    header.innerText = 'Restaurant Schöneberg'
    image.src = restaurantImg
    paragraph.innerText = 'The best restaurant in Schöneberg, lecker Essen, leckere Bierchen, leckere Leute!'

    text.appendChild(header)
    text.appendChild(paragraph)
    content.appendChild(text)
    content.appendChild(image)
}