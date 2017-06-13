import * as EntityClass from './aframe-entity';

function Hotlink(hotlinksData) {
  this.hotlink = EntityClass.createEntity('hotlink');
  this.hotlinksData = hotlinksData;
  this.hotlinkEntities = [];
  this.id;
  this.isHotlinkVisible = false;
}

Hotlink.prototype.getHotlink = function() {
  return this.hotlink;
};

Hotlink.prototype.hideLink = function() {
  if(this.isHotlinkVisible) {
    this.hotlink.parentNode.removeChild(this.hotlink);
    this.isHotlinkVisible = false;
  }
};

Hotlink.prototype.showLink = function(scene, force = false) {
  if(!this.isHotlinkVisible) {
    if(force){
      this.updateLink(`${this.id}`, force);
    }
    scene.appendChild(this.hotlink);
    this.isHotlinkVisible = true;
  }
};

Hotlink.prototype.updateLink = function(src, force = false) {
  if(force){

  }else{
    if(this.id && this.id === src){
      return;
    }
    this.id = src;
  }

  this.hotlinkEntities.forEach((hotlinkEntity, key) => {
    hotlinkEntity.parentNode.removeChild(hotlinkEntity);
  });
  this.hotlinkEntities = [];

  this.hotlinksData.filter(function (links) {
    return (`#${links.id}` === src);
  }).forEach((links, key) => {
    links.links.forEach((value, key) => {
      if('text' === value['type']){
        let textEntity = EntityClass.createText(value['content'], value['position'].x , value['position'].y, value['position'].z);
        textEntity.setAttribute('set-image', `on: click; target: ${value.target}; src: ${value.src}`);
        this.hotlink.appendChild(textEntity);
        this.hotlinkEntities.push(textEntity);
      }else if ('icon' === value['type']) {
        let iconEntity = EntityClass.createLink(`${value['content']}`, value['position'].x , value['position'].y, value['position'].z);
        iconEntity.setAttribute('set-image', `on: click; target: ${value.target}; src: ${value.src}`);
        this.hotlink.appendChild(iconEntity);
        this.hotlinkEntities.push(iconEntity);
      }
    });
  });
};

export { Hotlink };
