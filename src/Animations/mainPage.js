import { gsap } from "gsap";

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



const tl = gsap.timeline()
tl.from(circle_top, { opacity: 0, scale: 0, transformOrigin: "top right" })
    .from(circle_top_left, { opacity: 0, scale: 0, transformOrigin: "top left" })
    .from(dots_top, { opacity: 0, y: -100 }, "=-1")
    .from(dots_bottom, { opacity: 0, y: 200 }, "=-1")
    .from(double__circle, { opacity: 0, transformOrigin: "center center" })
    .from(circle__bottom_right, { opacity: 0, scale: 0, transformOrigin: "bottom right" })
    .from([browserSVG, browserNav], { opacity: 0, x: 100 })
    .from(mainWindow, { opacity: 0, scale: 0, })
    .from(windows, { opacity: 0, x: 100, stagger: .1 })
    .from(halfCircle, { opacity: 0, transformOrigin: "left bottom", stagger: .2 }, "=-1")
    .from(illustrationDots, { opacity: 0, x: 100, transformOrigin: "top right" })
    .from(human, { opacity: 0, x: 100 })
    .from(magnifying_glass, { opacity: 0, y: -100 })
    .from(header, { opacity: 0, y: -100 })
    .from(mainText, { opacity: 0, y: -100 }, "=-1")