/**
 * @module Async Load
 * @description Load JS modules
 *
 * @author Xin Ruan <ruan.xin@me.com>
 * @license Apache-2.0
 */

(function(){
  // var aframeLibs = ['https://aframe.io/releases/0.4.0/aframe.min.js',
  //                   'https://npmcdn.com/aframe-animation-component@3.0.1',
  //                   'https://npmcdn.com/aframe-event-set-component@3.0.1',
  //                   'https://npmcdn.com/aframe-layout-component@3.0.1',
  //                   'https://npmcdn.com/aframe-template-component@3.1.1'];
  // var extensions = ['components/set-image.js'];

  function loadScript(url){
    // var scrs = document.getElementsByTagName('script');
    // var last = scrs[scrs.length - 1];
    // var scr = document.createElement('script');
    // scr.src = url;
    // // scr.async = true;
    // last.parentNode.insertBefore(scr, last);
    var scr = document.createElement('script');
    scr.src = url;
    var head = document.querySelector('head');
    head.appendChild(scr)
  }

  function init(){
    // // load aframe libs
    // aframeLibs.forEach(function(lib) {
    //   loadScript(lib);
    // });
    // // load extensions
    // extensions.forEach(function(lib) {
    //   loadScript(lib);
    // });
  }

  window.addEventListener("load", function(){
    console.log("load js libs.");
    init();
  });

})();
