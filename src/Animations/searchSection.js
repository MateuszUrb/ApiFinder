import { gsap } from 'gsap';
import { Timeline } from "gsap/gsap-core";
//  slide results & results nav section
const searchBtn = document.querySelector(".search")
const resultsRight = document.querySelector(".results");
const resultsLeft = document.querySelector(".search__navigation");
const closeResultsBtn = document.querySelector(".search__close");
const hideElementsBellowResults = document.querySelector(".context__center");
const hideSVG = document.querySelector(".hideAll_afterSearch");

// btns fav and delate
const btns = document.querySelector(".btns")

// navigation items
const navItems = document.querySelectorAll('.search__item');

const tl = new Timeline();

searchBtn.addEventListener('click', () => {
    tl.fromTo(resultsLeft, { x: "-100%" }, { opacity: 1, x: 0, duration: .5, ease: "ease-in" })
        .fromTo(closeResultsBtn, { y: "-100%", opacity: 0, rotation: 0 }, { y: 0, duration: .5, opacity: 1, rotation: 360 })
        .fromTo(resultsRight, { x: "100%", opacity: 0 }, { opacity: 1, x: 0, duration: 1.2, ease: "bounce.out" })
        .fromTo(navItems, { opacity: 0, x: -80, scale: .2 }, { opacity: 1, x: 0, scale: 1, stagger: .1, transformOrigin: "left" }, "=-1.3")

    // hide main  page after clicking search button
    hideElementsBellowResults.style.display = "none"
    hideSVG.style.display = "none"
});

closeResultsBtn.addEventListener('click', () => {
    gsap.fromTo(resultsLeft, { x: 0, opacity: 1 }, { opacity: 0, x: "-100%", duration: .5, ease: "linear" })
    gsap.fromTo(resultsRight, { x: 0, opacity: 1 }, { opacity: 0, x: "100%", duration: .5, ease: "linear" })

    // display main page after clicking close(button) on navigation
    hideElementsBellowResults.style.display = "block"
    hideSVG.style.display = "block"
});