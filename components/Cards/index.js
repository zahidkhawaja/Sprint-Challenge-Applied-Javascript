// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(object) {
    const card = document.createElement("div"),
        headline = document.createElement("div"),
        authorContainer = document.createElement("div"),
        imageContainer = document.createElement("div"),
        authorImage = document.createElement("img"),
        authorName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    authorContainer.classList.add("author");
    imageContainer.classList.add("img-container");

    headline.textContent = object.headline;
    authorImage.src = object.authorPhoto;
    authorName.textContent = `By ${object.authorName}`;

    card.append(headline, authorContainer);
    authorContainer.append(imageContainer, authorName);
    imageContainer.append(authorImage);

    return card;
}

const cardsContainer = document.querySelector(".cards-container");

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response => {
//         const javascriptArticles = Object.values(response.data.articles)[0];
//         const javascriptArticlesArray = Object.values(javascriptArticles);
//         javascriptArticlesArray.forEach(element => {
//             cardsContainer.append(createCard(element));
//         })
//     })
//     .catch(error => {
//         console.log("The data was not returned", error);
//     })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const allArticles = Object.values(response.data.articles);
        allArticles.forEach(element => {
            for(i=0; i < element.length; i++) {
                cardsContainer.append(createCard(element[i]));
            }
        })
    })
    .catch(error => {
        console.log("The data was not returned", error);
    })




