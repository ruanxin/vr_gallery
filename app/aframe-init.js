/**
 * @module Aframe Init
 * @description Init aframe components
 *
 * @author Xin Ruan <ruan.xin@me.com>
 * @license Apache-2.0
 */

import 'aframe';
// import 'aframe-template-component';
import 'aframe-animation-component';
import 'aframe-event-set-component';
// import 'aframe-layout-component';
import 'aframe-text-geometry-component';

import * as EntityClass from './aframe-entity';
import * as GalleryClass from './aframe-gallery';
import * as HotlinkClass from './aframe-hotlink';
import * as PreviewClass from './aframe-preview';
import * as PanelClass from './aframe-panel';
import * as BacklinkClass from './aframe-backlink';

(function(){
  let _scene;
  let _assets;
  let _gallery;
  let _hotlink;
  let _panel;
  let _backlink;
  let _camera;

  let _isInit = false;
  let _isLoaded = false;
  let _skyRadius = 10;

  let _initListener;

  let DataClass = window.DataClass;

  window.addEventListener("load", function(){
    console.log("Load js libs.");
    PreviewClass.loadPreview(DataClass.previewData.img, DataClass.previewData.icon);
  });

  _initListener = document.addEventListener("click", init);
  // document.removeEventListener('click', _initListener, false);

  document.addEventListener("exitVR", function(){
    console.log('Exit vr view');
    let scene = getScene();
    scene.exitVR();
  });

  document.addEventListener("enter-vr", function(){
    getPanel().activatePanel(getScene());
  });

  document.addEventListener("exit-vr", function(){
    console.log('Exit vr view');
    getPanel().deactivatePanel();
  });

  document.addEventListener("activateGallery", function(){
    console.log('Load gallery event');
    getHotlink().hideLink();
    getBacklink().hideLink();
    getGallery().activateGallery(getScene());
  });

  document.addEventListener("deactivateGallery", function(){
    console.log('Unload gallery event');
    getGallery().deactivateGallery();
    getHotlink().showLink(getScene(), true);
    getBacklink().showLink(getScene(), true);
  });

  document.addEventListener("updateGallery", function(event){
    console.log('Update gallery event');
    getGallery().updateGallery(event.detail.increment);
  });

  document.addEventListener("refreshSky", function(event) {
    console.log('Refresh sky event:', event.detail.src);
    // _camera.getAttribute('position');
    let rotation = _camera.getAttribute('rotation');
    getHotlink().updateLink(event.detail.src);
    getBacklink().updateLink(event.detail.src, rotation);
  });

  function init(){
    if(!_isInit){
      PreviewClass.unloadPreview();
      initScene();
      _isInit = true;
    }
  }

  function initScene() {
    if(!_isLoaded){
      let scene = getScene();
      let assets = getAssets();

      loadFontAsset(assets, DataClass.fontData);
      loadImageAsset(assets, DataClass.imageData, '');
      loadImageAsset(assets, DataClass.imagePreviewData, '-thumb');
      loadImageAsset(assets, DataClass.resourceImageData, '');

      loadSky(scene, DataClass.skyData);
      loadCamera(scene, DataClass.cameraData);
      loadGalleryTrigger(scene);

      getHotlink().updateLink(DataClass.skyData['src']);
      getHotlink().showLink(scene);

      getBacklink().updateLink(DataClass.skyData['src']);
      getBacklink().showLink(scene);

      getPanel();

      _isLoaded = true;
    }
  }

  function getScene() {
    if(!_scene){
      _scene = document.createElement('a-scene');
      let body = document.querySelector('body');
      body.appendChild(_scene);
    }
    return _scene;
  }

  function getAssets() {
    let scene = getScene();
    if(!_assets){
      _assets = document.createElement('a-assets');
      scene.appendChild(_assets);
    }
    return _assets;
  }

  function getGallery() {
    if(!_gallery){
      _gallery = new GalleryClass.Gallery(DataClass.imagePreviewData, DataClass.skyData);
    }
    return _gallery;
  }

  function getHotlink() {
    if(!_hotlink){
      _hotlink = new HotlinkClass.Hotlink(DataClass.linkPointData);
    }
    return _hotlink;
  }

  function getBacklink() {
    if(!_backlink){
      _backlink = new BacklinkClass.Backlink(DataClass.backLinksData);
    }
    return _backlink;
  }

  function getPanel() {
    if(!_panel){
      _panel = new PanelClass.Panel(DataClass.exitData.icon);
    }
    return _panel;
  }

  function loadFontAsset(aAssets, fontAssets){
    fontAssets.forEach(asset => {
      let aAssetItem = document.createElement('a-asset-item');
      aAssetItem.setAttribute('id', asset['id']);
      aAssetItem.setAttribute('src', asset['src']);
      aAssets.appendChild(aAssetItem);
    });
  }

  function loadImageAsset(aAssets, imageAssets, suffix){
    imageAssets.forEach(asset => {
      let img = EntityClass.createImg(`${asset['id']}${suffix}`, asset['src']);
      aAssets.appendChild(img);
    });
  }

  function loadSky(aScene, sky){
    let aSky = EntityClass.createSky(sky['id'], sky['src'], _skyRadius);
    aScene.appendChild(aSky);
  }

  function loadGalleryTrigger(aScene) {
    let aCircle = EntityClass.createCircle('logo', 'activateGallery');
    aScene.appendChild(aCircle);
  }

  function loadCamera(aScene, camera){
    let aCamera = EntityClass.createCamera(camera['id']);
    aScene.appendChild(aCamera);
    _camera = aCamera;
  }
})();
