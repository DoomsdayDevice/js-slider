export default class ImageSelector{
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
    const container = document.querySelector(".image-slider__selector");
    const paragraphs = []; // <p> tags for each image checkbox
    let p;
    for (let i = 0; i < this.namesOfImageFiles.length; i++){
      p = document.createElement("p");

      p.classList.add('image-slider_selected');
      paragraphs.push(p);

      p.textContent = this.namesOfImageFiles[i];
      container.appendChild(p);
      this.addOnClickEvents(p, this.arrayOfImages[i]);
    }
  }
  addOnClickEvents(p, imageObject){
    p.addEventListener("click", () => {
      if (this.thereIsMoreThanOnePic()){
        console.log("Hello Bitches");
        p.classList.toggle('image-slider_selected');
        imageObject.isActive = !imageObject.isActive;
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
      currentImage.className = "image-slider__image";

      let currentDiv = document.createElement("div");
      currentDiv.className = "image-slider__image-container";
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
