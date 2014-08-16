---
layout: post-jp
title:  "JSでArduinoを動かす(1)"
date:   2014-08-16
tags : jp
categories :
---

###久しぶりのArduino

Aruduinoをやるといってやれておらず、新しいものが出るたびに買うものの押入れの中にという状況が続いてました。

「植物からメールをもらおう」([http://www.atmarkit.co.jp/ait/articles/1408/01/news019.html](http://www.atmarkit.co.jp/ait/articles/1408/01/news019.html))という記事を読み、早速やることにー

###Arduinoを買い、IDEをインストール

最後に少し使ったやつがArduino Uno R2でした。

前述のブログではUno R3を使っていたので、Uno R3を購入。

![alt text](/images/2014-08-16-arduino.png "Logo Title Text 1")

左がUno R2、右がUno R3です。

中身は変わってると信じたいですが、裏面を見ない限り区別がつきません。

[<img src="/images/2014-08-16-arduino-ide.png">](http://arduino.cc/en/Main/Software)

url: [http://arduino.cc/en/Main/Software](http://arduino.cc/en/Main/Software)

ArduinoをSDKをダウンロードします。

ダウンロードして、SDKを開くと環境設定完了ですー（多分）

###ArduinoのHello World!的なことをjsでやってみる。

[チュートリアル](
http://www.atmarkit.co.jp/ait/articles/1406/23/news026_2.html)に従い、JSが使える環境を作成します。

手順は簡単みたいで、

1. 「スケッチの例」→「Frimata」→「StandardFirmata」を選択
2. Uploadを行う。

![alt text](/images/2014-08-16-arduino-error.png "Logo Title Text 1")

実際Uploadをしてみると、よくわからない問題が発生しましたが、これでも動くのでいいのかなと、、

こういう時に聞ける人がいればなと思います。

nodeモジュールのjohnny-fiveをインストールする。

{% highlight javascript %}
sudo npm install johnny-five
{% endhighlight %}

[<img
src="https://github.com/rwldrn/johnny-five/raw/master/assets/sgier-johnny-five.png">](http://github.com/rwaldron/johnny-five)


Arduinoを動かすコード。

{% highlight javascript %}
var j5      = require('johnny-five'),
    arduino = new j5.Board();
    // johnny-fiveモジュールをインポートし、Aruduinoボードのインスタンスを作成。
 
arduino.on('ready', function(){
    var led = new j5.Led({
        pin: 13
    }); // 電圧の出力先を13番PINに指定。
    
    led.strobe(200); // strobeメソッドで200ミリ秒ごとに電圧High/Lowを着替える。
});

{% endhighlight %}

このコードを node node.jsで実行します。


![alt text](/images/2014-08-16-terminal.png "test")


実行するとターミナルは上の画像のようになりました。


![alt text](/images/2014-08-16-arduino-connect.png "test")

LED点滅していますー

ArduinoではLEDが点滅してますー動いたー
詳しい説明は参考にしたブログで！[http://www.atmarkit.co.jp/ait/articles/1406/23/news026_2.html](http://www.atmarkit.co.jp/ait/articles/1406/23/news026_2.html])

