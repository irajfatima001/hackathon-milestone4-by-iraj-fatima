const form=document.getElementById("resumeForm")
if(form){
    form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted")

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById(
      "contact"
    ) as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const projectElement = document.getElementById(
      "projects"
    ) as HTMLInputElement;
    const certificationElement = document.getElementById(
      "certifications"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      nameElement &&
      emailElement &&
      contactElement &&
      addressElement &&
      
      educationElement &&
      experienceElement &&
      projectElement &&
      certificationElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const contact = contactElement.value;
      const address = addressElement.value;
      
      const education = educationElement.value;
      const experience = experienceElement.value;
      const projects = projectElement.value;
      const certifications = certificationElement.value;
      const skills = skillsElement.value;

      const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong><span id="edit-name" class="edible"></span> ${name}</p>
        <p><strong>Email:</strong><span id="edit-email" class="edible"></span> ${email}</p>
        <p><strong>Contact:</strong><span id="edit-contact" class="edible"></span> ${contact}</p>
        <p><strong>Address:</strong><span id="edit-address" class="edible"></span> ${address}</p>
        
    
        <h3>Education</h3>
        <p id="education" class="edible">${education}</p>

        <h3>Experience</h3>
        <p id="experience" class="edible">${experience}</p>

        <h3>Projects</h3>
        <p id="projects" class="edible">${projects}</p>

        <h3>Certifications</h3>
        <p id="certifications" class="edible">${certifications}</p>

        <h3>Skills</h3>
        <p id="skills" class="edible">${skills} </p>
    
      `;
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEdible();
      } else {
        console.log("The resume output elements are missing");
      }
    } else {
      console.log("one or more output elements are missing");
    }
  })
}else{
    console.log("form element is missing")
}
function makeEdible(){
    const editTableElements=document.querySelectorAll(".edible")
    editTableElements.forEach(element =>{
        element.addEventListener("click", function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent||"";

            if(currentElement.tagName === "p" || currentElement.tagName ==="span"){
                const input = document.createElement("input")
                input.type = 'text'
                input.value = currentValue;
                input.classList.add("editing-input")


                input.addEventListener("blur", function(){
                    currentElement.textContent = input.value
                    currentElement.style.display = "inline"
                    input.remove()
                })

                currentElement.style.display ="none"
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }

        })
    })
}
  
