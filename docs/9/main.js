



// 動かすオブジェクト
dot = $('.mv .dot')
dot2 = $('.mv .dot2')

// アニメーションに使用する角度
angle = 0

// 毎フレーム実行
window.requestAnimationFrame(update);
function update() {

  sw = $('.container').width();
  sh = $('.container').height();

  radius = sh * 0.5;

  rad = radian(angle)

  TweenMax.set(dot, {
    y:(sh * 0.5 - 25) - (Math.sin(rad) * radius),
    x:sw * ((angle % 360) / 360) - 25
  });

  TweenMax.set(dot2, {
    y:(sh * 0.5 - 25) - (Math.cos(rad) * radius),
    x:sw * ((angle % 360) / 360) - 25
  });

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
