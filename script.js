let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");

url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data.content, data.author);
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `~ ${data.author}`;
    });
};
btn.addEventListener("click", getQuote);
