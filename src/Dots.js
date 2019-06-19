import { DOT } from './vars.js';

export default class Dots {
  constructor(slider){
    this.dotsContainer = document.querySelector(".image-slider__dots");
    this.currentSelectedDot = 0;
    this.listOfDots = [];
    this.slider = slider;
    this.slider.dots = this;
  }

  makeDots(){
    let currentDot;
    for (let i = 0; i < this.slider.arrayOfImages.length; i++){
      currentDot = document.createElement("div");
      currentDot.className = "image-slider__dot";
      this.dotsContainer.appendChild(currentDot);
      this.listOfDots.push(currentDot);

      currentDot.addEventListener("click", () => {
        if (!this.slider.animationActive && this.slider.arrayOfImages.length > 1){
          this.selectImage(i);
        }
      });

    }
    this.selectDot(0);
  }
  selectDot(shift){
    let dotStyle = this.listOfDots[this.currentSelectedDot].style;
    dotStyle.backgroundColor = DOT.bgColor;
    dotStyle.width = DOT.size;
    dotStyle.height = DOT.size;
    dotStyle.opacity = ".5";

    this.currentSelectedDot += shift;
    if(this.currentSelectedDot < 0){
      this.currentSelectedDot = this.listOfDots.length - 1;
    } else if(this.currentSelectedDot == this.listOfDots.length) {
      this.currentSelectedDot = 0;
    }

    dotStyle = this.listOfDots[this.currentSelectedDot].style;
    dotStyle.backgroundColor = DOT.bgColor;
    dotStyle.opacity = "1";
    dotStyle.width = DOT.sizeBig;
    dotStyle.height = DOT.sizeBig;
    this.slider.writeNumbers();
  }
  selectImage(slidesSkipped){
    // calc diff between current selected dot and number
    // do that many slides in that direction
    let difference = slidesSkipped - this.currentSelectedDot;
    if (difference >= 0){
      this.slider.slideRight(difference);
    } else {
      this.slider.slideLeft(Math.abs(difference));
    }
  }
}
