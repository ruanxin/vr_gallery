import * as EntityClass from './aframe-entity';
import * as AnimationClass from './aframe-animation';

let _maxImages = 12;

let _galleryThetaLength = 360 / _maxImages;
let _galleryRadius = 9.8;
let _galleryImageRadius = 9;
let _galleryHeight = 4;
let _galleryImageHeight = 5;

let _gallerySphereThetaStart = 75;
let _gallerySphereThetaLength = 105;
let _galleryDeSphereThetaLength = 180 - _gallerySphereThetaLength;

function Gallery(imageData, skyData) {
  this.gallery = EntityClass.createEntity('gallery');

  this.galleryImages = [];
  this.galleryControllers = [];
  // this.galleryBackground;
  this.galleryAlphaSphere = null;
  this.galleryDeSphere = null;

  this.imageLength = imageData.length;
  this.imageStart = 0;
  this.isGalleryActive = false;
  this.isAnimation = false;

  init(this, imageData, skyData);

  function init(galleryInstance, imageData, skyData) {
    galleryInstance.galleryAlphaSphere = loadAlphaSphere(galleryInstance.gallery);
    galleryInstance.galleryDeSphere = loadDeSphere(galleryInstance.gallery);
    // galleryInstance.galleryBackground = loadGalleryBackground(galleryInstance.gallery);
    galleryInstance.galleryImages = loadCurveGallery(galleryInstance.gallery, imageData, skyData);
    galleryInstance.galleryControllers = loadCurverGalleryController(galleryInstance.gallery);

    galleryInstance.galleryAlphaSphere.addEventListener('animationend', function (event) {
        let target = event.target.getAttribute('target');
        if('clear' === target) {
          galleryInstance.clear();
          // galleryInstance.unloadImagesAnimation();
        }else if ('loadImagesAnimation' === target) {
          galleryInstance.loadImagesAnimation();
        }
    });
  }

  function loadAlphaSphere(aParent) {
    let galleryAlphaSphere = EntityClass.createSphere(_galleryRadius, '0.6', _gallerySphereThetaStart, _gallerySphereThetaLength);
    // AnimationClass.alphaSphereAnimation(galleryAlphaSphere, _gallerySphereThetaStart, _gallerySphereThetaLength);
    aParent.appendChild(galleryAlphaSphere);
    return galleryAlphaSphere;
  }

  function loadDeSphere(aParent) {
    let galleryDeSphere = EntityClass.createSphere(_galleryRadius, '0', '0', _galleryDeSphereThetaLength);
    galleryDeSphere.setAttribute('class', 'link');
    galleryDeSphere.setAttribute('gallery-trigger', 'on: click; target_message: deactivateGallery;');
    aParent.appendChild(galleryDeSphere);
    return galleryDeSphere;
  }

  function loadGalleryBackground(aParent) {
    let galleryBackground = EntityClass.createCylinder(_galleryRadius);
    aParent.appendChild(galleryBackground);
    return galleryBackground;
  }

  function loadCurveGallery(aParent, assets, sky) {
    let galleryImages = [];

    if(assets.length < _maxImages - 1) {
      let repeat = Math.ceil((_maxImages - 1)/assets.length);
      let newAssets = [];
      for(var i = 0; i < repeat; i++){
        newAssets.push(...assets);
      }
      assets = newAssets.slice(0, _maxImages - 1);
    }

    assets.forEach((value, key) => {
      // let thumbEntity = EntityClass.createCurveThumbEntityWithTitle(value['id'], sky['id'], _galleryImageHeight, _galleryImageRadius, _galleryThetaLength, value['text']);
      let thumbEntity = EntityClass.createCurveThumbEntity(value['id'], sky['id'], _galleryImageHeight, _galleryImageRadius, _galleryThetaLength);
      thumbEntity.setAttribute('rotation', `0 ${_galleryThetaLength * key} 0`);
      thumbEntity.setAttribute('visible', 'false');
      aParent.appendChild(thumbEntity);
      galleryImages.push(thumbEntity);
    });

    return galleryImages;
  }

  function loadCurverGalleryController(aParent) {
    let galleryControllers = [];

    let prevEntity = EntityClass.createCurveEntity('g-prev', _galleryImageHeight, _galleryImageRadius, _galleryThetaLength);
    prevEntity.setAttribute('gallery-controller', 'on: click; target_message: updateGallery; increment: -1');
    prevEntity.setAttribute('rotation', '0 0 0');
    prevEntity.setAttribute('visible', 'true');

    let nextEntity = EntityClass.createCurveEntity('g-next', _galleryImageHeight, _galleryImageRadius, _galleryThetaLength);
    nextEntity.setAttribute('gallery-controller', 'on: click; target_message: updateGallery; increment: 1');
    nextEntity.setAttribute('rotation', '0 300 0');
    nextEntity.setAttribute('visible', 'true');

    let exitEntity = EntityClass.createCurveEntity('g-exit', _galleryImageHeight, _galleryImageRadius, _galleryThetaLength);
    exitEntity.setAttribute('set-link-image', 'on: click; target: exit.html;');
    exitEntity.setAttribute('rotation', '0 330 0');
    exitEntity.setAttribute('visible', 'true');

    aParent.appendChild(prevEntity);
    aParent.appendChild(nextEntity);
    aParent.appendChild(exitEntity);

    galleryControllers.push(prevEntity);
    galleryControllers.push(nextEntity);
    galleryControllers.push(exitEntity);

    return galleryControllers;
  }
}

