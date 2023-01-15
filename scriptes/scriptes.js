const headerSelector = {
    hamburgerContainer : document.querySelector('.hamburger_container'),
    line : document.querySelectorAll('.line'),
    navbar : document.querySelector('.navbar'),
}
let isActive = true;
headerSelector.hamburgerContainer.addEventListener('click', function(event){
    if(!isActive){
        headerSelector.line[0].classList.remove('rotate45--');
        headerSelector.line[1].classList.remove('opacity0--');
        headerSelector.line[2].classList.remove('--rotate45--');
        headerSelector.navbar.classList.remove('menuFlex');
        headerSelector.hamburgerContainer.classList.remove('pink_background')
        console.log(isActive + "menu fermer");
        isActive = true; 
    }else{
        headerSelector.line[0].classList.add('rotate45--');
        headerSelector.line[1].classList.add('opacity0--');
        headerSelector.line[2].classList.add('--rotate45--');
        headerSelector.navbar.classList.add('menuFlex');
        headerSelector.hamburgerContainer.classList.add('pink_background')
        console.log(isActive + "menu ouvert");
        isActive = false; 
    }
})
