'use strict';

// contentsを取得・表示
const contents = fetchJSON('./scripts/together-contents.json');
addContents(contents);

let detail_open = false;
let nowContentsNum = 0;

const contents_detail = document.getElementById("contents-detail");
const link_block = document.getElementById("link-block");
const detail_chapter = document.getElementById("detail-chapter");
const detail_category = document.getElementById("detail-category");
const detail_text = document.getElementById("detail-text");

//
// JSONファイルからデータをfetchする
//
function fetchJSON(file) {
  const request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200)
    return JSON.parse(request.responseText);
}

//
// contentsを追加する
//
function addContents(contents) {
  for(let i=0; i<contents.length; i++) {
    const targetDOM = document.getElementById(`content-${i+1}`);
    targetDOM.textContent = `${contents[i].title} ⓘ`;
  }
}

//
// 前のモーダルに戻る
//
function detailBack() {
  if(nowContentsNum <= 1){
    detailOpen(contents.length);
  } else {
    detailOpen(nowContentsNum-1);
  }
}


//
// 次のモーダルに進む
//
function detailNext() {
  if(nowContentsNum >= contents.length) {
    detailOpen(1);
  } else {
    detailOpen(nowContentsNum+1);
  }
}

//
// モーダルを閉じる
//
function detailClose() {
  if(detail_open) {
    contents_detail.classList.remove('detail-open');
    detail_open = false;
  }
}

//
// モーダルを開く
//
function detailOpen(content_num) {
  if(detail_open == false) {
    contents_detail.classList.add('detail-open');
    detail_open = true;
  }

  nowContentsNum = content_num;
  detail_chapter.textContent = `${content_num}. ${contents[content_num-1].title}`;

  link_block.innerHTML = '';

  const propertyDOM = document.createElement('p');
  propertyDOM.classList.add('detail-property');
  propertyDOM.classList.add('detail-property-author');
  propertyDOM.innerHTML = 'Author :'
  link_block.appendChild(propertyDOM);

  contents[content_num-1].author.forEach(author => {
    const authorDOM = document.createElement('div');
    authorDOM.classList.add('detail-link');
    authorDOM.innerHTML = `<a href="${author.link}"><img class="author-icon" src="./images/icon/${author.icon}" alt="icon"></a><a href="${author.link}"><p class="detail-value">${author.name}</p></a>`
    link_block.appendChild(authorDOM);
  })

  detail_category.textContent = contents[content_num-1].category
  if (content_num < 9) {
    detail_category.style.color = '#ff619b';
  }else {
    detail_category.style.color = '#7cb639';
  }
  detail_text.textContent = contents[content_num-1].detail
}
