import * as MathClass from './aframe-math';

let _yRotateFix = 90;
let _linkWidth = 3;
let _halfLinkWidth = 1;
let _circleRadius = 4.3;
let _textColor = '#FFF';
let _lineCount = 10;
let _backgroudColor = '#000';
let _opacity = '0.6';
let _defaultFont = '#defaultFont';

function createImg(id, src) {
  let img = document.createElement('img');
  img.setAttribute('id', id);
  img.setAttribute('src', src);
  img.setAttribute('crossorigin', 'anonymous');
  return img;
}

function createEntity(id) {
  let aEntity = document.createElement('a-entity');
  aEntity.setAttribute('id', id);
  return aEntity;
}

function createImageEntity(source, height) {
  let aImage = document.createElement('a-image');
  aImage.setAttribute('class', 'link');
  aImage.setAttribute('height', height);
  aImage.setAttribute('width', height);
  aImage.setAttribute('src', `#${source}`);
  return aImage;
}

function createCurveEntity(source, height, radius, thetaLength){
  let curveThumbEntity = document.createElement('a-curvedimage');
  curveThumbEntity.setAttribute('class', 'link');
  curveThumbEntity.setAttribute('height', height);
  curveThumbEntity.setAttribute('radius', radius);
  curveThumbEntity.setAttribute('theta-length', thetaLength);
  curveThumbEntity.setAttribute('src', `#${source}`);
  curveThumbEntity.setAttribute('material', 'shader: flat;');
  refreshCurveEvent(curveThumbEntity, radius);
  return curveThumbEntity;
}

function refreshCurveEvent(entity, radius) {
  entity.setAttribute('event-set__1', `_event: mousedown; scale: 1 1 1; radius: ${radius}`);
  entity.setAttribute('event-set__2', `_event: mouseup; scale: 1.2 1.2 1; radius: ${radius - 0.5}`);
  entity.setAttribute('event-set__3', `_event: mouseenter; scale: 1.2 1.2 1; radius: ${radius - 0.5}`);
  entity.setAttribute('event-set__4', `_event: mouseleave; scale: 1 1 1; radius: ${radius}`);
}

function createCurveThumbEntity(source, target, height, radius, thetaLength){
  let curveThumbEntity = createCurveEntity(source + '-thumb', height, radius, thetaLength);
  curveThumbEntity.setAttribute('set-image', `on: click; target: #${target}; src: #${source};`);
  return curveThumbEntity;
}

function createCurveThumbEntityWithTitle(source, target, height, radius, thetaLength, title){
  let curveThumbEntity = createCurveThumbEntity(source, target, height, radius, thetaLength);
  // let aText = createTextEntity(title);
  // aText.setAttribute('position', '4 -3 7');
  let aText = createTextGeometryEntity(title, '4 -3 7');
  aText.setAttribute('rotation', '0 -165 0');

  curveThumbEntity.appendChild(aText);
  return curveThumbEntity;
}

function createPlanePlatformEntity(height){
  let planeEntity = document.createElement('a-entity');
  planeEntity.setAttribute('class', 'link');
  planeEntity.setAttribute('geometry', `primitive: plane; height: ${height}; width: ${height};`);
  planeEntity.setAttribute('event-set__1', '_event: mousedown; scale: 1 1 1');
  planeEntity.setAttribute('event-set__2', '_event: mouseup; scale: 1.2 1.2 1');
  planeEntity.setAttribute('event-set__3', '_event: mouseenter; scale: 1.2 1.2 1');
  planeEntity.setAttribute('event-set__4', '_event: mouseleave; scale: 1 1 1');
  // planeEntity.setAttribute('set-image', `on: click; target: #TODO; src: #${source}`);
  return planeEntity;
}

function createAPlaneEntity(height){
  let planeEntity = document.createElement('a-entity');
  planeEntity.setAttribute('class', 'link');
  planeEntity.setAttribute('height', height);
  planeEntity.setAttribute('width', height);
  planeEntity.setAttribute('event-set__1', '_event: mousedown; scale: 1 1 1');
  planeEntity.setAttribute('event-set__2', '_event: mouseup; scale: 1.2 1.2 1');
  planeEntity.setAttribute('event-set__3', '_event: mouseenter; scale: 1.2 1.2 1');
  planeEntity.setAttribute('event-set__4', '_event: mouseleave; scale: 1 1 1');
  return planeEntity;
}

function createPlaneEntity(source, height){
  let planeEntity = createPlanePlatformEntity(height);
  planeEntity.setAttribute('material', `shader: flat; src: #${source}`);
  return planeEntity;
}

function createThumbEntity(source, target){
  let thumbEntity = createPlaneEntity(`${source}-thumb`, '4');
  thumbEntity.setAttribute('set-image', `on: click; target: #${target}; src: #${source}`);
  return thumbEntity;
}

function createCircle(source, target) {
  let aCircle = document.createElement('a-circle');
  aCircle.setAttribute('class', 'link');
  aCircle.setAttribute('color', '#CCC');
  aCircle.setAttribute('src', `#${source}`);
  aCircle.setAttribute('opacity', '1');
  aCircle.setAttribute('radius', _circleRadius);
  aCircle.setAttribute('position', '0 -7 0');
  aCircle.setAttribute('rotation', `-90 ${_yRotateFix} 0`);
  aCircle.setAttribute('event-set__1', '_event: mousedown; scale: 1 1 1');
  aCircle.setAttribute('event-set__2', '_event: mouseup; scale: 0.9 0.9 1');
  aCircle.setAttribute('event-set__3', '_event: mouseenter; scale: 0.9 0.9 1');
  aCircle.setAttribute('event-set__4', '_event: mouseleave; scale: 1 1 1');
  aCircle.setAttribute('gallery-trigger', `on: click; target_message: ${target};`);
  return aCircle;
}

