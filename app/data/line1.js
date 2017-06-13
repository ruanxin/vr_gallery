import * as DataClass from './db';

let line1Images = [
  {id: 'img0014', src: 'images/line1/360_0014_Stitch_XHC.jpg'},
  {id: 'img0020', src: 'images/line1/360_0020_Stitch_XHC.jpg'},
  {id: 'img0028', src: 'images/line1/360_0028_Stitch_XHC.jpg'},
  {id: 'img0034', src: 'images/line1/360_0034_Stitch_XHC.jpg'},
  {id: 'img0039', src: 'images/line1/360_0039_Stitch_XHC.jpg'},
  {id: 'img0055', src: 'images/line1/360_0055_Stitch_XHC.jpg'},
  {id: 'img0060', src: 'images/line1/360_0060_Stitch_XHC.jpg'},
  {id: 'img0072', src: 'images/line1/360_0072_Stitch_XHC.jpg'},
  {id: 'img0076', src: 'images/line1/360_0076_Stitch_XHC.jpg'},
  {id: 'img0078', src: 'images/line1/360_0078_Stitch_XHC.jpg'},
  {id: 'img0087', src: 'images/line1/360_0087_Stitch_XHC.jpg'},
  {id: 'img0105', src: 'images/line1/360_0105_Stitch_XHC.jpg'},
  {id: 'img0117', src: 'images/line1/360_0117_Stitch_XHC.jpg'},
  {id: 'img0119', src: 'images/line1/360_0119_Stitch_XHC.jpg'},
  {id: 'img0121', src: 'images/line1/360_0121_Stitch_XHC.jpg'},
  {id: 'img0128', src: 'images/line1/360_0128_Stitch_XHC.jpg'},
  {id: 'img0132', src: 'images/line1/360_0132_Stitch_XHC.jpg'},
  {id: 'img0139', src: 'images/line1/360_0139_Stitch_XHC.jpg'},
  {id: 'img0144', src: 'images/line1/360_0144_Stitch_XHC.jpg'},
  {id: 'img0151', src: 'images/line1/360_0151_Stitch_XHC.jpg'},
  {id: 'img0157', src: 'images/line1/360_0157_Stitch_XHC.jpg'},
  {id: 'img0163', src: 'images/line1/360_0163_Stitch_XHC.jpg'},
  {id: 'img0164', src: 'images/line1/360_0164_Stitch_XHC.jpg'},
  {id: 'img0167', src: 'images/line1/360_0167_Stitch_XHC.jpg'},
  {id: 'img0169', src: 'images/line1/360_0169_Stitch_XHC.jpg'},
  {id: 'img0171', src: 'images/line1/360_0171_Stitch_XHC.jpg'},
  {id: 'img0175', src: 'images/line1/360_0175_Stitch_XHC.jpg'},
  {id: 'img0177', src: 'images/line1/360_0177_Stitch_XHC.jpg'},
  {id: 'img0186', src: 'images/line1/360_0186_Stitch_XHC.jpg'},
  {id: 'img0189', src: 'images/line1/360_0189_Stitch_XHC.jpg'},
  {id: 'img0194', src: 'images/line1/360_0194_Stitch_XHC.jpg'},
  {id: 'img0200', src: 'images/line1/360_0200_Stitch_XHC.jpg'},
  {id: 'img0203', src: 'images/line1/360_0203_Stitch_XHC.jpg'},
  {id: 'img0206', src: 'images/line1/360_0206_Stitch_XHC.jpg'},
  {id: 'img0209', src: 'images/line1/360_0209_Stitch_XHC.jpg'},
  {id: 'img0212', src: 'images/line1/360_0212_Stitch_XHC.jpg'},
  {id: 'img0214', src: 'images/line1/360_0214_Stitch_XHC.jpg'},
  {id: 'img0221', src: 'images/line1/360_0221_Stitch_XHC.jpg'},
  {id: 'img0222', src: 'images/line1/360_0222_Stitch_XHC.jpg'},
  {id: 'img0228', src: 'images/line1/360_0228_Stitch_XHC.jpg'},
];

