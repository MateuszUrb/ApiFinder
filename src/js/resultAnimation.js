const results = document.querySelector(".results__location");


function animationResultsSlideIn() {
    results.animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' },
    ], {
        // timing options
        duration: 1000,
        direction: "reverse",
        easing: "ease-in",
        fill: "forwards"
    });
}
function clearResults() {
    results.animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' },
    ], {
        // timing options
        duration: 1000,
        easing: "ease-in",
        fill: "forwards"
    });
}

export { animationResultsSlideIn, clearResults };