Gallery.prototype.clearAnimation = function() {
  AnimationClass.removeAnimation(this.galleryAlphaSphere);
};

Gallery.prototype.clear = function() {
  this.gallery.parentNode.removeChild(this.gallery);
  this.isGalleryActive = false;
  this.isAnimation = false;
};

Gallery.prototype.loadImagesAnimation = function() {
  this.galleryImages.forEach((value, key) => {
    AnimationClass.galleryImageAnimation(value);
  });
  this.galleryControllers.forEach((value, key) => {
    AnimationClass.galleryImageAnimation(value);
  });
};

Gallery.prototype.unloadImageAnimation = function() {
  this.galleryImages.forEach((value, key) => {
    AnimationClass.ungalleryImageAnimation(value);
  });
  this.galleryControllers.forEach((value, key) => {
    AnimationClass.ungalleryImageAnimation(value);
  });
};

Gallery.prototype.refreshAnimation = function(type) {
  if('load' === type){
    AnimationClass.alphaSphereAnimation(this.galleryAlphaSphere, _gallerySphereThetaStart, _gallerySphereThetaLength, 'loadImagesAnimation');
  }else{
    AnimationClass.unalphaSphereAnimation(this.galleryAlphaSphere, _gallerySphereThetaStart, _gallerySphereThetaLength, 'clear');
    this.unloadImageAnimation();
  }
};

Gallery.prototype.refreshEvent = function() {
  this.galleryImages.forEach((value, key) => {
    EntityClass.refreshCurveEvent(value, _galleryImageRadius);
  });
};

Gallery.prototype.activateGallery = function(scene) {
  if(!this.isGalleryActive){
    this.clearAnimation();
    this.hideGalleryController();
    this.updateGalleryController();
    scene.appendChild(this.gallery);
    this.refreshAnimation('load');
    this.refreshEvent();
    this.isGalleryActive = true;
  }
};

Gallery.prototype.deactivateGallery = function() {
  if(this.isGalleryActive && !this.isAnimation){
    this.isAnimation = true;
    this.refreshAnimation('unload');
    // Clear instance
  }
};

Gallery.prototype.updateGallery = function(increment) {
  if(this.isGalleryActive) {
    let newImageStart = this.imageStart + increment;
    if(newImageStart >= this.imageLength - 9){
      newImageStart = this.imageLength - 9;
    }
    if(newImageStart < 0){
      newImageStart = 0;
    }
    this.imageStart = newImageStart;
    this.updateGalleryController();
  }
};

Gallery.prototype.hideGalleryController = function() {
  this.galleryControllers.forEach((value, key) => {
    value.setAttribute('opacity', '0');
  });
  this.galleryImages.forEach((value) => {
    value.setAttribute('opacity', '0');
  });
};

Gallery.prototype.updateGalleryController = function(){
  console.log('Update gallery');
  console.log('Start: ', this.imageStart);
  let imageStart = this.imageStart;
  let displays = _maxImages - 1;
  let begin = 0;
  if(imageStart > 0) {
    this.galleryControllers[0].setAttribute('visible', 'true');
    displays = displays - 1;
    begin = 1;
  }else{
    this.galleryControllers[0].setAttribute('visible', 'false');
  }
  if(this.imageLength - imageStart > _maxImages - 1 - begin) {
    this.galleryControllers[1].setAttribute('visible', 'true');
    displays = displays - 1;
  } else {
    this.galleryControllers[1].setAttribute('visible', 'false');
  }
  console.log('Displays: ', displays);
  this.galleryImages.forEach((value, key) => {
    if(key >= imageStart && key - imageStart < displays){
      value.setAttribute('rotation', `0 ${(begin + key - imageStart) * _galleryThetaLength} 0`);
      value.setAttribute('visible', 'true');
    }else{
      value.setAttribute('visible', 'false');
    }
  });
};

export { Gallery };
