const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

function mostraform() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

function esconderform() {
    form.style.left = '-330px'
    form.style.transform = 'translateX(0)'
    background.style.visibility = 'hidden'
}
/*
const menucontent = document.querySelector(".content")
const menu = menucontent.querySelector(".menu-toggle")

menu.addEventListener('click', () => {
    
menucontent.classList.toggle('on',show);
show = !show;
});*/
document.addEventListener('DOMContentLoaded', () => {
    let show = true;
    const menucontent = document.querySelector(".content");
    const menutoggle = menucontent.querySelector(".menu-toggle");

    if (menutoggle) {
        menutoggle.addEventListener('click', () => {
            menucontent.classList.toggle('on', !show);
            show = !show;
        });
    }
});
