const fs = require("fs");

'use strict';

var f = fs.readFileSync(together-contents.json);
var o = JSON.parse(f);

console.log(o);

  //配列からコンテンツ内容取ってきて、htmlのinputのvalueに入れたい
  for (let i = 0; i < 16; i++) {
    var num = i+1;
    o[i] = document.getElementById("content-"+num);
    o[i].value = contents[i].title;
  }
  console.log(contents);


function detailOpen(content_num) {

};