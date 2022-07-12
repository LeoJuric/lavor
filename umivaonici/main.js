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
sr.reveal('#drugiimg', {delay: 400})
sr.reveal('.article12')
sr.reveal('#galerija')
sr.reveal('#slike1')
sr.reveal('#slike2')
sr.reveal('#slike3')
sr.reveal('#radnovrijeme')
sr.reveal('#logobot', {delay: 400})
sr.reveal('#social', {delay: 600})


