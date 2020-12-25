/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let theLayer = ["&#9674", "&#9824", "&#9827", "&#9829", "&#9830"];
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

  function randomNumber() {
    return theNumber[Math.floor(Math.random() * theNumber.length)];
  }

  var theSuits = randomSuits();

  if (theSuits == "&#9829;" || theSuits == "&#9830;") {
    document.querySelector(".top-layer").style.color = "red";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".bottom-layer").style.color = "red";
  }

  document.querySelector(".top-layer").innerHTML = theSuits;

  document.querySelector(".numbers").innerHTML = randomNumber();

  document.querySelector(".bottom-layer").innerHTML = theSuits;
};
