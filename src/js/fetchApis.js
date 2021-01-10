import { gsap } from 'gsap';
import { displayApi } from './DisplayApiCard';
import { animationResultsSlideIn, clearResults } from './resultAnimation';

const API_URL = `https://api.publicapis.org/entries?category=`;
const INFO_DELATE = `All favorite cards have been deleted.`;
const INFO_RESULTS = `Results`;
const INFO_FAVORITE = `Favorites`;

const cardResults = document.querySelector(".results__cards");
const results = document.querySelector(".results__location");

const apiCategory = document.querySelector(".search__results");
const showFav = document.querySelector(".btns__fav");
const delateBtn = document.querySelector(".btns__delate");
const info = document.querySelector(".info");
const scrollTop = document.querySelector(".results__scrollTop");
const apiResultsSection = document.querySelector(".results");


// fetch check for error
function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

apiCategory.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".search__content")) { //this makes sure that only box is interactive
        let category = e.target.dataset.value;
        scrollTop.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' },
            { opacity: '1' },
        ], {
            // timing options
            duration: 1000,
            easing: "ease-in",
            fill: "forwards"
        });

        function getApi() {
            cardResults.innerText = "";

            fetch(`${API_URL}${category}&https=true`)
                .then(handleError)
                .then(apisLI => {
                    let data = apisLI.json();
                    return data;
                })
                .then(data => {
                    let { count } = data
                    results.innerText = `${count} Apis found`;

                    let entries = data.entries;
                    entries.forEach(item => {
                        if (item.Auth == "")
                            item.Auth = 'No Auth';
                        displayApi(item);
                    });

                })
                .catch(error => {
                    if (error) {
                        info.innerText = "Sorry, Something went wrong !";
                        console.error(error);
                    }
                })
        }

        getApi()
        animationResultsSlideIn();
        cardResults.innerText = ``;
        info.innerText = ``;
        results.innerText = `${INFO_RESULTS}`;

    }

})

delateBtn.addEventListener("click", () => {
    clearResults();
    scrollTop.style.visibility = "hidden";
    info.innerText = `${INFO_DELATE}`
    cardResults.innerText = ``;
    localStorage.clear();
})

scrollTop.addEventListener("click", (e) => {
    apiResultsSection.scrollTo({ top: 0, behavior: "smooth" })
});

// save item into local storage to be later displayed in the Favorite section
document.body.addEventListener('click', function (e) {
    if (e.target && e.target.matches(".fa-heart")) {
        let apiCard = e.target.parentElement.parentElement.outerHTML;
        e.target.classList.add("selectedFav")
        const getApiTitle = e.target.parentElement.children[0].innerText;
        localStorage.setItem(getApiTitle, apiCard);
    }
});

function getFavfromLocalStorage() {
    let favHTML = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
        favHTML.push(localStorage.getItem(keys[i]))
    }
    return favHTML
}

function showFavorite() {
    showFav.addEventListener("click", () => {
        animationResultsSlideIn();
        results.innerText = `${localStorage.length} ${INFO_FAVORITE}`;
        info.innerText = ``;
        cardResults.innerText = ``;
        scrollTop.style.visibility = "visible"
        if (localStorage.length === 0) {
            info.innerText = "no cards in favorites"
        };
        cardResults.insertAdjacentHTML('afterbegin', getFavfromLocalStorage());
    })
}

showFavorite();
