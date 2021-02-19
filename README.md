[![Netlify Status](https://api.netlify.com/api/v1/badges/d369a588-f88a-4dbb-aa78-e7882f295b44/deploy-status)](https://app.netlify.com/sites/restapifinder/deploys)

> ### ApiFinder is a simple web app where you can find a lot of different ```API``` categories for your needs, with a short description, and displaying if **authorization** is needed, also there is the link that goes to the URL of that API

<br/>

### Tech stack used:
    1. babel
    2. sass
    3. webpack
    4. GSAP
    5. autoprefixer
    6. postcss
    7. service worker for caching files

</br>


# ApiFinder

after Selecting Category a list of available API is displayed
you can visit site here -> [ApiFinder](https://restapifinder.netlify.app/)
![concept for main page](/concept_mainPage.png)

</br>

## Available commands:
```
    npm run start:dev - start's project in development mode on http://localhost:8080/

    npm run build - build project in production mode and put all necessary files into ./dist folder
```
<br/>


## _To-Do_:

    - [x] mobile friendly
    - [x] favorite section is not cleared after another click

## _Bug_:

    - [x] show favorite, (after click on a button multiple duplicates are inserted into one div)
    - [x] after displayed favorite cards, a comma is displayed as well(fixed)

## _Ideas_:

    - [x] add feature to delete all cards from favorite section/localStorage
