function positionToAngel(x, y) {
  if(x > 0) {
    return Math.atan(y/x) * 180 / Math.PI;
  } else if (x < 0) {
    if(y >= 0) {
      return (Math.atan(y/x) * 180 / Math.PI) + 180;
    } else {
      return (Math.atan(y/x) * 180 / Math.PI) - 180;
    }
  } else {
    if(y > 0) {
      return 90;
    } else if (y<0) {
      return -90;
    } else {
      return 0;
    }
  }
}

function rotationToPostion(zA) {
  let xo = 1, yo = 0;
  let x = xo * Math.cos(zA * Math.PI / 180);
  let y = xo * Math.sin(zA * Math.PI / 180);
  return {x: x, y: y};
}

export { positionToAngel, rotationToPostion };
