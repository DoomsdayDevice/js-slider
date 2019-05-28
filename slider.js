const sliderWidth = 800;
const sliderHeight = 400;
const numOfFrames = 20;


class Slider{
    constructor(){
        this.currentXOffset = -sliderWidth;
        this.imagesDiv = document.querySelector(".slider-images");
        this.dotsContainer = document.querySelector(".dots-container");

        this.animationActive = false;
        this.currentSelectedDot = 0;
        this.listOfDots = [];
        this.text = document.querySelector(".text");


        let leftArrow = document.querySelector(".left-arrow");
        let rightArrow = document.querySelector(".right-arrow");
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
    makeDots(){
        let currentDot;
        for (let i = 0; i < this.arrayOfImages.length; i++){
            currentDot = document.createElement("div");
            currentDot.className = "dot";
            this.dotsContainer.appendChild(currentDot);
            this.listOfDots.push(currentDot);
            currentDot.addEventListener("click", () => {
                if (!this.animationActive && this.arrayOfImages.length > 1){
                    this.selectImage(i);
                }
            });

        }
        this.selectDot(0);
    }
    settingOrder(){
        // set flex order for each item in the array
        for (let img = 0; img < this.arrayOfImages.length; img++){
            this.arrayOfImages[img].style.order = img;
        }

        // give last elemt -1
        if (this.arrayOfImages.length > 2){
            this.arrayOfImages[this.arrayOfImages.length -1].style.order = -1;
        }
    }
    slideLeft(slideShift=1){
        for (let i = 0; i < slideShift; i++){
            this.arrayOfImages.unshift(this.arrayOfImages.pop());
        }
        this.settingOrder();
        this.currentXOffset -= sliderWidth * slideShift;

        let signFactor = 1;
        this.animate(signFactor, slideShift);
        this.selectDot(-slideShift);
    }
    slideRight(slideShift=1){
        let signFactor = -1;
        this.animate(signFactor, slideShift);
        this.selectDot(slideShift);
    }

    animate(signFactor, slideShift = 1){
        let adjustment = sliderWidth * slideShift / numOfFrames;
        requestAnimationFrame( () => {
            this.animationFrame(this.currentXOffset, adjustment, 0, this.imagesDiv,
                                signFactor, slideShift);
        });
        this.animationActive = true;
    }
    selectDot(shift){
        let dotStyle = this.listOfDots[this.currentSelectedDot].style;
        dotStyle.backgroundColor = "white";
        dotStyle.width = "10px";
        dotStyle.height = "10px";
        dotStyle.opacity = ".5";

        this.currentSelectedDot += shift;
        if(this.currentSelectedDot < 0){
            this.currentSelectedDot = this.listOfDots.length - 1;
        } else if(this.currentSelectedDot == this.listOfDots.length) {
            this.currentSelectedDot = 0;
        }

        dotStyle = this.listOfDots[this.currentSelectedDot].style;
        dotStyle.backgroundColor = "white";
        dotStyle.opacity = "1";
        dotStyle.width = "20px";
        dotStyle.height = "20px";
        this.writeText();
    }
    selectImage(slideShift){
        // calc diff between current selected dot and number
        // do that many slides in that direction
        let difference = slideShift - this.currentSelectedDot;
        if (difference >= 0){
            this.slideRight(difference);
        } else {
            this.slideLeft(Math.abs(difference));
        }
    }
    writeText(){
        let currentImage = this.currentSelectedDot + 1;
        let totalImages = this.listOfDots.length;
        let string = `${currentImage}/${totalImages}`;
        this.text.textContent = string;
    }

    reloadActiveImages(arrayOfImageObjects){
        this.arrayOfImages = [];
        this.listOfDots = [];
        this.dotsContainer.innerHTML = "";
        this.currentSelectedDot = 0;
        this.imagesDiv.innerHTML = "";


        for (let i = 0; i < arrayOfImageObjects.length; i++){
            if (arrayOfImageObjects[i].isActive){
                this.arrayOfImages.push(arrayOfImageObjects[i].img);
                this.imagesDiv.append(arrayOfImageObjects[i].img);
            }
        }

        if(this.arrayOfImages.length > 2){
            this.currentXOffset = -sliderWidth;
        } else {
            this.currentXOffset = 0;
        }
        this.settingOrder();
        this.imagesDiv.style.transform = `translate(${this.currentXOffset}px, 0px)`;
        this.makeDots();
        this.writeText();
    }

    animationFrame = (initialOffset, adjustment, currentFrame, div, signFactor, slideShift) => {
        let currentOffset = initialOffset + adjustment * signFactor;
        currentFrame += 1;

        div.style.transform = `translate(${currentOffset}px, 0px)`;

        if (currentFrame < numOfFrames){
            requestAnimationFrame( () => {
                this.animationFrame(currentOffset, adjustment, currentFrame, div,
                                    signFactor, slideShift) ;
            } );
        } else {
            if (signFactor == -1){ // when moving rightwards adjust position AFTER the animation
                for (let i = 0; i < slideShift; i++){
                    this.arrayOfImages.push(this.arrayOfImages.shift());
                }
                this.settingOrder();
                div.style.transform = `translate(${this.currentXOffset}px, 0px)`;
            } else {
                this.currentXOffset += sliderWidth * slideShift * signFactor;
            }

            this.animationActive = false;
        }
    }
}

class ImagesSelector{
    // list all images
    constructor(slider){
        this.slider = slider;
        this.listOfImageNames = [];
        this.lines = [];
        this.arrayOfImages = [];

        this.listImageNames();


        let container = document.querySelector(".image-selector");

        let checkbox;
        let line;
        for (let i = 0; i < this.listOfImageNames.length; i++){
            line = document.createElement("p");

            line.style.backgroundColor = "rgb(0, 170, 0)";
            this.lines.push(line);

            line.textContent = this.listOfImageNames[i];
            container.appendChild(line);

            this.lines[i].addEventListener("click", () => {
                if (this.lines[i].style.backgroundColor == "rgb(0, 170, 0)" && this.isMoreThanOne()){
                    this.lines[i].style.backgroundColor = "rgb(170, 0, 0)";
                    this.arrayOfImages[i].isActive = false;
                } else {
                    this.lines[i].style.backgroundColor = "rgb(0, 170, 0)";
                    this.arrayOfImages[i].isActive = true;
                }
                this.slider.reloadActiveImages(this.arrayOfImages);
            });
        }

        this.loadImages();
    }
    listImageNames(){
        this.listOfImageNames = ["wf.jpg", "ape.jpg", "lion.jpg", "rose.jpg", "kitten.jpg", "cat.jpg",
                          "gecko.jpg", "eyes.jpg", "oldman.jpg", "politics.jpg"];
    }
    loadImages(){
        let images = [];
        let currentImage;
        for (let i = 0; i < 10; i++){
            images.push({});

            currentImage = new Image();
            currentImage.src = "slider-pics/" + this.listOfImageNames[i];
            currentImage.className = "image";

            let currentDiv = document.createElement("div");
            currentDiv.className = "image-div";
            currentDiv.appendChild (currentImage);

            images[i].img = currentDiv;
            images[i].isActive = true;
        }
        this.arrayOfImages = images;
        this.slider.reloadActiveImages(this.arrayOfImages);
    }
    isMoreThanOne(){
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


let mySlider = new Slider();
let myImages = new ImagesSelector(mySlider);
