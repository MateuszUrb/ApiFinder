"use strict";

var category = document.querySelector("select");
var button = document.querySelector("button");
var displayedApi = document.querySelector(".displayed__apis");
var info = document.querySelector(".error");
var loadingTag = document.querySelector(".loading");
var favButton = document.querySelector(".favorite");
var fakeSection = document.querySelector(".fake");
var API = "https://api.publicapis.org/entries?category";
button.addEventListener('click', getApis);

var displaySpinner = function displaySpinner() {
  var spinnerHTML = "<span class=\"loading__spinner\"></span>";
  loadingTag.insertAdjacentHTML('afterbegin', spinnerHTML);
};

var hideSpinner = function hideSpinner() {
  var loadingSpinner = document.querySelector(".loading__spinner");

  if (loadingSpinner) {
    loadingSpinner.parentElement.removeChild(loadingSpinner);
  }
};

function getApis() {
  var apiCategories;
  return regeneratorRuntime.async(function getApis$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          displayedApi.innerHTML = "";
          fakeSection.innerHTML = "";
          info.innerHTML = "";
          apiCategories = category.value;
          displaySpinner();
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch("".concat(API, "=").concat(apiCategories, "&https=true")).then(function (apisLi) {
            return data = apisLi.json();
          }).then(function (data) {
            var entries = data.entries;
            hideSpinner();
            entries.forEach(function (el) {
              el.Auth === "" ? el.Auth = 'No Auth' : displayApi(el);
            });
          })["catch"](function (error) {
            if (error) {
              info.innerText = "Please Select Category";
            }
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

var displayApi = function displayApi(item) {
  var API = item.API,
      Auth = item.Auth,
      Description = item.Description,
      Link = item.Link;
  var cardHTML = "\n        <div class=\"api\">\n        <div class=\"api__wrapper\">\n        <h3 class=\"api__title\">".concat(API, "</h3>\n        <i id=\"addToFav\"class=\" far fa-star \"></i>\n        <p class=\"api__auth\"><span>Auth</span>: ").concat(Auth, "</p>\n        <p class=\"api__descryption\">").concat(Description, "</p>\n        </div>\n        <a href=").concat(Link, " class=\"doc__link\" target=\"_blanck\"><i class=\"fas fa-external-link-alt\"></i></a>\n        </div>");
  displayedApi.insertAdjacentHTML('beforeend', cardHTML);
}; // save item into local storage to be later displayed in the Favorite section


document.body.addEventListener('click', function (e) {
  if (event.srcElement.id == 'addToFav') {
    if (typeof Storage !== "undefined") {
      var apiCard = e.target.parentElement.parentElement.outerHTML;
      var getApiTitle = e.target.parentElement.children[0].innerText;
      e.target.classList.add("fas");
      localStorage.setItem(getApiTitle, apiCard);
    } else {
      alert("Storage in this browser is not supported");
    }
  }

  ;
});

function getFavfomLocalStrg() {
  var favHTML = [];
  var keys = Object.keys(localStorage);
  var i = keys.length;

  while (i--) {
    favHTML.push(localStorage.getItem(keys[i]));
  }

  return favHTML;
} // clear loaclSotarge with saved apiCards


var favoriteClearButton = document.querySelector(".favorite__clear");
favoriteClearButton.addEventListener("click", function () {
  localStorage.clear();
});
var content = document.querySelectorAll(".api__wrapper");

function showFavorite() {
  favButton.addEventListener("click", function () {
    var displayedApi = document.querySelector(".displayed__apis");
    fakeSection.innerHTML = "";
    displayedApi.innerHTML = "";
    info.innerHTML = "";

    if (localStorage.length === 0) {
      info.innerText = "no cards added to favorites";
    }

    ;
    fakeSection.insertAdjacentHTML('afterbegin', getFavfomLocalStrg());
    console.log(content);
  });
}

showFavorite();