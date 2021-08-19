// First create an array of objects to hold the card images
const cardArray = [
  {
    name: "black-lab",
    img: "images/black-lab.jpg",
  },

  {
    name: "choc-lab",
    img: "images/choc-lab.jpg",
  },

  {
    name: "dalmation",
    img: "images/dalmation.jpg",
  },

  {
    name: "french-bulldog",
    img: "images/french-bulldog.jpg",
  },

  {
    name: "pug-glasses",
    img: "images/pug-glasses.jpg",
  },

  {
    name: "weimaraner",
    img: "images/weimaraner.jpg",
  },

  {
    name: "black-lab",
    img: "images/black-lab.jpg",
  },

  {
    name: "choc-lab",
    img: "images/choc-lab.jpg",
  },

  {
    name: "dalmation",
    img: "images/dalmation.jpg",
  },

  {
    name: "french-bulldog",
    img: "images/french-bulldog.jpg",
  },

  {
    name: "pug-glasses",
    img: "images/pug-glasses.jpg",
  },

  {
    name: "weimaraner",
    img: "images/weimaraner.jpg",
  },
];

//get the .grid element using query selector
const grid = document.querySelector(".grid");

//get the result ID to be able to display the score of correct guesses
const resultDisplay = document.getElementById("result");
const messageDisplay = document.getElementById("message");

//create empty array for cards chosen
let cardsChosen = [];
//and for the cardsChosen ID
let cardsChosenId = [];
//and also an array to hold the card matches found
let cardsWon = [];
//to hold the play again message
const wellDone = document.getElementById("wellDone");
//get the restart button and function
const restart = document.getElementById("restart");

//Create the game board - FUNCTION()
function createBoard() {
  //using sort and Math.random to generate random placing of the cards on each new game
  cardArray.sort(() => 0.5 - Math.random());
  //loop over the cardArray and use createElement method to create the image elements in a card variable
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    //use setAttribute to link to the relevant image path of paw card to start the game
    card.setAttribute("src", "images/paw.png");
    //use data-id and i to loop through the array and assign an index from 0 - 11
    card.setAttribute("data-id", i);
    //add an event listener to listen for when the card is clicked, this will trigger the flipcard function
    card.addEventListener("click", flipCard);

    //place all cards onto the grid using appendChild method
    grid.appendChild(card);
  }
}
//invoke the createBoard()
createBoard();

//flip card - FUNCTION()
function flipCard() {
  messageDisplay.style.visibility = "hidden";
  resultDisplay.style.visibility = "hidden";
  //getAttribute gets the data-id created on line 93
  let cardId = this.getAttribute("data-id");
  //push the selected card, based on the cardId, into the cardsChosen array, storing it's name
  cardsChosen.push(cardArray[cardId].name);
  //the cardId index will also be stored in a separate array - cardsChosenId
  cardsChosenId.push(cardId);
  //use setAttribute to place the relevant image to the card square, depending on which cardId it holds
  this.setAttribute("src", cardArray[cardId].img);

  //we only want two cards in cardsChosen, so need to check for that with checkForMatch function, using setTimeout to control the speed at which this happens in ms.
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

//check for match - FUNCTION()
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  //create two variables to hold what is in index 0 and 1 of cardsChosenId
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  //prevent user from clicking the same square twice
  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/paw.png");
    cards[optionTwoId].setAttribute("src", "images/paw.png");
    alert("You have clicked the same image");
  }
  //check to see if the two chosen cards match
  else if (cardsChosen[0] === cardsChosen[1]) {
    messageDisplay.style.visibility = "visible";
    messageDisplay.textContent = "You found a match 🎉";
    //set found cards to a white square
    cards[optionOneId].setAttribute("src", "images/white-sq.png");
    cards[optionTwoId].setAttribute("src", "images/white-sq.png");
    //remove the event listener(s)
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    //then push the found card pairs into cardsWon array
    cardsWon.push(cardsChosen);
  } else {
    //reset to paw print card
    cards[optionOneId].setAttribute("src", "images/paw.png");
    cards[optionTwoId].setAttribute("src", "images/paw.png");
    messageDisplay.style.visibility = "visible";
    messageDisplay.textContent = "No match, try again.";
  }
  //clear the arrays in readiness for next guess - flipCard()
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.style.visibility = "visible";
  resultDisplay.textContent = " Matches Found : " + cardsWon.length;

  //check if all cards have been found
  if (cardsWon.length === cardArray.length / 2) {
    messageDisplay.textContent = "";
    resultDisplay.textContent = "";
    wellDone.style.display = "block";
    restart.style.display = "block";
  }
}

restart.addEventListener("click", function () {
  messageDisplay.textContent = "";
  //wellDone.textContent = "";
  grid.innerHTML = "";
  cardsChosen = [];
  cardsChosenId = [];
  cardsWon = [];
  createBoard();
  restart.style.display = "none";
});
