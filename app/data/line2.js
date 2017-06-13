import * as DataClass from './db';

let line2Images = [
  {id: 'img0235', src: 'images/line2/360_0235_Stitch_XHC.jpg'},
  {id: 'img0249', src: 'images/line2/360_0249_Stitch_XHC.jpg'},
  {id: 'img0262', src: 'images/line2/360_0262_Stitch_XHC.jpg'},
  {id: 'img0267', src: 'images/line2/360_0267_Stitch_XHC.jpg'},
  {id: 'img0291', src: 'images/line2/360_0291_Stitch_XHC.jpg'},
  {id: 'img0300', src: 'images/line2/360_0300_Stitch_XHC.jpg'},
  {id: 'img0308', src: 'images/line2/360_0308_Stitch_XHC.jpg'},
  {id: 'img0313', src: 'images/line2/360_0313_Stitch_XHC.jpg'},
  {id: 'img0319', src: 'images/line2/360_0319_Stitch_XHC.jpg'},
  {id: 'img0321', src: 'images/line2/360_0321_Stitch_XHC.jpg'},
  {id: 'img0333', src: 'images/line2/360_0333_Stitch_XHC.jpg'},
  {id: 'img0339', src: 'images/line2/360_0339_Stitch_XHC.jpg'},
  {id: 'img0348', src: 'images/line2/360_0348_Stitch_XHC.jpg'},
  {id: 'img0355', src: 'images/line2/360_0355_Stitch_XHC.jpg'},
  {id: 'img0360', src: 'images/line2/360_0360_Stitch_XHC.jpg'},
  {id: 'img0365', src: 'images/line2/360_0365_Stitch_XHC.jpg'},
  {id: 'img0374', src: 'images/line2/360_0374_Stitch_XHC.jpg'},
  {id: 'img0389', src: 'images/line2/360_0389_Stitch_XHC.jpg'},
  {id: 'img0392', src: 'images/line2/360_0392_Stitch_XHC.jpg'},
  {id: 'img0399', src: 'images/line2/360_0399_Stitch_XHC.jpg'},
  {id: 'img0406', src: 'images/line2/360_0406_Stitch_XHC.jpg'},
  {id: 'img0407', src: 'images/line2/360_0407_Stitch_XHC.jpg'},
  {id: 'img0408', src: 'images/line2/360_0408_Stitch_XHC.jpg'},
  {id: 'img0422', src: 'images/line2/360_0422_Stitch_XHC.jpg'},
  {id: 'img0430', src: 'images/line2/360_0430_Stitch_XHC.jpg'},
  {id: 'img0434', src: 'images/line2/360_0434_Stitch_XHC.jpg'},
  {id: 'img0439', src: 'images/line2/360_0439_Stitch_XHC.jpg'},
  {id: 'img0447', src: 'images/line2/360_0447_Stitch_XHC.jpg'},
  {id: 'img0449', src: 'images/line2/360_0449_Stitch_XHC.jpg'},
  {id: 'img0453', src: 'images/line2/360_0453_Stitch_XHC.jpg'},
  {id: 'img0458', src: 'images/line2/360_0458_Stitch_XHC.jpg'},
  {id: 'img0471', src: 'images/line2/360_0471_Stitch_XHC.jpg'},
  {id: 'img0482', src: 'images/line2/360_0482_Stitch_XHC.jpg'},
  {id: 'img0495', src: 'images/line2/360_0495_Stitch_XHC.jpg'},
  {id: 'img0500', src: 'images/line2/360_0500_Stitch_XHC.jpg'},
  {id: 'img0505', src: 'images/line2/360_0505_Stitch_XHC.jpg'},
  {id: 'img0519', src: 'images/line2/360_0519_Stitch_XHC.jpg'},
  {id: 'img0524', src: 'images/line2/360_0524_Stitch_XHC.jpg'},
  {id: 'img0532', src: 'images/line2/360_0532_Stitch_XHC.jpg'},
  {id: 'img0535', src: 'images/line2/360_0535_Stitch_XHC.jpg'},
];

