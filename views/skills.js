import { SKILLS } from "../constants"
// Skills
const generateSkill = (title, logo) => {
    return`
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `
}

export const setupSkills = () => {
    let skillWrapper = document.getElementById("skillWrapper")
    SKILLS.forEach((skill) =>{
        const template = generateSkill(skill.title, skill.logo)
        skillWrapper.innerHTML += template;
    })  
    return skillWrapper;
}

export const createSkillsTemplate = () => {
    return `
    <div>
            <h2 id="skills">Skills</h2>
            <div id="searchWrapper">
                <label for="search">Search skills</label>
                <input type="text" id="search" name="search" placeholder="search skill"><br>
                <div id="skillWrapper">
            </div>
            </div>
    </div>
    `
}

//Filter
export function filterSkills() {

    const skillBoxes = document.getElementsByClassName("skill"); 
    const input = document.getElementById("search")
    const filter = input.value.toLowerCase();
    let array = SKILLS.map((skill) => skill.title) 

        for(let i = 0; i< array.length; i++){
            let skillName = array[i];
            if (skillName.toLowerCase().indexOf(filter)> -1 && input.value != "" ){
                skillBoxes[i].classList.add("searchHint");
            } else{
                skillBoxes[i].classList.remove("searchHint");
            }
        }    
}