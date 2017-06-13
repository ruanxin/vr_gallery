function Panel(exitImg) {
  this.exitPanel = document.createElement('div');
  this.exitPanel.setAttribute('style', 'position: absolute; top: 5%; width: 100%; height: 60px;');
  let exitButton = document.createElement('img');
  exitButton.setAttribute('src', exitImg);
  exitButton.setAttribute('style', 'position: relative; display: block; margin: auto; height: 60px; z-index: 9999999;');
  exitButton.addEventListener("click", function(){
    console.log('Exit panel event');
    document.dispatchEvent(new CustomEvent('exitVR'));
  });
  this.exitPanel.appendChild(exitButton);
}

Panel.prototype.activatePanel = function(scene) {
  scene.appendChild(this.exitPanel);
};

Panel.prototype.deactivatePanel = function() {
  if(this.exitPanel && this.exitPanel.parentNode) {
    this.exitPanel.parentNode.removeChild(this.exitPanel);
  }
};

export { Panel };
