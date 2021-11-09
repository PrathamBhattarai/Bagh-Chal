console.log("Hello world");
//import Goat from "./Goat.js";
import Tiger from "./Tiger.js";
const Board = document.querySelector(".board");
const  tigers = [
  new Tiger(Board.offsetLeft, Board.offsetTop),
  new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop),
  new Tiger(Board.offsetLeft, Board.offsetTop + Board.offsetHeight),
  new Tiger(Board.offsetLeft + Board.offsetWidth, Board.offsetTop + Board.offsetHeight)
];
 tigers.forEach(tiger => tiger.tigerplace())