let line1Previews = [
  {id: 'img0014', src: 'images/line1/preview/360_0014_Stitch_XHC_preview.jpg', text: '法兰克福中央火车站'},
  {id: 'img0028', src: 'images/line1/preview/360_0028_Stitch_XHC_preview.png', text: '科隆大教堂'},
  {id: 'img0039', src: 'images/line1/preview/360_0039_Stitch_XHC_preview.png', text: '阿姆斯特丹运河'},
  {id: 'img0078', src: 'images/line1/preview/360_0078_Stitch_XHC_preview.png', text: '荷兰风车村'},
  {id: 'img0119', src: 'images/line1/preview/360_0119_Stitch_XHC_preview.png', text: '荷兰郁金香'},
  {id: 'img0128', src: 'images/line1/preview/360_0128_Stitch_XHC_preview.png', text: '布鲁塞尔原子球塔'},
  {id: 'img0132', src: 'images/line1/preview/360_0132_Stitch_XHC_preview.png', text: '布鲁塞尔大广场'},
  {id: 'img0144', src: 'images/line1/preview/360_0144_Stitch_XHC_preview.png', text: '巴黎凡尔赛宫'},
  {id: 'img0157', src: 'images/line1/preview/360_0157_Stitch_XHC_preview.png', text: '巴黎埃菲尔铁塔'},
  {id: 'img0186', src: 'images/line1/preview/360_0186_Stitch_XHC_preview.png', text: '巴黎协和广场'},
  {id: 'img0206', src: 'images/line1/preview/360_0206_Stitch_XHC_preview.png', text: '巴黎圣母院'},
  {id: 'img0212', src: 'images/line1/preview/360_0212_Stitch_XHC_preview.png', text: '巴黎凯旋门'},
  {id: 'img0214', src: 'images/line1/preview/360_0214_Stitch_XHC_preview.png', text: '巴黎老佛爷'},
  {id: 'img0221', src: 'images/line1/preview/360_0221_Stitch_XHC_preview.png', text: '巴黎卢浮宫'},
  {id: 'img0228', src: 'images/line1/preview/360_0228_Stitch_XHC_preview.png', text: '卢森堡宪法广场'},
];

let back1Links = [
  {id: 'img0034', back: '#img0028', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0020', back: '#img0028', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0055', back: '#img0039', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0060', back: '#img0078', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0072', back: '#img0078', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0076', back: '#img0078', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0087', back: '#img0078', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0105', back: '#img0119', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0117', back: '#img0119', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0121', back: '#img0119', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0139', back: '#img0132', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0151', back: '#img0144', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0189', back: '#img0186', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0194', back: '#img0206', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0200', back: '#img0206', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0203', back: '#img0206', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0209', back: '#img0206', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0163', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0164', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0167', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0169', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0171', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0175', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0177', back: '#img0221', content: 'back', target: `#${DataClass.skyData.id}`},
  {id: 'img0222', back: '#img0228', content: 'back', target: `#${DataClass.skyData.id}`},
];

let line1Links = [
  {
    id: 'img0028',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0034', position: {x: '-4.3', y: '8.4', z: '0'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0020', position: {x: '-2.5', y: '1.9', z: '8.8'}},
    ]
  },
  {
    id: 'img0039',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0055', position: {x: '4.5', y: '2.4', z: '7.7'}},
    ]
  },
  {
    id: 'img0078',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0060', position: {x: '0', y: '2.0', z: '-9.6'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0072', position: {x: '1.8', y: '2.0', z: '-9.3'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0076', position: {x: '8.4', y: '2.0', z: '3.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0087', position: {x: '-7.0', y: '2.8', z: '-5.8'}},
    ]
  },
  {
    id: 'img0119',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0105', position: {x: '4.3', y: '4.8', z: '6.8'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0117', position: {x: '7.9', y: '3.5', z: '-2.4'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0121', position: {x: '3.7', y: '1.8', z: '-8.4'}},
    ]
  },
  {
    id: 'img0132',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0139', position: {x: '-5.0', y: '6.5', z: '2.4'}},
    ]
  },
  {
    id: 'img0144',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0151', position: {x: '-1.0', y: '3.7', z: '8.5'}},
    ]
  },
  {
    id: 'img0186',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0189', position: {x: '6.9', y: '2.2', z: '4.7'}},
    ]
  },
  {
    id: 'img0206',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0194', position: {x: '2.7', y: '3.0', z: '7.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0200', position: {x: '2.7', y: '1.4', z: '7.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0203', position: {x: '-2.6', y: '3.5', z: '7.2'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0209', position: {x: '5.6', y: '2.1', z: '7.2'}},
    ]
  },
  {
    id: 'img0221',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0163', position: {x: '-7.7', y: '-1.0', z: '-2.0'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0164', position: {x: '-3.6', y: '-1.0', z: '-1.3'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0167', position: {x: '-1.4', y: '5.0', z: '7.0'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0169', position: {x: '-4.0', y: '5.0', z: '6.7'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0171', position: {x: '-2.5', y: '5.5', z: '-6.8'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0175', position: {x: '0.6', y: '5.5', z: '-6.8'}},
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0177', position: {x: '4.6', y: '5.5', z: '-6.5'}},
    ]
  },
  {
    id: 'img0228',
    links: [
      {type: 'icon', content: 'placeholder', target: `#${DataClass.skyData.id}`, src: '#img0222', position: {x: '-4.7', y: '5.2', z: '5.4'}},
    ]
  },
];

let skyData = Object.assign({}, DataClass.skyData, {src: '#img0014'});
let previewData = Object.assign({}, DataClass.previewData, {img: 'images/line1/preview/360_0221_Stitch_XHC_preview.png'});
let imageData = line1Images;
let imagePreviewData = line1Previews;
let linkPointData = line1Links;
let backLinksData = back1Links;

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
