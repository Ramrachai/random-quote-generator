// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(data => {
//     data.map(function(d) {
//       var arrText = [];
//       var quoteText = d;
//       arrText.push(quoteText);
//       //   return arrText;
//       console.log(arrText[0]);
//     });
//   });

// console.log(quotes);

var quotes, author, quote, quoteBtn;
quotes = [
  {
    author: "Tom Jackson",
    text:
      "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on."
  },
  {
    author: "Abraham Lincoln",
    text: "I will prepare and some day my chance will come."
  },
  {
    author: "Tony Robbins",
    text:
      "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant."
  },
  {
    author: "William Shakespeare",
    text: "It is not in the stars to hold our destiny but in ourselves."
  },
  {
    author: "Napoleon Hill",
    text:
      "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it."
  },
  {
    author: "Aristotle",
    text:
      "If one way be better than another, that you may be sure is natures way."
  }
];

quote = document.querySelector(".quote span");
author = document.querySelector(".author span");
quoteBtn = document.querySelector(".quoteBtn");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  var n = Math.floor(Math.random() * quotes.length);
  author.innerHTML = quotes[n].author;
  quote.innerHTML = quotes[n].text;
}
