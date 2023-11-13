// CURSOR AURA
// create a div for the aura and personalize it
const aura = document.createElement("div");

aura.style.position = "fixed";
aura.style.width = "50px";
aura.style.height = "50px";
aura.style.borderRadius = "50%";
aura.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(92,92,125,1) 50%, rgba(0,28,62,1) 100%)";
aura.style.opacity = "0.5";
aura.style.zIndex = "120";
aura.style.pointerEvents = "none";
aura.style.transition = "all 0.1s ease-out";
aura.style.transform = "translate(-50%, -50%)";

// add the aura to the document
document.body.appendChild(aura);

// listen for mouse movement events
document.addEventListener("mousemove", (event) => {
    // update the position of the aura
    aura.style.left = event.clientX + "px";
    aura.style.top = event.clientY + "px";
});

// listen for mouse enter events 
document.addEventListener("mouseenter", () => {
    // increase the size of the aura
    aura.style.width = "100px";
    aura.style.height = "100px";
    aura.style.opacity = "0.1";
});

// listen for mouse leave events
document.addEventListener("mouseleave", () => {
    // reset the size of the aura
    aura.style.width = "50px";
    aura.style.height = "50px";
    aura.style.opacity = "0.5";
});

// listen for scroll events
document.addEventListener("scroll", () => {
    // update the position of the aura
    aura.style.left = event.clientX + "px";
    aura.style.top = event.clientY + "px";
});



// PARAGRAPH CHANGER

// constant for the paragraph
const homeP = document.querySelector(".home");
const aboutMeP = document.querySelector(".aboutMe");
const projectsP = document.querySelector(".projectsNavBar");

// used to make the color display when first loaded into website
homeP.style.color = "white";
aboutMeP.style.color = "darkgray";
projectsP.style.color = "darkgray";

// listener for the scroll events
window.addEventListener("scroll", () => {
    const websitePosition = window.scrollY;
    // change the color of the nav bar paragraph depending on where you are on the website
    if(websitePosition <= 650){
        homeP.style.color = "white";
        aboutMeP.style.color = "darkgray";
        projectsP.style.color = "darkgray";
    }
    else if(websitePosition >= 650 && websitePosition <= 1300){
        homeP.style.color = "darkgray";
        aboutMeP.style.color = "white";
        projectsP.style.color = "darkgray";
    }
    else {
        homeP.style.color = "darkgray";
        aboutMeP.style.color = "darkgray";
        projectsP.style.color = "white";
    }
})