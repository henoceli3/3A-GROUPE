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


// l'effet de bounce sur les elements
const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries,observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal')
            observer.unobserve(entry.target)   
        }
    })
}

let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
})

// faire le decompte des chiffres
const compteurData = {
    cpt1 : 0, 
    cpt2 : 0, 
    cpt3 : 0,
    duree : 2, // Durée en seconde pendant laquel le compteur ira de 0 à 15
}
//On utilise setInterval pour créer un intervalle régulier 


var intervalId_1 = setInterval(function(){
    compteurData.cpt1++;
    document.getElementById("cpt_number--1").innerHTML = compteurData.cpt1;
    if(compteurData.cpt1 === 15) {
        clearInterval(intervalId_1);
    }
}, (compteurData.duree * 1000) / 15);

var intervalId_2 = setInterval(function(){
    compteurData.cpt2++;
    document.getElementById("cpt_number--2").innerHTML = compteurData.cpt2;
    if(compteurData.cpt2 === 30) {
        clearInterval(intervalId_2);
    }
}, (compteurData.duree * 1000) / 30);

var intervalId_3 = setInterval(function(){
    compteurData.cpt3++;
    document.getElementById("cpt_number--3").innerHTML = compteurData.cpt3;
    if(compteurData.cpt3 === 60) {
        clearInterval(intervalId_3);
    }
}, (compteurData.duree * 1000) / 60);


// l'effet du explore sur le header 

const explore = document.querySelector('#explore');

explore.addEventListener('mouseover',function(){
    explore.classList.add('exploremouseover');
})
explore.addEventListener('mouseleave',function(){
    explore.classList.remove('exploremouseover');
})

// carouselle du header 

const HEADER_SELECTOR = {
    header: document.querySelector('#header'),
    previouse: document.querySelector('#controleur_previouse'),
    next: document.querySelector('#controleur_next'),
    bottom: document.querySelectorAll('.controleur__')
};

const HEADER_DATA = {
    currentIndex: 0,
    backgroundClass: ["header_backg_1", "header_backg_2", "header_backg_3"],
    length: 3
};

window.addEventListener('load', () => {
    HEADER_SELECTOR.header.classList.add(HEADER_DATA.backgroundClass[0]);
    HEADER_SELECTOR.bottom[0].classList.add("bottom_controleurs_selected");
});

HEADER_SELECTOR.next.addEventListener('click', () => next());
HEADER_SELECTOR.previouse.addEventListener('click', () => previouse());

function next() {
    const prevIndex = HEADER_DATA.currentIndex;
    HEADER_DATA.currentIndex = (HEADER_DATA.currentIndex + 1) % HEADER_DATA.length;
    updateHeader(prevIndex);
}

function previouse() {
    const prevIndex = HEADER_DATA.currentIndex;
    HEADER_DATA.currentIndex = (HEADER_DATA.currentIndex - 1 + HEADER_DATA.length) % HEADER_DATA.length;
    updateHeader(prevIndex);
}

function updateHeader(prevIndex) {
    HEADER_SELECTOR.header.classList.remove(HEADER_DATA.backgroundClass[prevIndex]);
    HEADER_SELECTOR.bottom[prevIndex].classList.remove("bottom_controleurs_selected");

    HEADER_SELECTOR.header.classList.add(HEADER_DATA.backgroundClass[HEADER_DATA.currentIndex]);
    HEADER_SELECTOR.bottom[HEADER_DATA.currentIndex].classList.add("bottom_controleurs_selected");
}