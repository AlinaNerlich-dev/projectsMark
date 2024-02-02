

const createSocialMedia = () => {
 return `
    <div id="socialMedia">
    <a target="_blank" href="https://github.com/AlinaNerlich-dev/"><img class="socialMedia" src="../pics/GitHub.png" alt="GitHub Logo" width="30" height="30"></a>
    <a href="https://www.linkedin.com/in/alina-nerlich/"><img class="socialMedia" src="../pics/linkedin.png" alt="GitHub Logo" target="_blank" width="30" height="30"></a>
    <a href="https://www.xing.com/"><img class="socialMedia" src="../pics/xing-logo.png" alt="GitHub Logo" target="_blank" width="30" height="30"></a>
    </div>`
}

export function renderHome(){
   return `
   <div id="gridWrapper">
        <div id="contact">
            <h1>Alina Nerlich</h1>
            <h4>Software & Web Developer</h4>
            <p>Based at Bodensee, Germany</p>
        </div>
        <img id="picAlina" src="../pics/Alina_Nerlich.jpg" alt="Alina Nerlich Profil">
       ${createSocialMedia()}
    </div>
    `
}