


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

  // Math.sin(rad)は-1から1までをいい感じで返す。こいつにradiusをかけることで
  // 画面中央から、-radius ~ radiusの範囲で行ったり来たりするようになる
  offsetY = Math.sin(rad) * radius

  TweenMax.set(dot, {
    x:center.x,
    y:center.y + offsetY
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
