const cardResults = document.querySelector(".results__cards");


export const displayApi = (item) => {
    const { API, Auth, Description, Link } = item;

    let apiCardTemplate = `
    <div class="api">
        <div class="api__svg"></div>
        <div class="api__wrapper">
            <h3 class="api__title">${API}</h3>
            <i class="fas fa-heart" id="addToFav"></i>
            <p class="api__auth"><span>Auth: </span>${Auth}</p>
            <p class="api__descryption">${Description}</p>
        </div>
        <a href=${Link} class="doc__link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i></a>
    </div>`;
    cardResults.insertAdjacentHTML('afterbegin', apiCardTemplate);
}
