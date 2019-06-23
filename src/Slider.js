import { SLIDER_WIDTH, SLIDER_HEIGHT, NUM_OF_FRAMES, COLORS } from './vars.js';

export default class Slider {
  constructor() {
    this.currentXOffset = -SLIDER_WIDTH;
    this.imageTrain = document.querySelector('.image-slider__image-train');

    this.animationActive = false;
    this.text = document.querySelector('.image-slider__text');

    this.dots = {}; // the dots object is connected later

    let leftArrow = document.querySelector('.image-slider__btn-left');
    let rightArrow = document.querySelector('.image-slider__btn-right');
    leftArrow.addEventListener('click', () => {
      if (!this.animationActive && this.arrayOfImages.length > 1) {
        this.slideLeft();
      }
    });
    rightArrow.addEventListener('click', () => {
      if (!this.animationActive && this.arrayOfImages.length > 1) {
        this.slideRight();
      }
    });
  }
  loadImages(arrayOfImageObjects) {
    // Resetting everything upon image load
    this.arrayOfImages = [];
    this.imageTrain.innerHTML = '';

    this.dots.listOfDots = [];
    this.dots.dotsContainer.innerHTML = '';
    this.dots.currentSelectedDot = 0;

    arrayOfImageObjects.forEach(imObj => {
      if (imObj.isActive) {
        this.arrayOfImages.push(imObj.img);
        this.imageTrain.append(imObj.img);
      }
    });

    this.arrayOfImages.length > 2
      ? (this.currentXOffset = -SLIDER_WIDTH)
      : (this.currentXOffset = 0);

    this.settingTrainOrder();
    this.imageTrain.style.transform = `translate(${
      this.currentXOffset
    }px, 0px)`;
    this.writeNumbers();

    this.dots.makeDots();
  }

  writeNumbers() {
    let currentImage = this.dots.currentSelectedDot + 1;
    let totalImages = this.dots.listOfDots.length;
    let string = `${currentImage}/${totalImages}`;
    this.text.textContent = string;
  }

  settingTrainOrder() {
    // set flex order for each item in the array
    this.arrayOfImages.forEach((img, i) => {
      img.style.order = i;
    });

    // give last elemt -1 so it appears before the first visible image
    if (this.arrayOfImages.length > 2)
      this.arrayOfImages[this.arrayOfImages.length - 1].style.order = -1;
  }

  slideLeft(slidesSkipped = 1) {
    const direction = 1;

    this.adjustTrainLeftward(slidesSkipped);
    this.animate(direction, slidesSkipped);
    this.dots.selectDot(-slidesSkipped);
  }
  slideRight(slidesSkipped = 1) {
    const direction = -1;

    this.animate(direction, slidesSkipped);
    this.dots.selectDot(slidesSkipped);
  }

  adjustTrainLeftward(slidesSkipped) {
    for (let i = 0; i < slidesSkipped; i++) {
      this.arrayOfImages.unshift(this.arrayOfImages.pop());
    }
    this.settingTrainOrder();
    this.currentXOffset -= SLIDER_WIDTH * slidesSkipped;
  }
  adjustTrainRightward(slidesSkipped) {
    for (let i = 0; i < slidesSkipped; i++) {
      this.arrayOfImages.push(this.arrayOfImages.shift());
    }
    this.settingTrainOrder();
    this.adjustXOffset(this.currentXOffset);
  }
  adjustXOffset(offset) {
    this.imageTrain.style.transform = `translate(${offset}px, 0px)`;
  }

  animate(direction, slidesSkipped) {
    let adjustment = (SLIDER_WIDTH * slidesSkipped) / NUM_OF_FRAMES;
    requestAnimationFrame(() =>
      this.animationFrame(
        this.currentXOffset,
        adjustment,
        0,
        direction,
        slidesSkipped
      )
    );
    this.animationActive = true;
  }

  animationFrame(
    initialOffset,
    adjustment,
    currentFrame,
    direction,
    slidesSkipped
  ) {
    let currentOffset = initialOffset + adjustment * direction;
    currentFrame += 1;

    // adjust train position
    this.adjustXOffset(currentOffset);

    if (currentFrame < NUM_OF_FRAMES) {
      requestAnimationFrame(() =>
        this.animationFrame(
          currentOffset,
          adjustment,
          currentFrame,
          direction,
          slidesSkipped
        )
      );
    } else {
      // at the end of animation
      direction === -1
        ? this.adjustTrainRightward(slidesSkipped) // when moving rightwards
        : (this.currentXOffset += SLIDER_WIDTH * slidesSkipped * direction); // leftwards
      this.animationActive = false;
    }
  }
}
