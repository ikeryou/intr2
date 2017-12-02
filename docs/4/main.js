


// 動かすオブジェクト
dot = $('.mv .dot')

// アニメーションに使用するやつ
// パラメータごとに違う角度や速度を使う
paramX = {
  angle:random(0, 360),
  speed:-1.8
}
paramY = {
  angle:random(0, 360),
  speed:3.2
}
paramZ = {
  angle:random(0, 360),
  speed:2.5
}

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 画面の真ん中
  center = {
    x:sw * 0.5 - dot.width() * 0.5,
    y:sh * 0.5 - dot.height() * 0.5
  }

  // 動く半径
  radius = sh * 0.2;

  // Z
  z = Math.sin(radian(paramZ.angle)) * radius;

  // X
  x = Math.sin(radian(paramX.angle)) * radius;

  // Y
  y = Math.cos(radian(paramY.angle)) * radius;

  TweenMax.set(dot, {
    x:center.x + x,
    y:center.y + y,
    z:z
  });

  // 速度、パラメータごとに別々に
  paramZ.angle += paramZ.speed;
  paramX.angle += paramX.speed;
  paramY.angle += paramY.speed;

  window.requestAnimationFrame(update);
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
