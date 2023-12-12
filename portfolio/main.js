import './style.css';
import { NAVIGATION_LINKS } from './constants';
import { renderHome } from './views/home';
import { renderProjects } from './views/projects';
import { renderExperiences } from './views/experience';

const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const navUl = document.createElement("ul");
let navItems = document.querySelectorAll(".nav-item");

const createNavigationItems = (title, href) => {
    return `
       <li class="nav-item">
           <a href="${href}">${title}</a>
       </li>`
   };
const navigationCreation = () => {
    
    NAVIGATION_LINKS.forEach ((item) => {
        const navigationTemplate = createNavigationItems(item.title, item.href);
        navUl.innerHTML += navigationTemplate;

        
    });
    navbar.append(navUl);
    navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((link) => {
    link.addEventListener("click", handleChangeURL);

})

};

function handleMenuToggle(){
    navUl.classList.toggle("openMenu");
    navbar.classList.toggle("openMenu")
}

toggle.addEventListener('click', handleMenuToggle);


//Change URL


function handleChangeURL(event){
    event.preventDefault();
    const linkHref = event.target.attributes.href.nodeValue; 
    
    switch(linkHref){
        case "/home":
            main.innerHTML = renderHome();
            break
        case "/experience":
            main.innerHTML = renderExperiences();  
            break  
        case "/projects":
            main.innerHTML = renderProjects();    
            break
    }
}

navigationCreation();
window.onload = main.innerHTML = renderHome();


