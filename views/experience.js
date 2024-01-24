import { EXPERIENCES, SKILLS } from "../constants"


const generateSkill = (title, logo) => {
    return`
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `
}

const generateSkillsWrapper = () =>{
return `
    <div id="skillsWrapper"></div>
`
}

let skillsWrapper = document.getElementById("skillsWrapper");

const setupSkills = () => {

    SKILLS.forEach((skill) =>{
        const template = generateSkill(skill.title, skill.logo)
        skillsWrapper.innerHTML += template;
    })

}

export function renderExperiences(){
    generateSkillsWrapper();
    

return `
        <h2 id="skills">Skills</h2>
        <label for="search">Search skills</label>
        <input type="text" id="search" name="search" onkeyup="filterskills()" placeholder="search skill"><br>
            ${setupSkills()}



        `;
}