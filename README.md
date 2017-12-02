# 第２回 インタラ会

## インタラ会のおさらい
・インタラクティブコンテンツを作るための小技を共有する  
・その小技を使った作品をつくる  
・小技の数学的理論の説明はしない。作品を作ることを重視する  

## 第２回のテーマ「反復」
・オブジェクトが動作をいい感じに繰り返す  

## いい感じに繰り返す
・Math.sin()とMath.cos()を使う  
・引数に角度(ラジアン)を渡すと、-1から1をいい感じに返してくれる  
・コツは数学(三角関数)として考えない  
・繰り返すやつ = Math.sin()を使う。くらいの感覚  
・引数はラジアンだけど、基本「度」で考える  
・引数で渡す際に機械的にラジアンに変換する関数をかますなど、ラジアンを意識しない工夫をする  

### Math.sin(radian)
・0度と180度と360度のとき0を返す  
・90度のとき1を返す  
・270度のとき-1を返す  
[動画参考](https://ikeryou.github.io/intr2/movie/0.mp4)  

### Math.cos(radian)
・sinのカーブを-90度だけずれる  
[動画参考](https://ikeryou.github.io/intr2/movie/1.mp4)  

・この２つの関数については内容を文字で覚えない、映像で覚える  
・「こういう動きをするもの」として割り切るとすごく使いやすくなる  


## サンプル0 / いい感じの上下移動
https://ikeryou.github.io/intr2/0/  
[動画](https://ikeryou.github.io/intr2/movie/3.mp4)  

・Y値にMath.sin()の値を使うといい感じに上下にアニメーションする  
・引数の角度を増やす量で移動速度を調整できる  

```js
// 動かすオブジェクト
tg = $('.tg');

// アニメーションに使用する角度
angle = 0;

// 毎フレーム実行する関数
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 画面の真ん中
  center = {
    x:sw * 0.5 - tg.width() * 0.5,
    y:sh * 0.5 - tg.height() * 0.5
  }

  // 動く範囲
  radius = sh * 0.25;

  // 度をラジアンに変換
  radian = angle * Math.PI / 180;

  // Math.sin(radian)は-1から1までをいい感じで返す。こいつにradiusをかけることで
  // 画面中央から、-radius ~ radiusの範囲で行ったり来たりするようになる
  offsetY = Math.sin(radian) * radius

  TweenMax.set(tg, {
    x:center.x,
    y:center.y + offsetY
  });

  // アニメーションで使用する角度を進める
  // アニメーションの速度と同じ
  angle += 2;

}
```

## サンプル1 / いい感じの円の動き
https://ikeryou.github.io/intr2/1/  
[動画](https://ikeryou.github.io/intr2/movie/4.mp4)  

・X値にMath.sin()、Y値にMath.cos()を使い、同じ角度を引数で渡すと円の動きになる  
・暗記する価値あり  

```js
// 動かすオブジェクト
tg = $('.tg');

// アニメーションに使用する角度
angle = 0;

// 毎フレーム実行する関数
function update() {

  // 画面のサイズ
  sw = window.innerWidth
  sh = window.innerHeight

  // 円中央の座標
  center = {
    x:sw * 0.5 - tg.width() * 0.5,
    y:sh * 0.5 - tg.height() * 0.5
  }

  // 円の半径
  radius = sh * 0.25;

  // 度をラジアンに変換
  radian = angle * Math.PI / 180;

  // ↓までで、円の動きの公式として暗記しちゃってOK
  x = center.x + Math.sin(radian) * radius
  y = center.y + Math.cos(radian) * radius

  TweenMax.set(tg, {
    x:x,
    y:y
  });

  // アニメーションで使用する角度を進める
  // アニメーションの速度と同じ
  angle += 2;

}
```

## サンプル2 / 奥行きのある円の動き
https://ikeryou.github.io/intr2/2/  
[動画](https://ikeryou.github.io/intr2/movie/5.mp4)  

・X値とZ値にMath.sin()とMath.cos()を使用すれば奥行きのある円の動きになる  


## サンプル3 / 位置以外にも使用
https://ikeryou.github.io/intr2/3/  
[動画](https://ikeryou.github.io/intr2/movie/6.mp4)  

・Math.sin()を色やスケール、角度にも適応  
・色操作は[chroma.js](https://github.com/gka/chroma.js)を使用  


## サンプル4 / 不規則な浮遊感
https://ikeryou.github.io/intr2/4/  
[動画](https://ikeryou.github.io/intr2/movie/7.mp4)  

・X値やY値に使うMath.sin()の引数に異なる速度で増える角度を使用すると、不規則な浮遊感を出せる  
・めちゃめちゃよく使う  


## サンプル5 / 円周上に配置
https://ikeryou.github.io/intr2/5/  
[動画](https://ikeryou.github.io/intr2/movie/8.mp4)  

・円の動きのときの引数の角度は0~360で一周する  
・等間隔で角度を指定すればに円上に配置できる  
・めちゃめちゃよく使う  


## サンプル6 / いろんな値に使用
https://ikeryou.github.io/intr2/6/  
[動画](https://ikeryou.github.io/intr2/movie/9.mp4)  

・位置XY、スケールXYZ、色、親要素のperspective値にMath.sin()、Math.cos()を使用する  
・かつすべて違う速度で増える角度を使用する  


## サンプル7 / いろんな値に使用(複数)
https://ikeryou.github.io/intr2/7/  
[動画](https://ikeryou.github.io/intr2/movie/10.mp4)  

・サンプル6のオブジェクトをたくさん作ってサインカーブに沿って配置  
