import { EXPERIENCES } from "../constants"


const generateExperience = (duration, agency, job_title) => {
    return`
        <div class="experience">
            <h3>${job_title}</h3>
            <h4>${agency}</h4>
            <p>${duration}<p>
        </div>
    `
}

export const setupExperiences = () => {
    const experiencesWrapper = document.getElementById("experiencesWrapper")
    EXPERIENCES.forEach((experience) =>{
        const template = generateExperience(experience.duration, experience.agency, experience.job_title)
        experiencesWrapper.innerHTML += template;
    })  
    return experiencesWrapper;
}

export function createExperiencesTemplate(){  

return `
        <div>
            <h2>Experiences</h2>
            <div id="experiencesWrapper">
            </div>
            <h3 id="cv">Download CV</h3>
            <div id="downloadWrapper">
            <div> 
                <a id="mailIcon" href="../assets/cv_AlinaNerlich.pdf" download="cv">🙍🏼‍♀️ 📩</a>
            </div> 
        </div>
        `;
}


