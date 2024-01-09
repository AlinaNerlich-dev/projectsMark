import { EXPERIENCES, SKILLS } from "../constants"

const generateSkills = (title, logo) => {
    return`
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `
}

const generateExperiences = (duration, agency, job_title) => {
    return`
        <div class="experience">
            <h3>${job_title}</h3>
            <h3>${agency}</h3>
            <p>${duration}<p>
        </div>
    `
}

// Filter Skills


//prevents double insertion of content
let isVisible;

let skills = `<div id="skillWrapper">`
let experiences = `<div id="experienceWrapper">`
let search = document.getElementById("search")
  
export function renderExperiences(filterskills){
    
    if( !isVisible){
        for(const skill of SKILLS){
            skills += generateSkills(skill.title, skill.logo);
    
        }
        for (const experience of EXPERIENCES){
            experiences += generateExperiences(experience.agency, experience.job_title, experience.duration);
        }
    }

    isVisible = true;

return `
        <h2 id="skills">Skills</h2>
        
        <label for="search">Search skills</label>
        <input type="text" id="search" name="search" onkeyup="filterskills()" placeholder="search skill"><br>
            ${skills}
   
        </div> 
        
        <h2 id="experiences">Experiences</h2>
            ${experiences}
            </div>
    
        <h2 id="cv">Download CV</h2>
        <div id="downloadWrapper">
        <div> 
            <a id="mailIcon" href="../assets/cv_AlinaNerlich.pdf" download="cv">🙍🏼‍♀️ 📩</a>
            </div> 
        </div>

        `;
}

