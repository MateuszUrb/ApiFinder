const category = document.querySelector("select");
const button = document.querySelector("button");
const displayedApi = document.querySelector(".displayed__apis")
let info = document.querySelector(".error")
const loadingTag = document.querySelector(".loading");


const API = `https://api.publicapis.org/entries?category`;
button.addEventListener('click', getApis);

const displaySpinner = () => {
    let spinnerHTML = `<span class="loading__spinner"></span>`;
    loadingTag.insertAdjacentHTML('afterbegin', spinnerHTML)
}

const hideSpinner = () => {
    let loadingSpinner = document.querySelector(".loading__spinner");
    if (loadingSpinner) { loadingSpinner.parentElement.removeChild(loadingSpinner) }
}
console.log(loadingTag.parentElement.children)
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
                el.Auth == "" ? el.Auth = 'No Auth' : displayApi(el);
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
      <div class="api ">
        <div class="api__wrapper">
          <h3 class="api__title">${API}</h3>
          <p class="api__auth"><span>Auth</span>: ${Auth}</p>
          <p class="api__descryption">${Description}</p>
          </div>
          <a href=${Link} class="doc__link" target="_blanck"><i class="fas fa-external-link-alt"></i></a>
      </div>`;
    displayedApi.insertAdjacentHTML('beforeend', cardHTML);

}