let line2Previews = [
  {id: 'img0235', src: 'images/line2/preview/360_0235_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0300', src: 'images/line2/preview/360_0300_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0333', src: 'images/line2/preview/360_0333_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0339', src: 'images/line2/preview/360_0339_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0365', src: 'images/line2/preview/360_0365_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0389', src: 'images/line2/preview/360_0389_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0407', src: 'images/line2/preview/360_0407_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0422', src: 'images/line2/preview/360_0422_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0434', src: 'images/line2/preview/360_0434_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0439', src: 'images/line2/preview/360_0439_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0453', src: 'images/line2/preview/360_0453_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0471', src: 'images/line2/preview/360_0471_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0482', src: 'images/line2/preview/360_0482_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0500', src: 'images/line2/preview/360_0500_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0519', src: 'images/line2/preview/360_0519_Stitch_XHC.jpg', text: 'demo'},
  {id: 'img0535', src: 'images/line2/preview/360_0535_Stitch_XHC.jpg', text: 'demo'},
];

let back2Links = [
  {id: 'img0249', back: '#img0235', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0262', back: '#img0235', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0267', back: '#img0235', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0291', back: '#img0300', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0308', back: '#img0300', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0313', back: '#img0300', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0319', back: '#img0300', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0321', back: '#img0333', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0348', back: '#img0365', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0355', back: '#img0365', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0360', back: '#img0365', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0374', back: '#img0365', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0392', back: '#img0389', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0399', back: '#img0389', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0406', back: '#img0407', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0408', back: '#img0407', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0430', back: '#img0434', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0447', back: '#img0439', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0449', back: '#img0453', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0458', back: '#img0453', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0495', back: '#img0482', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0505', back: '#img0500', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0524', back: '#img0519', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0532', back: '#img0519', content: 'back', target: `#${DataClass.skyData.id}`},
];

let line2Links = [
  {
    id: 'img0235',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0249', position: {x: '7.3', y: '3.7', z: '-3.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0262', position: {x: '6.3', y: '2.2', z: '7'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0267', position: {x: '-8.6', y: '2.6', z: '0.7'}},
    ]
  },
  {
    id: 'img0300',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0291', position: {x: '7.3', y: '1.8', z: '3.5'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0308', position: {x: '-8.9', y: '3', z: '0'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0313', position: {x: '-5.2', y: '3.5', z: '-6.3'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0319', position: {x: '8.4', y: '1.6', z: '-2.2'}},
    ]
  },
  {
    id: 'img0333',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0321', position: {x: '5.9', y: '2.4', z: '-6.9'}},
    ]
  },
  {
    id: 'img0365',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0348', position: {x: '7.0', y: '4.5', z: '-1.9'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0355', position: {x: '-5.8', y: '4.2', z: '6.0'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0360', position: {x: '7.8', y: '4.2', z: '3.6'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0374', position: {x: '-4.8', y: '6.4', z: '-1.2'}},
    ]
  },
  {
    id: 'img0389',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0392', position: {x: '-8.4', y: '2.8', z: '1.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0399', position: {x: '-8.4', y: '2.8', z: '-3.8'}},
    ]
  },
  {
    id: 'img0407',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0406', position: {x: '6.9', y: '6.6', z: '0.5'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0408', position: {x: '4.7', y: '6.2', z: '-5.2'}},
    ]
  },
  {
    id: 'img0434',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0430', position: {x: '7.8', y: '5.3', z: '-1.4'}},
    ]
  },
  {
    id: 'img0439',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0447', position: {x: '-5.7', y: '0.8', z: '5.4'}},
    ]
  },
  {
    id: 'img0453',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0449', position: {x: '1.5', y: '2.7', z: '8.1'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0458', position: {x: '-0.5', y: '3.8', z: '-7.7'}},
    ]
  },
  {
    id: 'img0482',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0495', position: {x: '-4.3', y: '3.9', z: '7.7'}},
    ]
  },
  {
    id: 'img0500',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0505', position: {x: '-9.2', y: '0', z: '1.2'}},
    ]
  },
  {
    id: 'img0519',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0524', position: {x: '-2.5', y: '3.8', z: '-8.4'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0532', position: {x: '-5.6', y: '6.0', z: '-4.3'}},
    ]
  },
];

let skyData = Object.assign({}, DataClass.skyData, {src: '#img0235'});
let previewData = Object.assign({}, DataClass.previewData, {img: 'images/line2/preview/360_0235_Stitch_XHC.jpg'});
let imageData = line2Images;
let imagePreviewData = line2Previews;
let linkPointData = line2Links;
let backLinksData = back2Links;

let data = {
  resourceImageData: DataClass.resourceImageData,
  fontData: DataClass.fontData,
  cameraData: DataClass.cameraData,
  skyData: skyData,
  previewData: previewData,
  exitData: DataClass.exitData,
  imageData: imageData,
  imagePreviewData: imagePreviewData,
  linkPointData: linkPointData,
  backLinksData: backLinksData,
};

window.DataClass = data;

export { data };
