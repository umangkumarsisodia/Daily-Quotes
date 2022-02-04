let realData;
let quoteData;
let author;
let quote = document.querySelector(".quote");
let quoteWriter = document.querySelector(".quote-writer");

const generateNewQuote = () => {
    let twitter = document.getElementById("twitter");
    twitter.style.animation = "rotation 1s 1 linear";
    let quoteIndex = Math.floor(Math.random()*11);
    quoteData = realData[quoteIndex].text;
    quote.innerText = quoteData;
    author = realData[quoteIndex].author;
    if(author == null) {
        quoteWriter.innerText = "by- Unknown";
    }
    else {
        quoteWriter.innerText = "by- " + author;
    }
}

const generateQuote = () => {
    let quoteIndex = Math.floor(Math.random()*10);
    let url = "https://type.fit/api/quotes";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
        realData = JSON.parse(this.responseText);
        quoteData = realData[quoteIndex].text;
        quote.innerText = realData[quoteIndex].text;
        quoteWriter.innerText = "by- " + realData[quoteIndex].author;
    }
    xhr.send();
}

const tweet = () => {
    let url = `https://twitter.com/intent/tweet?text=${quoteData}`;
    window.open(url);
}

let tweetMe = document.getElementById("tweetMe");
tweetMe.addEventListener('click',tweet);

generateQuote();

let btn = document.getElementById("btn");
btn.addEventListener('click', generateNewQuote);