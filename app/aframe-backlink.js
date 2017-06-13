import * as EntityClass from './aframe-entity';
import * as MathClass from './aframe-math';

function Backlink(backlinkData) {
  this.backlink = EntityClass.createEntity('backlink');
  this.backlinkData = backlinkData;
  this.backlinkEntities = [];
  this.isBacklinkVisible = false;
}

Backlink.prototype.getBacklink = function() {
  return this.backlink;
};

Backlink.prototype.showLink = function(scene, force = false) {
  if(!this.isBacklinkVisible) {
    if(force){
      this.updateLink(`${this.id}`, force);
    }
    scene.appendChild(this.backlink);
    this.isBacklinkVisible = true;
  }
};

Backlink.prototype.hideLink = function() {
  if(this.isBacklinkVisible) {
    this.backlink.parentNode.removeChild(this.backlink);
    this.isBacklinkVisible = false;
  }
};

Backlink.prototype.updateLink = function(src, rotation = {x: 0, y: 0, z: 0}, force = false) {
  if(force){

  }else{
    if(this.id && this.id === src){
      return;
    }
    this.id = src;
  }

  console.log("rotation: ", rotation);
  let postion = MathClass.rotationToPostion(rotation.y);
  console.log("postion: ", postion);

  this.backlinkEntities.forEach((backlinkEntity, key) => {
    backlinkEntity.parentNode.removeChild(backlinkEntity);
  });
  this.backlinkEntities = [];

  if(this.backlinkData){
    this.backlinkData.filter(function (link) {
      return (`#${link.id}` === src);
    }).forEach((link, key) => {
      let iconEntity = EntityClass.createLink(`${link.content}`, 7 * postion.y, 0, 7 * postion.x);
      iconEntity.setAttribute('set-image', `on: click; target: ${link.target}; src: ${link.back}`);
      this.backlink.appendChild(iconEntity);
      this.backlinkEntities.push(iconEntity);
    });
  }
};

export { Backlink };
