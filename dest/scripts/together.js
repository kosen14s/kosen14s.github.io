import contents from 'together-contents';

var content_input
  //配列からコンテンツ内容取ってきて、htmlのinputのvalueに入れたい
  for (let i = 0; i < 16; i++) {
    var num = i+1;
    content_input[i] = document.getElementById("content-"+num);
    content_input[i].value = contents[i].title;
  }
  console.log(contents);


function detailOpen(content_num) {

};