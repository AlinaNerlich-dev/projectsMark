(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const h=[{title:"Home",href:"/home"},{title:"Experiences",href:"/experience"},{title:"Projects",href:"/projects"}],b=[{title:"HTML5",logo:"../pics/HTML5.png"},{title:"Tailwind CSS",logo:"../pics/tailwind.png"},{title:"Javascript",logo:"../pics/JS5.png"},{title:"React",logo:"../pics/react.png"},{title:"Django",logo:"../pics/django.png"},{title:"Flutter",logo:"../pics/Flutter.png"}],v=[{agency:"DRCTNL GmbH, Duesseldorf",duration:"2022-2023",job_title:"Software Developer"},{agency:"Webographen GmbH, Munich",duration:"2020-2022",job_title:"Project manager digital & Web Developer"},{agency:"Freelancer in Web Development",duration:"since 2020",job_title:"See my work in Projects"},{agency:"Supercode, Duesseldorf",duration:"2020-2021",job_title:"Bootcamp in Frontend Development"},{agency:"Elias Lange, Hamburg",duration:"2019-2020",job_title:"Digital Project Manager"}],L=[{title:"Alpaca Volunteer Homepage Project",link:"https://lamatherapie-koeln.de/",detail:"CMS: statamic",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur nostrum, distinctio blanditiis ipsa repellendus. Obcaecati animi labore officia voluptatibus?",img:"../pics/lamatherapie.png"},{title:"Commissioned work",link:"https://lichtwald.eu/",detail:"CMS: statamic",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur nostrum, distinctio blanditiis ipsa repellendus. Obcaecati animi labore officia voluptatibus?",img:"../pics/lichtwald.png"},{title:"Javascript custom code",link:"https://shiftcare.com/go/savings-calculator",detail:"Javascript only",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur nostrum, distinctio blanditiis ipsa repellendus. Obcaecati animi labore officia voluptatibus?",img:"../pics/javascript_calculator.png"},{title:"Frontend Development Assistant",link:"https://maiss.de/",detail:"CMS: statamic",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur nostrum, distinctio blanditiis ipsa repellendus. Obcaecati animi labore officia voluptatibus?",img:"../pics/maiss.png"},{title:"Color Picker",link:"https://strong-cupcake-b23b60.netlify.app/",detail:"-",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur nostrum, distinctio blanditiis ipsa repellendus. Obcaecati animi labore officia voluptatibus?",img:"../pics/color_picker.png"}];function m(){return`
   <div id="gridWrapper">
        <div id="contact">
            <h1>Alina Nerlich</h1>
            <h4>Software & Web Developer</h4>
            <p>Based at Bodensee, Germany</p>
        </div>
        <img id="picAlina" src="../pics/Alina_Nerlich.jpg" alt="Alina Nerlich Profil">
        <div id="socialMedia">
            <a target="_blank" href="https://github.com/AlinaNerlich-dev/"><img class="socialMedia" src="../pics/GitHUb.png" alt="GitHub Logo" width="30" height="30"></a>
            <a href="https://www.linkedin.com/in/alina-nerlich/"><img class="socialMedia" src="../pics/linkedin.png" alt="GitHub Logo" target="_blank" width="30" height="30"></a>
            <a href="https://www.xing.com/"><img class="socialMedia" src="../pics/xing-logo.png" alt="GitHub Logo" target="_blank" width="30" height="30"></a>
        </div>
    </div>
    `}const j=(e,t,r,a,i)=>`
        <div class="projectWrapper">
            <div>
            <h2 class="project_title">${t}</h2>
            <a class="project_link" href="${r}" target="_blank" role="button"><img class="project_pic" src="${e}" alt="${t}" width="300px"/></a>
            <p class="extra">${a}</p>
            
            </div>
            <div class="info"><p>${i}</p></div>
        </div>
        `;let l,c='<div id="projectsWrapper">';function k(){if(!l)for(const e of L)c+=j(e.img,e.title,e.link,e.detail,e.info);return l=!0,`<div>
                 <h1 id="projects">Projects</h1>
                 ${c}
            </div>`}const y=(e,t)=>`
        <div class="skill">
            <img src="${t}" alt="${e}" width="80" height="auto">
        </div>
        `,w=(e,t,r)=>`
        <div class="experience">
            <h3>${r}</h3>
            <h3>${t}</h3>
            <p>${e}<p>
        </div>
    `;let p,d='<div id="skillWrapper">',u='<div id="experienceWrapper">';function M(){if(!p){for(const e of b)d+=y(e.title,e.logo);for(const e of v)u+=w(e.agency,e.job_title,e.duration)}return p=!0,`
        <h2 id="skills">Skills</h2>
            ${d}
            </div>
        
        <h2 id="experiences">Experiences</h2>
            ${u}
            </div>
        `}const f=document.getElementById("navbar"),S=document.getElementById("menu-toggle"),s=document.createElement("ul");let g=document.querySelectorAll(".nav-item");const H=(e,t)=>`
       <li class="nav-item">
           <a href="${t}">${e}</a>
       </li>`,E=()=>{h.forEach(e=>{const t=H(e.title,e.href);s.innerHTML+=t}),f.append(s),g=document.querySelectorAll(".nav-item"),g.forEach(e=>{e.addEventListener("click",_)})};function N(){s.classList.toggle("openMenu"),f.classList.toggle("openMenu")}S.addEventListener("click",N);function _(e){switch(e.preventDefault(),e.target.attributes.href.nodeValue){case"/home":main.innerHTML=m();break;case"/experience":main.innerHTML=M();break;case"/projects":main.innerHTML=k();break}}E();window.onload=main.innerHTML=m();