function createSky(id, src, skyRadius){
  let aSky = document.createElement('a-sky');
  aSky.setAttribute('radius', skyRadius);
  aSky.setAttribute('id', id);
  aSky.setAttribute('src', src);
  return aSky;
}

function createCamera(id){
  let aCamera = document.createElement('a-camera');
  aCamera.setAttribute('rotation', `0 ${_yRotateFix} 0`);
  aCamera.setAttribute('look-controls-enabled', 'true');
  aCamera.setAttribute('wasd-controls-enabled', 'false');

  let aCursor = document.createElement('a-cursor');
  aCursor.setAttribute('id', id);
  aCursor.setAttribute('animation__click', 'property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150');
  aCursor.setAttribute('animation__fusing', 'property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500');
  aCursor.setAttribute('event-set__1', '_event: mouseenter; color: springgreen');
  aCursor.setAttribute('event-set__2', '_event: mouseleave; color: black');
  aCursor.setAttribute('raycaster', 'objects: .link');
  aCamera.appendChild(aCursor);

  return aCamera;
}

function createSphere(radius, opacity, thetaStart, thetaLength){
  let aSphere = document.createElement('a-sphere');
  aSphere.setAttribute('color', _backgroudColor);
  aSphere.setAttribute('side', 'back');
  aSphere.setAttribute('radius', radius);
  aSphere.setAttribute('opacity', opacity);
  aSphere.setAttribute('position', '0 0 0');
  aSphere.setAttribute('theta-start', thetaStart);
  aSphere.setAttribute('theta-length', thetaLength);
  return aSphere;
}

function createCylinder(radius){
  let aCylinder = document.createElement('a-cylinder');
  aCylinder.setAttribute('radius', radius);
  aCylinder.setAttribute('height', '6');
  aCylinder.setAttribute('side', 'back');
  aCylinder.setAttribute('open-ended', 'true');
  aCylinder.setAttribute('color', _backgroudColor);
  aCylinder.setAttribute('opacity', _opacity);
  aCylinder.setAttribute('position', '0 0 0');
  return aCylinder;
}

function createTextEntity(text){
  let aText = document.createElement('a-text');
  aText.setAttribute('wrap-count', _lineCount);
  aText.setAttribute('value', text);
  aText.setAttribute('width', _linkWidth);
  aText.setAttribute('color', _textColor);
  aText.setAttribute('align', 'center');
  return aText;
}

function createTextGeometryEntity(text, position){
  let aText = document.createElement('a-entity');
  aText.setAttribute('text-geometry', `value: ${text}; font: ${_defaultFont}; width: ${_linkWidth};`);
  aText.setAttribute('material', `color: ${_textColor};`);
  aText.setAttribute('position', position);
  return aText;
}

function createText(text, x, y, z){
  let xRotate = Math.atan(y/z) * 180 / Math.PI, yRotate = Math.atan(x/z) * 180 / Math.PI, zRotate = 0;

  let platformEntity = createPlanePlatformEntity(_linkWidth);
  platformEntity.setAttribute('material', `shader: flat; color: ${_backgroudColor}; opacity: ${_opacity};`);
  platformEntity.setAttribute('position', `${x} ${y} ${z}`);
  platformEntity.setAttribute('rotation', `${90 - xRotate} ${-yRotate} ${zRotate}`);

  let aText = createTextEntity(text);
  aText.setAttribute('position', '0 0 0.2');
  // let aText = createTextGeometryEntity(text, '-2 1.2 0');

  platformEntity.appendChild(aText);
  return platformEntity;
}

function createLink(source, x, y, z) {
  // let xRotate = Math.atan(y/z) * 180 / Math.PI, yRotate = Math.atan(x/z) * 180 / Math.PI, zRotate = 0;
  // let xRotate = 0, yRotate = Math.atan(x/z) * 180 / Math.PI, zRotate = 0;
  let xRotate = 0, yRotate = MathClass.positionToAngel(z, x), zRotate = 0;

  // let linkEntity = createPlaneEntity(source, _halfLinkWidth);
  let linkEntity = createImageEntity(source, _halfLinkWidth);
  // linkEntity.setAttribute('material', `shader: flat; color: ${_backgroudColor}; opacity: ${_opacity};`);
  linkEntity.setAttribute('position', `${x} ${y} ${z}`);
  // linkEntity.setAttribute('rotation', `${90 - xRotate} ${-yRotate} ${zRotate}`);
  linkEntity.setAttribute('rotation', `${xRotate} ${yRotate - 180} ${zRotate}`);
  return linkEntity;
}

export {
  createImg,
  createEntity,
  createCurveEntity,
  createCurveThumbEntity,
  createCurveThumbEntityWithTitle,
  createThumbEntity,
  createCircle,
  createSky,
  createCamera,
  createSphere,
  createCylinder,
  createText,
  createLink,
  refreshCurveEvent
};
