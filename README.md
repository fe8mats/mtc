# Masao to Canvas
Masao to Canvas extension for Google Chrome

スーパー正男のJava版を自動的にCanvas版へ変換するGoogle Chromeの拡張機能です。　

mc_c.zipは全て2.8へ、FX版は使用classとJS拡張の有無によって処理を分けています。

v1.2よりオブジェクトタグによる正男アプレットの変更に対応いたしました。現在β実装です。

|使用クラス(FX版)|処理|
|---|---|
|MasaoConstruction.class|通常のreplaceを行います|
|Masaokani2.class|Kani2.jsを読み込みreplaceを行います。|
|Masaokani.class|旧ParamをKani2用に変換した後、kani2と同じ処理を行います。|
|MasaoJSS.class|ページそのものをコピーし、変換用にソースを書き換え新規ウィンドウ・タブで開きます。|
|MasaoXJSS2.class|MasaoJSSと同じ処理を行います。|
|MasaoConstruction.class(非同期JS有り)|MasaoJSSとほぼ同じ処理を行います。onLoadJSが使われているかが判別トリガーです。|
|MasaoFXApplet.class|MasaoJSSと同じ処理を行います。おまじない程度ですが。|

Javascript拡張正男の変換において、他の画像ファイルを読み込むプログラムがあった場合、読み込めないというバグがあります。

全ての正男の動作を保証できるものではありません。



## License for MTC
MIT, but licenses of used libraries and formats are depending on their original license.

Copyright (c) 2018 Tex (Tetsuya Matsuda) http://tex1.symphonic-net.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--

Jss.js、caps.js(Javascript拡張変換用プログラム) by くるりん

JSまさおライブラリ by Ryo

まさおコンストラクション by 福田直人
