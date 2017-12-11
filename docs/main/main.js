

inner = $('.mv > .inner');
textA = $('.mv .text.a');
textB = $('.mv .text.b');

// アニメーションに使用する角度
param = [
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)},
  {ang:random(0,360),speed:random(1,3)}
];

colorA = 0x000000;
colorB = 0x000000;

posY = window.innerHeight;
posX = 0;
allSpeed = 4;

cnt = 0

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  cnt++;

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  txtW = textA.width();
  txtH = textA.height();

  zure = 0.01;

  c = chroma.mix(colorA, colorB, map(Math.cos(radian(param[0].ang)), 0, 1, -1, 1)).css();
  shadowInterval = map(Math.cos(radian(param[4].ang * 2)), 0, 2, -1, 1);
  txtShadow = shadow(param[0].ang, c, shadowInterval);


  TweenMax.set(textA, {
    color:c,
    x:-txtW * 0.5,
    y:-txtH * 0.5,
    textShadow:txtShadow
  });


  deg = map(Math.cos(radian(param[6].ang)), 0, 270, -1, 1);
  TweenMax.set(textB, {
    color:chroma.mix(colorB, colorA, map(Math.cos(radian(param[0].ang)), 0, 1, -1, 1)).css(),
    x:-txtW * 0.5,
    y:-txtH * 0.5,
    textShadow:txtShadow,
    '-webkit-mask-image':'-webkit-linear-gradient(' + deg + 'deg, rgba(0,0,0,0), rgba(0,0,0,1))'
  });


  kake = 0.24;
  rotX = map(Math.cos(radian(param[2].ang)), -90, 90, -1, 1) * kake;
  rotY = map(Math.sin(radian(param[3].ang)), -90, 90, -1, 1) * kake;
  rotZ = map(Math.cos(radian(param[4].ang * 1)), -40, 40, -1, 1) - 0;
  scaleX = map(Math.cos(radian(param[6].ang)), -1, 1, -1, 1);
  scaleY = map(Math.sin(radian(param[7].ang)), -1, 1, -1, 1);
  x = Math.cos(radian(param[3].ang)) * sw * 0.05;
  y = Math.cos(radian(param[1].ang)) * sh * 0.05;

  TweenMax.set(inner, {
    x:x + posX,
    y:y + posY,
    rotationX:rotX,
    rotationY:rotY,
    rotationZ:rotZ
  });

  posX -= allSpeed * 0.1
  posY += allSpeed;
  if(posY > sh) {
    posX = random(-sw * 0.1, sw * 0.1);
    posY = -sh;
    allSpeed = random(5, 6);
    colorA = randomArr([0xE7484C, 0x172679, 0xda286e, 0xa32bc8]);
    colorB = randomArr([0xECC451, 0x36a3e8, 0xf9bcaa, 0xadcffd]);
  }

  jQuery.each(param, function() {
    this.ang += this.speed * 1;
  });

  window.requestAnimationFrame(update);
}


function shadow(ang, color, interval) {

  radius = 0;
  if(isMobile.any) {
    num = 5;
  } else {
    num = 10;
  }

  res = '';
  for(var i = 0; i <= num; i++) {
    rad = radian(ang)
    x = ~~(Math.sin(rad * 0.88) * radius);
    y = ~~(Math.cos(rad * 0.92) * radius);
    res += x + 'px ' + y + 'px 0px ' + color;
    if(i != num) {
      res += ', ';
    }
    radius += interval;
  }

  return res;

}

// 度からラジアンに変換
// @val : 度
function radian(val) {
  return val * Math.PI / 180;
}

// ラジアンから度に変換
// @val : ラジアン
function degree(val) {
  return val * 180 / Math.PI;
}

// 範囲変換
// @val     : 変換したい値
// @toMin   : 変換後の最小値
// @toMax   : 変換後の最大値
// @fromMin : 変換前の最小値
// @fromMax : 変換前の最大値
function map(val, toMin, toMax, fromMin, fromMax) {
  if(val <= fromMin) {
    return toMin;
  }
  if(val >= fromMax) {
    return toMax;
  }
  p = (toMax - toMin) / (fromMax - fromMin);
  return ((val - fromMin) * p) + toMin;
}

// min(含む)からmax(含む)までのランダムな数
// @min : 最小値
// @max : 最大値
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArr(arr) {
  return arr[randomInt(0, arr.length - 1)];
}
