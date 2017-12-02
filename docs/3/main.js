


// 動かすオブジェクト
dot = $('.mv .dot')

// アニメーションに使用する角度
angle = 0

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 画面の真ん中基準にする
  center = {
    x:sw * 0.5 - dot.width() * 0.5,
    y:sh * 0.5 - dot.height() * 0.5
  }

  // 動く範囲 適当に
  radius = sh * 0.25;

  // 度をラジアンに変換
  rad = radian(angle)

  // この-1 ~ 1の値を色々な部分に使う
  val = Math.sin(rad)

  // スケール 0.1 ~ 2
  scale = map(val, 0.1, 2, -1, 1);

  // 角度
  rot = map(val, -90, 90, -1, 1);

  // 色 chroma.js使用
  color = chroma.mix(0xEF594D, 0xDEC262, map(val, 0, 1, -1, 1)).css();

  TweenMax.set(dot, {
    x:center.x,
    y:center.y,
    scale:scale,
    rotationZ:rot,
    backgroundColor:color
  });

  // アニメーションで使用する角度を進める
  // アニメーションの速度と同じ
  angle += 2;

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
