import { PROJECTS } from "../constants"

export const generateProject = (img, title, link, detail, info) => {
    return `
            <div  class="projectWrapper">
                <div>
                <h3 class="project_title">${title}</h3>
                <a class="project_link" href="${link}" target="_blank" role="button"><img class="project_pic" src="${img}" alt="${title}" width="300px"/></a>
                <p class="extra">${detail}</p>
                </div>
            
            <div class="info"><p>${info}</p></div>
            </div>
        `
}

export const setupProjects = () =>{
    const projectsWrapper = document.getElementById("projectsWrapper")
    PROJECTS.forEach((project) =>{
        const template = generateProject(project.img, project.title, project.link, project.detail, project.info)
        projectsWrapper.innerHTML += template
    })
    return projectsWrapper
}


export function createProjectsTemplate(){
    

    return `<div>
                 <h2 id="projects">Projects</h2>
                <div id="projectsWrapper"></div>
            </div>`
}