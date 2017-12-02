


// 動かすオブジェクト
dot = $('.mv .dot');

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

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  $('.mv').css({
    perspective:map(Math.cos(radian(param[5].ang)), 50, 500, -1, 1) + 'px'
  });

  dot.each(function(i,e) {

    el = $(e)

    center = {
      x:sw * (i / dot.length),
      y:sh * 0.5 + Math.sin(radian(param[9].ang + i * (360/dot.length))) * (sh * 0.3)
    }

    scaleX = map(Math.sin(radian(param[0].ang)), 1, 2, -1, 1);
    scaleY = map(Math.cos(radian(param[1].ang)), 1, 2, -1, 1);

    rotX = map(Math.cos(radian(param[2].ang)), -90, 90, -1, 1);
    rotY = map(Math.sin(radian(param[3].ang)), -90, 90, -1, 1);
    rotZ = map(Math.cos(radian(param[4].ang)), -90, 90, -1, 1);

    radius = sh * 0.1
    ofX = Math.cos(radian(param[6].ang)) * radius;
    ofY = Math.sin(radian(param[7].ang)) * radius;

    color = chroma.mix(0xEF594D, 0xE0C25C, map(Math.cos(radian(param[8].ang)), 0, 1, -1, 1)).css();

    TweenMax.set(el, {
      x:center.x + ofX,
      y:center.y + ofY,
      scaleX:scaleX,
      scaleY:scaleY,
      rotationX:rotX,
      rotationY:rotY,
      rotationZ:rotZ,
      backgroundColor:color
    });

  });

  jQuery.each(param, function() {
    this.ang += this.speed * 2;
  });

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
