import Pawn from './Pawn.js';

export default class Tiger extends Pawn {
  constructor(x, y, img) {
    super(x, y, './img/tiger.jpg');
  }
  place()
  {
    const imgHeight = 60;
    const imgwidth = 30;
    const tigerimg = document.createElement('img');
    tigerimg.src = this.img;
    document.getElementById('tiger-container').appendChild(tigerimg);
    tigerimg.style.position = "absolute";
    tigerimg.style.width = imgwidth + "px";
    tigerimg.style.height = imgHeight + "px";
    tigerimg.style.left = this.x - imgwidth / 2 + "px";
    tigerimg.style.top = this.y - imgHeight / 2 + "px";
    
    const mainimg = document.getElementById('imgcontainer');
    

  }
  
}
