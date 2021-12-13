console.log(`Main Js`);

const desc = document.getElementById("desc");

const APIKEY = "ad06e0948c0f47f8a1b7dea2a2d87689";
const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-13&sortBy=publishedAt&apiKey=${APIKEY}`;

// What's wrong here!

// fetch(url)
//   .then((data) => data.json())
//   .then((result) =>
//     // result.articles.forEach((article) => console.log(article.description));
//     result.articles.forEach((article) => (desc.innerHTML = article.description))
//   );
