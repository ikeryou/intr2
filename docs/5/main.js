


// 動かすオブジェクト
dot = $('.mv .dot')

// アニメーションに使用する角度
angle1 = 0
angle2 = 0

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 半径
  radius = sh * 0.4;


  dot.each(function(i, e){

    el = $(e)

    // 真ん中
    center = {
      x:sw * 0.5 - el.width() * 0.5,
      y:sh * 0.5 - el.height() * 0.5
    }

    // 位置を決めるための角度
    // angleを足すことでずらしてる
    ang = angle1 + i * (360 / dot.length)

    x = center.x + Math.sin(radian(ang)) * radius;
    y = center.y + Math.cos(radian(ang)) * radius;

    // 色
    color = chroma.mix(0xEF594D, 0xDEC262, map(Math.sin(radian(angle2 + i * (360 / dot.length))), 0, 1, -1, 1)).css();

    TweenMax.set(el, {
      x:x,
      y:y,
      backgroundColor:color
    });


  });

  angle1 += 1;
  angle2 += 4;

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
