import "bootstrap";
import "./style.css";

window.onload = () => {
  let theLayer = ["&loz;", "&spades;", "&clubs;", "&diams;", "&hearts;"];
  let theNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function randomSuits() {
    return theLayer[Math.floor(Math.random() * theLayer.length)];
  }

  var theSuits = randomSuits();

  function randomNumber() {
    return theNumber[Math.floor(Math.random() * theNumber.length)];
  }

  if (theSuits == "&diams;" || theSuits == "&hearts;") {
    document.querySelector(".top-layer").style.color = "red";
    document.querySelector(".numbers").style.color = "red";
    document.querySelector(".bottom-layer").style.color = "red";
  }

  document.querySelector(".top-layer").innerHTML = theSuits;

  document.querySelector(".numbers").innerHTML = randomNumber();

  document.querySelector(".bottom-layer").innerHTML = theSuits;
};
