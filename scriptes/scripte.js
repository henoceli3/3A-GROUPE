// les selecteurs pour le header 
const headerSelector = {
    hamburgerContainer : document.querySelector('.hamburger_container'),
    line : document.querySelectorAll('.line'),
    navbar : document.querySelector('.navbar'),
}

// Pour gerer le menu 
let isActive = true;

const toggleMenu = () => {
    if(!isActive){
        headerSelector.line[0].classList.remove('rotate45--');
        headerSelector.line[1].classList.remove('opacity0--');
        headerSelector.line[2].classList.remove('--rotate45--');
        headerSelector.navbar.classList.remove('menuFlex');
        headerSelector.hamburgerContainer.classList.remove('pink_background')
        console.log(`${isActive} menu fermer`); /* pour le deboguage */
        isActive = true; 
    }else{
        headerSelector.line[0].classList.add('rotate45--');
        headerSelector.line[1].classList.add('opacity0--');
        headerSelector.line[2].classList.add('--rotate45--');
        headerSelector.navbar.classList.add('menuFlex');
        headerSelector.hamburgerContainer.classList.add('pink_background')
        console.log(`${isActive} menu ouvert`); /*pour le debogage*/
        isActive = false; 
    }
}

headerSelector.hamburgerContainer.addEventListener('click', toggleMenu);

// changer la couleur du hamburger au scroll 
function handleScroll() {
    if (window.scrollY != 0) {
        headerSelector.hamburgerContainer.classList.add('pink');
    } else {
        headerSelector.hamburgerContainer.classList.remove('pink');
    }
}


window.addEventListener('scroll', handleScroll);

// les boutons qui permettent de selectionner et voir les differents services 
const carouselSelector = {
    serviceSelector : document.querySelectorAll('.fisrt_line_item'),
    serviceDescContainer : document.querySelectorAll('.service_desc'),
}

const servicesData = {
    activeIndex: 0,
}

function showActiveService(index) {
    carouselSelector.serviceDescContainer[servicesData.activeIndex].classList.remove('flex');
    carouselSelector.serviceDescContainer[index].classList.add('flex');
    servicesData.activeIndex = index;
}

function handleServiceClick(index) {
    return () => {
        if (servicesData.activeIndex !== index) {
            showActiveService(index);
        }
    };
}

window.addEventListener('load', () => {
    carouselSelector.serviceDescContainer[0].classList.add('flex');
});

carouselSelector.serviceSelector.forEach((service, index) => {
    service.addEventListener("click", handleServiceClick(index));
});
