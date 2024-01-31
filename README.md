# Project 3

## Questions for a code review:

### 1. FILTER FUNCTION

#### How could I have written the function using filter()? I was able to console log the correct data, but I dont know how to modif now the according CSS with this. I kept it in line 55 incl. a console.log()
##### **Answer**: You're syntax is a little off. filter will return an array of items that were 'truthy' in your filter's callback function. You can then use that array to re-render your skills so it only displays skills that matched the input. Here's an appropriate filter method syntax:  
```
  const results = SKILLS.filter((skill) => {
    return skill.title.toLowerCase().includes(filter);
  });
```

When you've implemented that, it will be upt to you to figure out how to have that and a subsequent re-render fire off when a user searches. If you want to stick with your method of highlighting through CSS, then your current solution is absolutely fine for the task. 

### 2. RENDERING IN MAIN

#### Why do I have to use main.innerHTML = renderExperiences and not +=? In all your videos you are using += but here its not working?!
##### **Answer**: the answer to your question here should be logged in the console when you try to do it. Try changing line 58 in main.js to `main += renderExperiences();`, run `npm run dev` and try to change to your experiences page. Check your console and it'll inform you that you have a type error. 

### 3. SOLUTION OUTERHTML

#### Is this a proper way to solve the assignment?
##### **Answer**: Yes, for the way you currently have it set up, it works and is fine. outerHTML will replace HTML with HTML, innerHTML will replace string content inside of an HTML element.   
### 4. Project VIEWS

#### Could you show me here how I can create generateProjectWrapper with a function? This you have also done in one video and again I cant make it work.. Now it shows null instead of the Object. I really want to understand this whole topic before starting with React
##### **Answer**: I would start by copying over (yes, copy and paste), the solutions you have for a similar task in experience.js, and then modify the function names and other relevant info. Unless I'm misunderstanding the question? Please let me know if I am. 

# Thank you so much
