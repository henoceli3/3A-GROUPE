// les selecteurs pour le header 
const headerSelector = {
    hamburgerContainer : document.querySelector('.hamburger_container'),
    line : document.querySelectorAll('.line'),
    navbar : document.querySelector('.navbar'),
}
// pour gerer le menu 
let isActive = true;
headerSelector.hamburgerContainer.addEventListener('click', function(event){
    if(!isActive){
        headerSelector.line[0].classList.remove('rotate45--');
        headerSelector.line[1].classList.remove('opacity0--');
        headerSelector.line[2].classList.remove('--rotate45--');
        headerSelector.navbar.classList.remove('menuFlex');
        headerSelector.hamburgerContainer.classList.remove('pink_background')
        console.log(isActive + "menu fermer"); /* pour le deboguage */
        isActive = true; 
    }else{
        headerSelector.line[0].classList.add('rotate45--');
        headerSelector.line[1].classList.add('opacity0--');
        headerSelector.line[2].classList.add('--rotate45--');
        headerSelector.navbar.classList.add('menuFlex');
        headerSelector.hamburgerContainer.classList.add('pink_background')
        console.log(isActive + "menu ouvert"); /*pour le debogage*/
        isActive = false; 
    }
})

// changer la couleur du hamburger au scroll 
window.addEventListener('scroll', function(event){
    if(this.window.scrollY != 0){
        headerSelector.hamburgerContainer.classList.add('pink');
    }else{
        headerSelector.hamburgerContainer.classList.remove('pink');
    }
})

// les boutons qui permemttent de selelctioner et voir les differents services 
const carouselSelector = {
    serviceSelector : document.querySelectorAll('.fisrt_line_item'),
    serviceDescContainer : document.querySelectorAll('.service_desc'),
}

window.addEventListener('load', function(event){
    carouselSelector.serviceDescContainer[0].classList.add('flex')
})

carouselSelector.serviceSelector[0].addEventListener("click",function(){carousselle(0)});
carouselSelector.serviceSelector[1].addEventListener("click",function(){carousselle(1)});
carouselSelector.serviceSelector[2].addEventListener("click",function(){carousselle(2)});
carouselSelector.serviceSelector[3].addEventListener("click",function(){carousselle(3)});
carouselSelector.serviceSelector[4].addEventListener("click",function(){carousselle(4)});

var whoHave = 0;
var index = 0;

function carousselle(m){
    if(whoHave != m){
        carouselSelector.serviceDescContainer[whoHave].classList.remove('flex');
        carouselSelector.serviceDescContainer[m].classList.add('flex');
        whoHave = m; /*celui qui est afficher avant la selecrion la maintenant*/
    }else{
        pass
    }
}