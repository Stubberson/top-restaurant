export function menuPage() {
    const content = document.querySelector('div')

    // First, empty the previous content
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

    header.innerText = 'Menu'
    paragraph.innerText = 'Schnitzel – 20€'

    content.appendChild(header)
    content.appendChild(paragraph)
}