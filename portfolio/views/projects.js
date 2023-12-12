import { PROJECTS } from "../constants";

const generateProject = (img, title, link, detail, info) => {
    return `
        <div class="projectWrapper">
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
let projectWrapper = `<div id="projectsWrapper">`

export function renderProjects(){
    if (!isVisible){
        for (const project of PROJECTS){
            projectWrapper += generateProject(project.img, project.title, project.link, project.detail, project.info);
        }
    }

    isVisible = true;

    return `<div>
                 <h1 id="projects">Projects</h1>
                 ${projectWrapper}
            </div>`
}