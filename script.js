// All code will live inside a DOM event listener
document.addEventListener("DOMContentLoaded", () => {
  // First create an array of objects to hold the card images
  const cardArray = [
    {
      nom: "black-lab",
      img: "images/black-lab.jpg",
    },

    {
      nom: "choc-lab",
      img: "images/choc-lab.jpg",
    },

    {
      nom: "dalmation",
      img: "images/dalmation.jpg",
    },

    {
      nom: "french-bulldog",
      img: "images/french-bulldog",
    },

    {
      nom: "pup-glasses",
      img: "images/pup-glasses",
    },

    {
      nom: "weimaraner",
      img: "images/weimaraner.jpg",
    },

    {
      nom: "black-lab",
      img: "images/black-lab.jpg",
    },

    {
      nom: "choc-lab",
      img: "images/choc-lab.jpg",
    },

    {
      nom: "dalmation",
      img: "images/dalmation.jpg",
    },

    {
      nom: "french-bulldog",
      img: "images/french-bulldog.jpg",
    },

    {
      nom: "pup-glasses",
      img: "images/pup-glasses.jpg",
    },

    {
      nom: "weimaraner",
      img: "images/weimaraner.jpg",
    },
  ];

  //get the .grid element using query selector
  const grid = document.querySelector(".grid");
  //create empty array for cards chosen
  let cardsChosen = [];
  //and for the cardsChosen ID
  let cardsChosenId = [];

  //Create the game board
  function createBoard() {
    //loop over the cardArray and use createElement method to create the image elements
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      //use setAttribute to link to the relevant image path of question-mark card to start the game
      card.setAttribute("src", "images/question-mark.png");
      //use data-id and i to loop through the array and assign an index from 0 - 11
      card.setAttribute("data-id", i);
      //add an event listener to listen for when the card is clicked, this will trigger the flipcard function
      card.addEventListener("click", flipCard);

      //place all cards onto the grid using appendChild method
      grid.appendChild(card);
    }
  }

  //check for matches

  //flip card function
  function flipCard() {
    //getAttribute gets the data-id created on line 81
    let cardId = this.getAttribute("data-id");
    //push the selected card, based on the cardId, into the cardsChosen array, storing it's name
    cardsChosen.push(cardArray[cardId].nom);
    //the cardId will also be stored in a separate array - cardsChosenId
    cardsChosenId.push(cardId);
    //use setAttribute to place the relevant image to the card square, depending on which cardId it holds
    this.setAttribute("src", cardArray[cardId].img);
  }

  createBoard();
});
