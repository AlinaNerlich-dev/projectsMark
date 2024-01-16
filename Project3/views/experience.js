import { EXPERIENCES, SKILLS } from "../constants";

const generateSkills = (title, logo) => {
  return `
        <div class="skill">
            <img src="${logo}" alt="${title}" width="80" height="auto">
        </div>
        `;
};

const generateExperiences = (duration, agency, job_title) => {
  return `
        <div class="experience">
            <h3>${job_title}</h3>
            <h3>${agency}</h3>
            <p>${duration}<p>
        </div>
    `;
};

// Filter Skills
// changes:
// 1. commented out function - you may want to rethink this and how you're filtering your data. Review some array methods for help
// 2. removed async
// 3. made camelCase
// 4. exported
export function filterSkills() {
  // const input =  document.getElementById("search");
  // const value = await input.value;
  // const skills = document.querySelectorAll("skill")
  console.log("hello");
}

// populateSkills
// changes:
// created function to populate your data and simplify some of your template in renderExperiences
// you had a closing </div> tag in your template, which I moved up here.
// more elegant ways to do this with createElement, appendChild, etc. Review some DOM methods
function populateSkills() {
  let skillsHTML = `<div id="skillWrapper">`;
  for (const skill of SKILLS) {
    skillsHTML += generateSkills(skill.title, skill.logo);
  }
  skillsHTML += `</div>`;
  return skillsHTML;
}

// populateExperiences
// changes: see above for populateSkills
function populateExperiences() {
  let experiencesHTML = `<div id=experienceWrapper>`;
  for (const experience of EXPERIENCES) {
    experiencesHTML += generateExperiences(
      experience.agency,
      experience.job_title,
      experience.duration
    );
  }
  experiencesHTML += `</div>`;
  return experiencesHTML;
}

// removed filter parameter since it was unused; simplified template
export function renderExperiences() {
  return `
        <h2 id="skills">Skills</h2>
        
        <label for="search">Search skills</label>
        <input type="text" id="search" name="search" placeholder="search skill"><br>
            ${populateSkills()}
        <h2 id="experiences">Experiences</h2>
            ${populateExperiences()}
        <h2 id="cv">Download CV</h2>
        <div id="downloadWrapper">
        <div> 
            <a id="mailIcon" href="../assets/cv_AlinaNerlich.pdf" download="cv">🙍🏼‍♀️ 📩</a>
            </div> 
        </div>

        `;
}
