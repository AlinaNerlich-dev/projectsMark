import { PROJECTS } from "../constants";

let generateProjectWrapper = document.createElement("div");
generateProjectWrapper.setAttribute('id', 'projectWrapper');


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

const setupProjects = () => {
    PROJECTS.forEach((project) =>{
        const template = generateProject(project.img, project.title, project.link, project.detail, project.info)
        generateProjectWrapper.innerHTML += template;
    })  
}


let isVisible;
export function renderProjects(){
    
    if (!isVisible){
        setupProjects()
    }

    isVisible = true;

    return `<div>
                 <h1 id="projects">Projects</h1>
                ${generateProjectWrapper.outerHTML}
            </div>`
}

