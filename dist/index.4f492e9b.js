// navbar
// elements
const navbar = document.querySelector("#navbar");
const btn = document.querySelector("#button-navbar");
// function for translate navbar
const translateNavbar = (e)=>{
    const buttonClicked = e.target;
    if (buttonClicked.getAttribute("aria-pressed") === "false") {
        navbar.setAttribute("visual-hidden", "true");
        buttonClicked.setAttribute("aria-pressed", "true");
        buttonClicked.setAttribute("aria-expanded", "true");
    } else {
        navbar.setAttribute("visual-hidden", "false");
        buttonClicked.setAttribute("aria-pressed", "false");
        buttonClicked.setAttribute("aria-expanded", "false");
    }
};
btn.addEventListener("click", translateNavbar);
// send email
//keys
const serviceId = "service_7w757kr";
const templateId = "template_v5aow3t";
const userId = "E6haNCxwwlI-tMYbc";
// function which listen when user want send a email
const formElement = document.querySelector("#form-email");
if (formElement) document.querySelector("#form-email").addEventListener("submit", (e)=>{
    e.preventDefault();
    const nameElement = document.querySelector("#name");
    const surnameElement = document.querySelector("#surname");
    const emailElement = document.querySelector("#email");
    const messageElement = document.querySelector("#message");
    let params = {
        name: nameElement.value,
        surname: surnameElement.value,
        email: emailElement.value,
        message: messageElement.value
    };
    // send email
    emailjs.send(serviceId, templateId, params, userId).then((response)=>{
        console.log(response.status);
        console.log(response.text);
        nameElement.value = "";
        surnameElement.value = "";
        emailElement.value = "";
        messageElement.value = "";
    }).catch((error)=>{
        console.log(error);
    });
});
// sidenav
// all elements
const sidenav = document.querySelector("#sidenav");
const header = document.querySelector("header");
const portfolioSection = document.querySelector("#portfolio");
const aboutSection = document.querySelector("#about");
const skillsSection = document.querySelector("#skills");
const contactSection = document.querySelector("#contact");
const topHeader = document.querySelector("#top-header");
if (sidenav) {
    const options = {
        rootMargin: "-200px 0px"
    };
    // observer
    const observer = new IntersectionObserver(function callback(entries, observer) {
        entries.forEach((entry)=>{
            if (entry.isIntersecting) switch(entry.target.classList.value){
                case "portfolio":
                    sidenav.setAttribute("data-visual", "true");
                    sidenav.children[0].setAttribute("data-visual", "true");
                    sidenav.children[1].setAttribute("data-visual", "false");
                    sidenav.children[2].setAttribute("data-visual", "false");
                    sidenav.children[3].setAttribute("data-visual", "false");
                    break;
                case "about":
                    sidenav.setAttribute("data-visual", "true");
                    sidenav.children[0].setAttribute("data-visual", "false");
                    sidenav.children[1].setAttribute("data-visual", "true");
                    sidenav.children[2].setAttribute("data-visual", "false");
                    sidenav.children[3].setAttribute("data-visual", "false");
                    break;
                case "skills":
                    sidenav.setAttribute("data-visual", "true");
                    sidenav.children[0].setAttribute("data-visual", "false");
                    sidenav.children[1].setAttribute("data-visual", "false");
                    sidenav.children[2].setAttribute("data-visual", "true");
                    sidenav.children[3].setAttribute("data-visual", "false");
                    break;
                case "contact":
                    sidenav.setAttribute("data-visual", "true");
                    sidenav.children[0].setAttribute("data-visual", "false");
                    sidenav.children[1].setAttribute("data-visual", "false");
                    sidenav.children[2].setAttribute("data-visual", "false");
                    sidenav.children[3].setAttribute("data-visual", "true");
                    break;
                case "header":
                    sidenav.setAttribute("data-visual", "false");
                    // topHeader.setAttribute('data-background', 'transparent')
                    sidenav.children[0].setAttribute("data-visual", "false");
                    sidenav.children[1].setAttribute("data-visual", "false");
                    sidenav.children[2].setAttribute("data-visual", "false");
                    sidenav.children[3].setAttribute("data-visual", "false");
                    break;
            }
            else entry.target.classList.value;
        });
    }, options);
    observer.observe(portfolioSection);
    observer.observe(aboutSection);
    observer.observe(skillsSection);
    observer.observe(contactSection);
    observer.observe(header);
}
// change background color of navbar
const options = {
    rootMargin: "-200px 0px"
};
// observer
const observer = new IntersectionObserver(function callback(entries, observer) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            if (entry.target.classList.value === "header") topHeader.setAttribute("data-background", "transparent");
        } else if (entry.target.classList.value === "header") topHeader.setAttribute("data-background", "neutral");
    });
}, options);
observer.observe(header);

//# sourceMappingURL=index.4f492e9b.js.map
