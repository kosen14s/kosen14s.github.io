'use strict';

function fetchJSON(file) {
  const request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
    return JSON.parse(request.responseText);
}

const o = fetchJSON('./scripts/together-contents.json');

console.log(o);

var detail_open = false;
var contents_title = [];
var nowContentsNum = 0;
var contents_detail = document.getElementById("contents-detail");
var nowAuthorNum = 1;
var box;
var link_block = document.getElementById("link-block");

var detail_chapter = document.getElementById("detail-chapter");
var detail_icon = document.getElementById("author-icon");
var detail_link =  document.getElementById("detail-link");
var detail_link_img = document.getElementById("author-link-img");
var detail_link_txt = document.getElementById("author-link-txt");
var detail_author = document.getElementById("detail-author");
var detail_category = document.getElementById("detail-category");
var detail_text = document.getElementById("detail-text");

if(o){
  //配列からコンテンツ内容取ってきて、buttonのDOM更新
  for (let i = 0; i < o.length; i++) {
    contents_title[i] = document.getElementById("content-"+(i+1));
    console.log(i);
    contents_title[i].textContent = o[i].title + " ⓘ";
  }
}


function detailOpen(content_num) {
  if(o){
    if(detail_open == false){
      contents_detail.classList.add("detail-open");
      detail_open = true;
    }
    nowContentsNum = content_num;
    detail_chapter.textContent = content_num + ". " + o[content_num-1].title
    //削除
    if(nowAuthorNum > 1){
      //追加した要素を削除させたい
      for (let i = 0; i < nowAuthorNum; i++) {
        box.removeChild(box.lastChild);
      }
    }

    if(o[content_num-1].author instanceof Array){
      //[0]のところ変更
      detail_icon.src = "../images/icon/" + o[content_num-1].author_icon[0]
      detail_link_img.href = o[content_num-1].author_link[0]
      detail_link_txt.href = o[content_num-1].author_link[0]
      detail_author.textContent = o[content_num-1].author[0]
      nowAuthorNum = o[content_num-1].author.length;
      //[1]以上はDOM作る
      for (let i = 1; i < o[content_num-1].author.length; i++) {
        box = document.createElement("div");
        box.classList.add('detail-link');
        box.classList.add('temporary');
          var aTxt = document.createElement('a');
          var aTxt_author = document.createElement('p');
          var aPng = document.createElement('a');
          var aPng_icon = document.createElement('img');
          aTxt_author.classList.add('detail-value');
          aTxt_author.textContent = o[content_num-1].author[i];
          aTxt.appendChild(aTxt_author);
          aPng_icon.classList.add('author-icon');
          aPng_icon.setAttribute('src', o[content_num-1].author_link[i]);
          aPng.appendChild(aPng_icon);
          box.appendChild(aTxt);
          box.appendChild(aPng);
        link_block.appendChild(box);
        detail_link.parentNode.insertBefore(box, detail_link.nextSibling); 
      }
    }else{
      nowAuthorNum = 1;
      detail_icon.src = "../images/icon/" + o[content_num-1].author_icon
      detail_link_img.href = o[content_num-1].author_link
      detail_link_txt.href = o[content_num-1].author_link
      detail_author.textContent = o[content_num-1].author
    }
    detail_category.textContent = o[content_num-1].category
    detail_text.textContent = o[content_num-1].detail
  }
};

function detailClose() {
  if(detail_open == true){
    contents_detail.classList.remove("detail-open");
    detail_open = false;
  }
}

function detailBack() {
  if(nowContentsNum <= 1){
    detailOpen(o.length);
  }else{
    detailOpen(nowContentsNum-1);
  }
}

function detailNext() {
  if(nowContentsNum >= o.length) {
    detailOpen(1);
  }else{
    detailOpen(nowContentsNum+1);
  }
}