import { EXPERIENCES, SKILLS } from "../constants"


const generateSkill = (title, logo) => {
    return`
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `
}

let generateSkillsWrapper = document.createElement("div");
generateSkillsWrapper.setAttribute('id', 'skillsWrapper');
generateSkillsWrapper.innerHTML = "";

const setupSkills = () => {

    SKILLS.forEach((skill) =>{
        const template = generateSkill(skill.title, skill.logo)
        generateSkillsWrapper.innerHTML += template;
    })  
    return generateSkillsWrapper.outerHTML;
}

export function renderExperiences(){    

return `
        <h2 id="skills">Skills</h2>
        <label for="search">Search skills</label>
        <input type="text" id="search" name="search" onkeyup="filterskills()" placeholder="search skill"><br>
            ${setupSkills()}



        `;
}