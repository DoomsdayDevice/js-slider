import { DOT } from './vars.js';

export default class Dots {
  constructor(slider) {
    this.dotsContainer = document.querySelector('.slider__dots');
    this.currentSelectedDot = 0;
    this.listOfDots = [];
    this.slider = slider;
    this.slider.dots = this;
  }

  makeDots() {
    let currentDot;
    for (let i = 0; i < this.slider.arrayOfImages.length; i++) {
      currentDot = document.createElement('div');
      currentDot.className = 'slider__dot';
      this.dotsContainer.appendChild(currentDot);
      this.listOfDots.push(currentDot);

      currentDot.addEventListener('click', () => {
        if (
          !this.slider.animationActive &&
          this.slider.arrayOfImages.length > 1
        ) {
          this.selectImage(i);
        }
      });
    }
    this.selectDot(0);
  }
  selectDot(shift) {
    this.listOfDots[this.currentSelectedDot].classList.remove(
      'slider__dot--selected'
    );

    this.currentSelectedDot += shift;

    if (this.currentSelectedDot < 0) {
      this.currentSelectedDot = this.listOfDots.length - 1;
    } else if (this.currentSelectedDot === this.listOfDots.length) {
      this.currentSelectedDot = 0;
    }

    this.listOfDots[this.currentSelectedDot].classList.add(
      'slider__dot--selected'
    );
    this.slider.writeNumbers();
  }
  selectImage(slidesSkipped) {
    // calc diff between current selected dot and number
    // do that many slides in that direction
    const difference = slidesSkipped - this.currentSelectedDot;
    difference >= 0
      ? this.slider.slideRight(difference)
      : this.slider.slideLeft(Math.abs(difference));
  }
}
