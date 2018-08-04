# 新サイト制作
[kosen14s.github.io](http://kosen14s.github.io/) のリニューアル

## メンバーのデータの置き方

### 1. アイコンを置く
  `dest/images/icon` のフォルダ中に、お好きな自分のアイコン画像を置く。

### 2. データを入力
  `dest/scripts` 内の `together-contents.json` ファイルを開く。  
  章タイトルの順番通りに並んでいるので、以下の例に習って、自分の書く章の所にデータを入力する。
  ```
  "author": [{
        "name":"表示する名前を入力",
        "link":"クリックしたときに飛ぶリンクを入力",
        "icon":"さっき置いたアイコン画像のファイル名を入力"
      }],
  "detail": "詳しい説明を書く"
  ```

## 始め方
  `git clone https://github.com/kosen14s/kosen14s-site-2.git`  
  `cd kosen14s.github.io.git`
```
  npm i -g yarn
  # 事前に Node.js を入れてください

  yarn
  # 必要なpackageを落としてきます

  yarn watch
  # srcフォルダ内の更新ファイルを常に監視し、destフォルダへ更新内容を反映したファイルを出力します
```
ブラウザで `http://localhost:3000`にアクセスすると見れます。