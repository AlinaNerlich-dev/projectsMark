import './style.css';
import { NAVIGATION_LINKS } from './constants';
import { createHeaderTemplate } from './views/header';
import { createSkillsTemplate, setupSkills } from './views/skills';
import { createExperiencesTemplate, setupExperiences } from './views/experience';
import { createProjectsTemplate, setupProjects } from './views/projects';
import { filterSkills } from './views/skills';

// NAVIGATION
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const navUl = document.createElement("ul");
const main = document.getElementById("main");
let navItems = document.querySelectorAll(".nav-item");

const createNavigationItems = (title, href) => {
    return `
       <li class="nav-item">
           <a href="#${href}">${title}</a>
       </li>`
   };
const navigationCreation = () => {
    NAVIGATION_LINKS.forEach ((item) => {
        const navigationTemplate = createNavigationItems(item.title, item.href);
        navUl.innerHTML += navigationTemplate;
    });
    navbar.append(navUl);
};

function handleMenuToggle(){
    navUl.classList.toggle("openMenu");
    navbar.classList.toggle("openMenu")
}
function handleMobillNav(){
    navUl.classList.remove("openMenu");
    navbar.classList.remove("openMenu")
}

toggle.addEventListener('click', handleMenuToggle);


// Create Navigation
navigationCreation();
handleMobillNav();


//Create Header
const header = document.getElementById("header");
header.innerHTML += createHeaderTemplate();

//Create Skills
const skills = document.getElementById("skills");
skills.innerHTML += createSkillsTemplate();
setupSkills();
const filter = document.getElementById("search");
filter.addEventListener("input", filterSkills)


//Create Experiences
const experiences = document.getElementById("experiences");
experiences.innerHTML += createExperiencesTemplate();
setupExperiences()

//Create Projects
const projects = document.getElementById("projects");
projects.innerHTML += createProjectsTemplate();
setupProjects();