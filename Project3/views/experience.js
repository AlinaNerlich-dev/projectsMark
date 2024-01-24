import { EXPERIENCES, SKILLS } from "../constants"

// SKILLS
let generateSkillsWrapper = document.createElement("div");
generateSkillsWrapper.setAttribute('id', 'skillsWrapper');

const generateSkill = (title, logo) => {
    return`
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `
}

const setupSkills = () => {
    SKILLS.forEach((skill) =>{
        const template = generateSkill(skill.title, skill.logo)
        generateSkillsWrapper.innerHTML += template;
    })  
}


// EXPERIENCES
let generateExperiencesWrapper = document.createElement("div");
generateExperiencesWrapper.setAttribute('id', 'experiencesWrapper');


const generateExperience = (duration, agency, job_title) => {
    return`
        <div class="experience">
            <h3>${job_title}</h3>
            <h3>${agency}</h3>
            <p>${duration}<p>
        </div>
    `
}

const setupExperiences = () => {
    EXPERIENCES.forEach((experience) =>{
        const template = generateExperience(experience.agency, experience.job_title, experience.duration)
        generateExperiencesWrapper.innerHTML += template;
    })  
}


//Filter


export function filterSkills() {
    const filter = document.getElementById("search").value.toLowerCase();
    let array = SKILLS.map((skill) => skill.title)
    const result = array.filter((skill) => skill.toLowerCase().includes(filter.toLowerCase(),0));
    
console.log(result)


  }



let isVisible;
export function renderExperiences(){    
    if( !isVisible){
        setupSkills()
        setupExperiences()
        }    

    isVisible = true;


return `<div>
            <h1 id="skills">Experiences & Skills</h1>
            <div id="searchWrapper">
                <label for="search">Search skills</label>
                <input type="text" id="search" name="search" placeholder="search skill"><br>
            </div>
                ${generateSkillsWrapper.outerHTML}

            <h2 id="experiences">My way</h2>
                ${generateExperiencesWrapper.outerHTML}

            <h2 id="cv">Download CV</h2>
            <div id="downloadWrapper">
            <div> 
                <a id="mailIcon" href="../assets/cv_AlinaNerlich.pdf" download="cv">🙍🏼‍♀️ 📩</a>
            </div> 
        </div>
        `;
}

