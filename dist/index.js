const category = document.querySelector("select");
const button = document.querySelector("button");
const displayedApi = document.querySelector(".displayed__apis")
let info = document.querySelector(".error")
const loadingTag = document.querySelector(".loading");
const fav = document.querySelectorAll(".addToFav");
const favButton = document.querySelector(".favorite");
const fakeSection = document.querySelector(".fake")

const API = `https://api.publicapis.org/entries?category`;
button.addEventListener('click', getApis);

const displaySpinner = () => {
    let spinnerHTML = `<span class="loading__spinner"></span>`;
    loadingTag.insertAdjacentHTML('afterbegin', spinnerHTML)
}

const hideSpinner = () => {
    let loadingSpinner = document.querySelector(".loading__spinner");
    if (loadingSpinner) {
        loadingSpinner.parentElement.removeChild(loadingSpinner)
    }
}
async function getApis() {
    displayedApi.innerHTML = "";
    info.innerHTML = "";
    let apiCategories = category.value;
    displaySpinner();
    
    await fetch(`${API}=${apiCategories}&https=true`)
    .then(apisLi => data = apisLi.json())
    .then(data => {
        let entries = data.entries;
        
            hideSpinner();
            entries.forEach(el => {
                el.Auth === "" ? el.Auth = 'No Auth' : displayApi(el);
            });
        })
        .catch(error => {
            if (error) {
                info.innerText = `Please Select Category`;
            }
        })
        
    }
    
    const displayApi = (item) => {
        const {
            API,
            Auth,
            Description,
            Link
        } = item;
        
        let cardHTML = `
        <div class="api">
        <div class="api__wrapper">
        <h3 class="api__title">${API}</h3>
        <i id="addToFav"class=" far fa-star "></i>
        <p class="api__auth"><span>Auth</span>: ${Auth}</p>
        <p class="api__descryption">${Description}</p>
        </div>
        <a href=${Link} class="doc__link" target="_blanck"><i class="fas fa-external-link-alt"></i></a>
        </div>`;
        displayedApi.insertAdjacentHTML('beforeend', cardHTML);
    }
    
    // save item into local storage to be later displayed in the Favorite section
    document.body.addEventListener('click', function (e) {
        if (event.srcElement.id == 'addToFav') {
            if (typeof (Storage) !== "undefined") {
                let apiCard = e.target.parentElement.parentElement.innerHTML;
                const getApiTitle = e.target.parentElement.children[0].innerText;
                e.target.classList.add("fas")
                localStorage.setItem(getApiTitle, apiCard);
            } else {
                alert("Storage in this browser is not supported")
            }
        };
    });
    
    function getFavfomLocalStrg() {
        let favHTML = [];
        let keys = Object.keys(localStorage);
        let i = keys.length;
        while (i--) {
            favHTML.push(localStorage.getItem(keys[i]))
        }
        return favHTML
    }
    
    function createApiDiv(num) {
        let z = document.createElement("div");
        z.classList.add("api")
        fakeSection.parentElement.appendChild(z);
    }
    // create as much div as it is saved elements in localSotrage 
    (function repeat(num) {
        createApiDiv(num);
        if (num > 1) repeat(num - 1);
    })(localStorage.length);
    
    const apiSection = document.querySelectorAll(".api");

    function showFavorite() {
        favButton.addEventListener("click", function () {
            if (localStorage.length === 0) {
                info.innerText = "no cards added to favorites"};
                for (let i = 0; i <= apiSection.length; i++) {
        apiSection[i].insertAdjacentHTML('afterbegin', getFavfomLocalStrg());
        }
    })
}
showFavorite();