export default class ImageSelector {
  // list all images
  constructor(slider, images) {
    this.slider = slider;
    this.namesOfImageFiles = images;
    this.arrayOfImages = [];

    this.loadImagesFromFolder();

    // create checkbuttons for each pic and add event listeners for them
    this.createCheckButtons();

    this.slider.loadImages(this.arrayOfImages);
  }
  createCheckButtons() {
    const container = document.querySelector('.slider__selector');
    const paragraphs = []; // <p> tags for each image checkbox
    let p;
    for (let i = 0; i < this.namesOfImageFiles.length; i++) {
      p = document.createElement('p');

      p.classList.add('slider_selected');
      paragraphs.push(p);

      p.textContent = this.namesOfImageFiles[i];
      container.appendChild(p);
      this.addOnClickEvents(p, this.arrayOfImages[i]);
    }
  }
  addOnClickEvents(p, imageObject) {
    p.addEventListener('click', () => {
      if (this.onlyOnePicSelected()) {
        p.classList.add('slider_selected');
        imageObject.isActive = true;
      } else {
        p.classList.toggle('slider_selected');
        imageObject.isActive = !imageObject.isActive;
      }
      this.slider.loadImages(this.arrayOfImages);
    });
  }
  onlyOnePicSelected() {
    const count = this.arrayOfImages.reduce(
      (acc, img) => acc + (img.isActive ? 1 : 0),
      -1
    );
    return !count;
  }
  loadImagesFromFolder() {
    let images = [];
    let currentImage;
    for (let i = 0; i < 10; i++) {
      // add the listed images to the array
      images.push({});

      currentImage = new Image();
      currentImage.src = 'src/images/' + this.namesOfImageFiles[i];
      currentImage.className = 'slider__image';

      let currentDiv = document.createElement('div');
      currentDiv.className = 'slider__image-container';
      currentDiv.appendChild(currentImage);

      images[i].img = currentDiv;
      images[i].isActive = true;
    }
    this.arrayOfImages = images;
  }
}
