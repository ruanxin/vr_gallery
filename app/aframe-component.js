/**
 * @module Aframe Init
 * @description Init aframe components
 *
 * @author Xin Ruan <ruan.xin@me.com>
 * @license Apache-2.0
 */
import 'aframe';
// import 'aframe-template-component';
// import 'aframe-event-set-component';

/**
 * Component that listens to an event, trigger document event
 */
AFRAME.registerComponent('gallery-trigger', {
  schema: {
    on: {type: 'string'},
    target_message: {type: 'string'}
  },

  init: function() {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      console.log('Active gallery');
      document.dispatchEvent(new Event(data.target_message));
    });
  },
});

/**
 * Component that trigger gallery update event
 */
AFRAME.registerComponent('gallery-controller', {
  schema: {
    on: {type: 'string'},
    target_message: {type: 'string'},
    increment: {type: 'number', default: 1}
  },

  init: function() {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      console.log('Update gallery');
      document.dispatchEvent(new CustomEvent(data.target_message, { 'detail': { 'increment' : data.increment } }));
    });
  }
});

/**
 * Component that listens to an event, redirect to another url
 */
AFRAME.registerComponent('set-link-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    console.log('init redirect component');

    el.addEventListener(data.on, function () {
      // redirect to target
      window.location.href = data.target;
    });
  },

});

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', data.src);
        // Dispatch event
        document.dispatchEvent(new CustomEvent('deactivateGallery'));
        document.dispatchEvent(new CustomEvent('refreshSky', { 'detail': { 'src' : data.src } }));
      }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});
