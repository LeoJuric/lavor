const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
})

sr.reveal('#slike1')
sr.reveal('#slike2', {delay: 400})
sr.reveal('#slike3', {delay: 600})
sr.reveal('#slike4', {delay: 200})
sr.reveal('#slike5', {delay: 200})
sr.reveal('#slike6', {delay: 200})
sr.reveal('#slike7', {delay: 200})
sr.reveal('#slike8', {delay: 200})
sr.reveal('#slike9', {delay: 200})
sr.reveal('#slike10', {delay: 200})
sr.reveal('#slike11', {delay: 200})
sr.reveal('#slike12', {delay: 200})
sr.reveal('#slike13', {delay: 200})
sr.reveal('#slike14', {delay: 200})
sr.reveal('#slike15', {delay: 200})
sr.reveal('#slike16', {delay: 200})
sr.reveal('#slike17', {delay: 200})

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})