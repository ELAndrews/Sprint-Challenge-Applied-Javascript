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



function createCard (article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    img.src = article.authorPhoto;
    headline.textContent = article.headline;
    name.textContent = `By ${article.authorName}`;
    
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(name);
    imgContainer.append(img);
    
    return card
}
// const trial = axios.get('https://lambda-times-backend.herokuapp.com/articles')
// console.log(trial);

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    const objPath = Object.assign(response.data.articles);
    const newObjArr = Object.keys(objPath).map((key) =>{
        return [key, objPath[key]];
    })
    newObjArr.forEach((arr) => {
        arr[1].forEach((article) => {
            cardsContainer.append(createCard(article));
            console.log(`Card data collected for: ${article.headline}.`)
        })
    })
    

    })
    .catch((error) => {
        console.log(`There was an error collecting card data.`)
    })