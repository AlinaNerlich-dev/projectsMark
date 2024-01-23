import { PROJECTS } from "../constants";

const generateProject = (img, title, link, detail, info) => {
    return `
        <div class="projectContainer">
            <div>
                <h2 class="project_title">${title}</h2>
                <a class="project_link" href="${link}" target="_blank" role="button"><img class="project_pic" src="${img}" alt="${title}" width="300px"/></a>
                <p class="extra">${detail}</p>
            </div>
            <div class="info"><p>${info}</p></div>
        
    </div>
        `
}


let isVisible;
const projectsContainer = document.createElement("div");
projectsContainer.setAttribute('id', 'projectWrapper')
let projectWrapper = document.getElementById("projectWrapper");


export function renderProjects(){
    if (!isVisible){
        PROJECTS.forEach((project) => {
            const projectTemplate = generateProject(project.img, project.title, project.link, project.detail, project.info);
            projectWrapper.innerHTML += projectTemplate;
        })
    }

    isVisible = true;

    return `<div>
                 <h1 id="projects">Projects</h1>
                ${projectWrapper}
            </div>`
}

