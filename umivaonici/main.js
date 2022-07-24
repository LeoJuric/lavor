const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#gore');

gore.style.display = "none";

hamburger.addEventListener("click", (event)=>{
    if (nav.style.display == "none") {
        nav.style.display = "block"
    } else {
        nav.style.display = "none";
    }
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
})

sr.reveal('#prvi')
sr.reveal('.article11', {origin: 'left', delay: 500})
sr.reveal('#usluge')
sr.reveal('#animacija')
sr.reveal('.article12')
sr.reveal('#galerija')
sr.reveal('#slike1')
sr.reveal('#slike2')
sr.reveal('#slike3')
sr.reveal('#radnovrijeme')
sr.reveal('#logobot', {delay: 400})
sr.reveal('#social', {delay: 600})
sr.reveal('#drugiimg', {delay: 100})


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const emailbtn = document.querySelector('#emailbtn')
emailbtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#upit')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

const gumb2 = document.getElementById("button1")
gumb2.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

$('#animacijabtn').click(function() {
    document.getElementById('dash').beginElement();
})

$('#animacijabtn').click(function() {
    document.getElementById('dash1').beginElement();
})

$('#animacijabtn').click(function() {
    document.getElementById('dash2').beginElement();
})
