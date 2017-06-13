let _preview;

function loadPreview(src, icon) {
  let body = document.querySelector('body');

  _preview = document.createElement('div');
  _preview.setAttribute('id', 'preview-image');
  // _preview.setAttribute('style', 'position: absolute; width: 100%; height: 100vh; left: 0; top: 0;');
  _preview.setAttribute('style', 'position: absolute; width: 100%; height: 100vh; left: 0; top: 0; display: flex; justify-content: center;');

  let _previewIcon = document.createElement('img');
  _previewIcon.setAttribute('src', icon);
  _previewIcon.setAttribute('style', 'position: absolute; display: block; margin: auto; z-index: 10; left: calc(50% - 256px); top: calc(50% - 256px);');
  _preview.appendChild(_previewIcon);

  let _previewImage = document.createElement('img');
  _previewImage.setAttribute('src', src);
  _previewImage.setAttribute('style', 'position: relative; display: block; margin: auto;');
  _preview.appendChild(_previewImage);

  _preview.addEventListener("click", function(){
    unloadPreview();
  });
  body.appendChild(_preview);
}

function unloadPreview() {
  if(_preview && _preview.parentNode) {
    _preview.parentNode.removeChild(_preview);
  }
}

export {loadPreview, unloadPreview};
