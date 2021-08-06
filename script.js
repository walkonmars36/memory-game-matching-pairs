// All code will live inside a DOM event listener
document.addEventListener("DOMContentLoaded", () => {
  // First create an array of objects to hold the card images
  const cardArray = [
    {
      card: "black-lab",
      img: "images/black-lab.jpg",
    },

    {
      card: "choc-lab",
      img: "images/choc-lab.jpg",
    },

    {
      card: "dalmation",
      img: "images/dalmation.jpg",
    },

    {
      card: "french-bulldog",
      img: "images/french-bulldog",
    },

    {
      card: "pup-glasses",
      img: "images/pup-glasses",
    },

    {
      card: "weimaraner",
      img: "images/weimaraner.jpg",
    },

    {
      card: "black-lab",
      img: "images/black-lab.jpg",
    },

    {
      card: "choc-lab",
      img: "images/choc-lab.jpg",
    },

    {
      card: "dalmation",
      img: "images/dalmation.jpg",
    },

    {
      card: "french-bulldog",
      img: "images/french-bulldog.jpg",
    },

    {
      card: "pup-glasses",
      img: "images/pup-glasses.jpg",
    },

    {
      card: "weimaraner",
      img: "images/weimaraner.jpg",
    },
  ];

  //Create the game board
  // first get the .grid element using query selector
  const grid = document.querySelector(".grid");

  //then loop over the cardArray and use createElement method to create the image elements
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    //use setAttribute to link to the relevant image path of question-mark card to start the game
    card.setAttribute("src", "images/question-mark.png");
    //use data-id and i to loop through the array and assign an index from 0 - 11
    card.setAttribute("data-id", i);
    //add an event listener to listen for when the card(s) are clicked, which will trigger the flipcard function
    card.addEventListener("click", flipcard);
  }
});
