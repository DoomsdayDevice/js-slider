import './style.scss';
import template from './template.handlebars';
// const template = require('./template.handlebars');
import handlebars from 'handlebars';

import Dots from './Dots.js';
import ImageSelector from './ImageSelector.js';
import Slider from './Slider.js';

(function createDomElements(){
  const root = document.getElementById('image-slider');
  root.innerHTML = template();
})();
const mySlider = new Slider();
const myDots = new Dots(mySlider);

(async function getImages(){
  const images = await fetch('src/images.json', {method: 'GET'})
    .then(res => res.json());
  const myImageSelector = new ImageSelector(mySlider, images);
})();
