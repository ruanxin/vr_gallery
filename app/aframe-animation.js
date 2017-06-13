function removeAnimation(aParent) {
  let animations = aParent.querySelectorAll('a-animation');
  animations.forEach((value, key) => {
    aParent.removeChild(value);
  });
}

function createAnimation(attribute, from, to, dur = '3000', targetEvent = 'targetEvent') {
  var aAnimation = document.createElement('a-animation');
  aAnimation.setAttribute('attribute', attribute);
  aAnimation.setAttribute('from', from);
  aAnimation.setAttribute('to', to);
  aAnimation.setAttribute('dur', dur);
  aAnimation.setAttribute('target', targetEvent);
  return aAnimation;
}

function galleryBackgroundAnimation(aParent) {
  var aAnimation = createAnimation('height', '0', '6');
  aParent.appendChild(aAnimation);
}

function ungalleryBackgroundAnimation(aParent) {
  var aAnimation = createAnimation('height', '6', '0');
  aParent.appendChild(aAnimation);
}

function alphaSphereAnimation(aParent, thetaStart, thetaLength, targetEvent) {
  var aAnimation = createAnimation('theta-start', '180', thetaStart, '3000', targetEvent);
  aParent.appendChild(aAnimation);
}

function unalphaSphereAnimation(aParent, thetaStart, thetaLength, targetEvent) {
  var aAnimation = createAnimation('theta-start', thetaStart, '180', '3000', targetEvent);
  aParent.appendChild(aAnimation);
}

function galleryImageAnimation(aParent) {
  var aAnimation = createAnimation('opacity', '0', '1', '500');
  aParent.appendChild(aAnimation);
}

function ungalleryImageAnimation(aParent) {
  var aAnimation = createAnimation('opacity', '1', '0', '1000');
  aParent.appendChild(aAnimation);
}

export { removeAnimation, galleryBackgroundAnimation, ungalleryBackgroundAnimation, alphaSphereAnimation, unalphaSphereAnimation, galleryImageAnimation, ungalleryImageAnimation };
