let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("get-quote")


const url = "https://stoic-quotes.com/api/quote";

let getQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        // console.log(item);
        console.log(item.text);
        console.log(item.author)
        quote.innerText = item.text;
        author.innerText = item.author;
    });
};
window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote);