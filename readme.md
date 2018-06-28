# 新サイト制作
[kosen14s.github.io](http://kosen14s.github.io/) のリニューアル

# 始め方
  `git clone https://github.com/kosen14s/kosen14s-site-2.git`  
  `cd kosen14s.github.io.git`

```
  npm i -g yarn
  # 事前に Node.js を入れてください

  yarn
  # 必要なpackageを落としてきます

  yarn gulp watch
  # srcフォルダ内の更新ファイルを常に監視し、destフォルダへ更新内容を反映したファイルを出力します
```

これからwebpack導入するつもりなので、とりあえず `dest/html/index.html` をブラウザで開いてください。

現在、ブラウザ側の更新が手動。ファイル変更したらページを更新しないと変更が反映されません。