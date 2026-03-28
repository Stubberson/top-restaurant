export function aboutPage() {
    const content = document.querySelector('div')

    // First, empty the previous content
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

    header.innerText = 'About'
    paragraph.innerText = 'A small family business in the heart of Schöneberg!'

    content.appendChild(header)
    content.appendChild(paragraph)
}