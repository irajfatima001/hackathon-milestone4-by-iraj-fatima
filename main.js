var form = document.getElementById("resumeForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted");
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var contactElement = document.getElementById("contact");
        var addressElement = document.getElementById("address");
        var educationElement = document.getElementById("education");
        var experienceElement = document.getElementById("experience");
        var projectElement = document.getElementById("projects");
        var certificationElement = document.getElementById("certifications");
        var skillsElement = document.getElementById("skills");
        if (nameElement &&
            emailElement &&
            contactElement &&
            addressElement &&
            educationElement &&
            experienceElement &&
            projectElement &&
            certificationElement &&
            skillsElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var contact = contactElement.value;
            var address = addressElement.value;
            var education = educationElement.value;
            var experience = experienceElement.value;
            var projects = projectElement.value;
            var certifications = certificationElement.value;
            var skills = skillsElement.value;
            var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong><span id=\"edit-name\" class=\"edible\"></span> ".concat(name_1, "</p>\n        <p><strong>Email:</strong><span id=\"edit-email\" class=\"edible\"></span> ").concat(email, "</p>\n        <p><strong>Contact:</strong><span id=\"edit-contact\" class=\"edible\"></span> ").concat(contact, "</p>\n        <p><strong>Address:</strong><span id=\"edit-address\" class=\"edible\"></span> ").concat(address, "</p>\n        \n    \n        <h3>Education</h3>\n        <p id=\"education\" class=\"edible\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"experience\" class=\"edible\">").concat(experience, "</p>\n\n        <h3>Projects</h3>\n        <p id=\"projects\" class=\"edible\">").concat(projects, "</p>\n\n        <h3>Certifications</h3>\n        <p id=\"certifications\" class=\"edible\">").concat(certifications, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"skills\" class=\"edible\">").concat(skills, " </p>\n    \n      ");
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                makeEdible();
            }
            else {
                console.log("The resume output elements are missing");
            }
        }
        else {
            console.log("one or more output elements are missing");
        }
    });
}
else {
    console.log("form element is missing");
}
function makeEdible() {
    var editTableElements = document.querySelectorAll(".edible");
    editTableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
