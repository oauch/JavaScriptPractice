const quotes = [
    {
        quote : "밑잔 빼기냐?",
        author : "(지영일)"
    },
    {
        quote : "아니 임윤혁 미친놈",
        author : "(최한샘)"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;