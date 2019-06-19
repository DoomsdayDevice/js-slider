import Dots from './Dots.js';
import {
  SLIDER_WIDTH,
  SLIDER_HEIGHT,
  NUM_OF_FRAMES,
  COLORS
} from './vars.js';
import './style.scss';

class Slider{
  constructor(){
    this.currentXOffset = -SLIDER_WIDTH;
    this.imageTrain = document.querySelector(".slider__main__window__images-container");

    this.animationActive = false;
    this.text = document.querySelector(".slider__main__text");

    this.dots = {}; // the dots object is connected later


    let leftArrow = document.querySelector(".slider__btn-left");
    let rightArrow = document.querySelector(".slider__btn-right");
    leftArrow.addEventListener("click", () => {
      if (!this.animationActive && this.arrayOfImages.length > 1){
        this.slideLeft();
      }
    });
    rightArrow.addEventListener("click", () => {
      if (!this.animationActive && this.arrayOfImages.length > 1){
        this.slideRight();
      }
    });



  }
  loadImages(arrayOfImageObjects){
    // Resetting everything upon image load
    this.arrayOfImages = [];
    this.imageTrain.innerHTML = "";

    this.dots.listOfDots = [];
    this.dots.dotsContainer.innerHTML = "";
    this.dots.currentSelectedDot = 0;


    for (let i = 0; i < arrayOfImageObjects.length; i++){
      if (arrayOfImageObjects[i].isActive){
        this.arrayOfImages.push(arrayOfImageObjects[i].img);
        this.imageTrain.append(arrayOfImageObjects[i].img);
      }
    }

    if(this.arrayOfImages.length > 2){
      this.currentXOffset = -SLIDER_WIDTH;
    } else {
      this.currentXOffset = 0;
    }
    this.settingTrainOrder();
    this.imageTrain.style.transform = `translate(${this.currentXOffset}px, 0px)`;
    this.writeNumbers();

    this.dots.makeDots();
  }

  writeNumbers(){
    let currentImage = this.dots.currentSelectedDot + 1;
    let totalImages = this.dots.listOfDots.length;
    let string = `${currentImage}/${totalImages}`;
    this.text.textContent = string;
  }

  settingTrainOrder(){
    // set flex order for each item in the array
    for (let img = 0; img < this.arrayOfImages.length; img++){
      this.arrayOfImages[img].style.order = img;
    }

    // give last elemt -1 so it appears before the first visible image
    if (this.arrayOfImages.length > 2){
      this.arrayOfImages[this.arrayOfImages.length -1].style.order = -1;
    }
  }

  slideLeft(slidesSkipped=1){
    const direction = 1;

    this.adjustTrainLeftward(slidesSkipped);
    this.animate(direction, slidesSkipped);
    this.dots.selectDot(-slidesSkipped);
  }
  slideRight(slidesSkipped=1){
    const direction = -1;

    this.animate(direction, slidesSkipped);
    this.dots.selectDot(slidesSkipped);
  }

  adjustTrainLeftward(slidesSkipped){
    for (let i = 0; i < slidesSkipped; i++){
      this.arrayOfImages.unshift(this.arrayOfImages.pop());
    }
    this.settingTrainOrder();
    this.currentXOffset -= SLIDER_WIDTH * slidesSkipped;
  }
  adjustTrainRightward(slidesSkipped){
    for (let i = 0; i < slidesSkipped; i++){
      this.arrayOfImages.push(this.arrayOfImages.shift());
    }
    this.settingTrainOrder();
    this.adjustXOffset(this.currentXOffset);
  }
  adjustXOffset(offset){
    this.imageTrain.style.transform = `translate(${offset}px, 0px)`;
  }

  animate(direction, slidesSkipped){
    let adjustment = SLIDER_WIDTH * slidesSkipped / NUM_OF_FRAMES;
    requestAnimationFrame( () => {
      this.animationFrame(this.currentXOffset, adjustment, 0,
                          direction, slidesSkipped);
    });
    this.animationActive = true;
  }

  animationFrame(initialOffset, adjustment, currentFrame, direction, slidesSkipped){
    let currentOffset = initialOffset + adjustment * direction;
    currentFrame += 1;

    // adjust train position
    this.adjustXOffset(currentOffset);

    if (currentFrame < NUM_OF_FRAMES){
      requestAnimationFrame( () => {
        this.animationFrame(currentOffset, adjustment, currentFrame,
                            direction, slidesSkipped);
      } );
    } else { // at the end of animation
      if (direction == -1){ // when moving rightwards
        this.adjustTrainRightward(slidesSkipped);
      } else {
        this.currentXOffset += SLIDER_WIDTH * slidesSkipped * direction;
      }

      this.animationActive = false;
    }
  }
}


class ImageSelector{
  // list all images
  constructor(slider, images){
    this.slider = slider;
    this.namesOfImageFiles = images;
    this.arrayOfImages = [];

    this.loadImagesFromFolder();

    // create checkbuttons for each pic and add event listeners for them
    this.createCheckButtons();

    this.slider.loadImages(this.arrayOfImages);
  }
  createCheckButtons(){
    const container = document.querySelector(".image-selector");
    const paragraphs = []; // <p> tags for each image checkbox
    let p;
    for (let i = 0; i < this.namesOfImageFiles.length; i++){
      p = document.createElement("p");

      p.style.backgroundColor = COLORS.success;
      paragraphs.push(p);

      p.textContent = this.namesOfImageFiles[i];
      container.appendChild(p);
      this.addOnClickEvents(p, this.arrayOfImages[i]);
    }
  }
  addOnClickEvents(p, imageObject){
    p.addEventListener("click", () => {
      if (p.style.backgroundColor == COLORS.success &&
          this.thereIsMoreThanOnePic()) {

        p.style.backgroundColor = COLORS.danger;
        imageObject.isActive = false;

      } else {

        p.style.backgroundColor = COLORS.success;
        imageObject.isActive = true;

      }
      this.slider.loadImages(this.arrayOfImages);
    });
  }
  loadImagesFromFolder(){
    let images = [];
    let currentImage;
    for (let i = 0; i < 10; i++){ // add the listed images to the array
      images.push({});

      currentImage = new Image();
      currentImage.src = "src/images/" + this.namesOfImageFiles[i];
      currentImage.className = "image";

      let currentDiv = document.createElement("div");
      currentDiv.className = "image-container";
      currentDiv.appendChild(currentImage);

      images[i].img = currentDiv;
      images[i].isActive = true;
    }
    this.arrayOfImages = images;
  }

  thereIsMoreThanOnePic(){
    let counter = 0;
    for (let i = 0; i < this.arrayOfImages.length; i++){
      if (this.arrayOfImages[i].isActive){
        counter++;
      }
    }

    if (counter > 1){
      return true;
    } else {
      return false;
    }
  }
}


const mySlider = new Slider();
const myDots = new Dots(mySlider);

(async function getImages(){
  const images = await fetch('src/images.json', {method: 'GET'})
    .then(res => res.json());
  const myImageSelector = new ImageSelector(mySlider, images);
})();
