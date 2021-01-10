import { gsap } from "gsap";


// MAIN PAGE ANIMATIONS
const header = document.querySelector(".header");
const dots_top = document.querySelector(".dots_top");
const dots_bottom = document.querySelector(".dots_bottom");
const circle_top = document.querySelector('.upper_right_circle');
const circle_top_left = document.querySelector(".circle_upper_left");
const circle__bottom_right = document.querySelector(".pattern_bottom_right");
const double__circle = document.querySelector(".doubble_circle_pattern");
const browserSVG = document.querySelectorAll(".browserSVG");
const browserNav = document.querySelector(".browserNav")
const windows = document.querySelectorAll(".window");
const mainWindow = document.querySelectorAll("#main-window");
const illustrationDots = document.querySelector('#dots');
const human = document.querySelector("#human");
const magnifying_glass = document.querySelector("#magnifying-glass");
const halfCircle = document.querySelectorAll(".circle__line");
const mainText = document.querySelector(".mainContent__text");
const chipPathBottom = document.querySelector(".chip__path_bottom");
const chipPathRight = document.querySelector(".chip__path_right");


const tl_main = gsap.timeline()
tl_main.from(circle_top, { opacity: 0, scale: 0, transformOrigin: "top right" })
    .from(circle_top_left, { opacity: 0, scale: 0, transformOrigin: "top left" })
    .from(dots_top, { opacity: 0, y: -100 }, "=-1")
    .from(dots_bottom, { opacity: 0, y: 200 }, "=-1")
    .from(double__circle, { opacity: 0, transformOrigin: "center center" })
    .from(circle__bottom_right, { opacity: 0, scale: 0, transformOrigin: "bottom right" })
    .fromTo([chipPathBottom, chipPathRight], { strokeDasharray: 1000, strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 1.5, ease: "Power1.in" })
    .from([browserSVG, browserNav], { opacity: 0, x: 100 }, "=-1")
    .from(mainWindow, { opacity: 0, scale: 0, })
    .from(windows, { opacity: 0, x: 100, stagger: .1 })
    .from(halfCircle, { opacity: 0, transformOrigin: "left bottom", stagger: .2 }, "=-1")
    .from(illustrationDots, { opacity: 0, x: 100, transformOrigin: "top right" })
    .from(human, { opacity: 0, x: 100 })
    .from(magnifying_glass, { opacity: 0, y: -100 })
    .from(header, { opacity: 0, y: -100 })
    .from(mainText, { opacity: 0, y: -100 }, "=-1");




// SEARCH SECTION ANIMATIONS
const searchBtn = document.querySelector(".search")
const resultsRight = document.querySelector(".results");
const resultsLeft = document.querySelector(".search__navigation");
const closeResultsBtn = document.querySelector(".search__close");
const hideElementsBellowResults = document.querySelector(".context__center");
const hideSVG = document.querySelector(".hideAll_afterSearch");
const nav = document.querySelector("nav");

// navigation items
const navItems = document.querySelectorAll('.search__item');

const tl_search = gsap.timeline()


searchBtn.addEventListener('click', () => {
    tl_search.to(nav, { x: "-100%" })
        .fromTo(resultsLeft, { x: "-100%" }, { opacity: 1, x: 0, duration: .5, ease: "ease-in" })
        .fromTo(closeResultsBtn, { y: "-100%", opacity: 0, rotation: 0 }, { y: 0, duration: .5, opacity: 1, rotation: 360 })
        .fromTo(resultsRight, { x: "100%", opacity: 0 }, { opacity: 1, x: 0, duration: 1.5, ease: "bounce.out" }, "=-1")
        .fromTo(navItems, { opacity: 0, y: -80, scale: .2 }, { opacity: 1, y: 0, scale: 1, stagger: .1, duration: 1, transformOrigin: "top" }, "=-1")


    // hide main  page after clicking search button
    gsap.to([hideElementsBellowResults, hideSVG], { autoAlpha: 0, display: "none", duration: 1 })
});

closeResultsBtn.addEventListener('click', () => {
    gsap.fromTo(resultsLeft, { x: 0, opacity: 1 }, { opacity: 0, x: "-100%", duration: .5, ease: "linear" })
    gsap.fromTo(resultsRight, { x: 0, opacity: 1 }, { opacity: 0, x: "100%", duration: .5, ease: "linear" })
    gsap.to(nav, { x: "0", duration: 1 })

    // display main page after clicking close(button) on navigation
    gsap.to([hideElementsBellowResults, hideSVG], { autoAlpha: 1, display: "block", duration: 1 })
});




