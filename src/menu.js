export function menuPage() {
    const content = document.querySelector('div')

    // First, empty the previous content
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    const text = document.createElement('div')
    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

    header.innerText = 'Menu'
    paragraph.innerText = 'Schnitzel – 20€'

    text.appendChild(header)
    text.appendChild(paragraph)
    content.appendChild(text)
}