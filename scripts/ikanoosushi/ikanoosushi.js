'use strict';

//コンテンツ決定した？
const decided_contents = false;
const decided_products = false;

const contents = fetchJSON('./../scripts/ikanoosushi/ikanoosushi-contents.json');
const products = fetchJSON('./../scripts/ikanoosushi/ikanoosushi-products.json');

// contentsを取得
if(decided_contents == true){
  switchContents(contents);
  document.getElementById("contents").style.backgroundColor="#fff"
}else{
  waitPlease("contents-set");
}

// productsを取得
if(decided_products == true){
  addProducts();
  document.getElementById("products").style.backgroundColor="#fff"
}else {
  waitPlease("products-set")
}  
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
// contentsを分ける
//
function switchContents(contents) {
  const left_list = document.getElementById("left-list");
  const right_list = document.getElementById("right-list");
  var median = Math.floor(contents.length/2)//少数切り捨て
  addContents(left_list, 0, median+1)
  addContents(right_list, median+1, contents.length )
}

//
// contentsを追加する
//
function addContents(list, head, tail){
  for(let i=head; i<tail; i++){
    // li
    //   .number
    //   .content
    //     .title
    //     .author: a
    //     .detaill
    const listDOM = document.createElement('li');
    list.appendChild(listDOM);

      const numberDOM = document.createElement('div');
      numberDOM.classList.add('number');
      numberDOM.innerHTML = ( '00' + (i+1) ).slice( -2 );
      listDOM.appendChild(numberDOM);

      const contentDOM = document.createElement('div');
      contentDOM.classList.add('content');
      listDOM.appendChild(contentDOM);

        const titleDOM = document.createElement('div');
        titleDOM.classList.add('title');
        titleDOM.innerHTML = contents[i].title;
        contentDOM.appendChild(titleDOM);

        const authorDOM = document.createElement('div');
        authorDOM.classList.add('author');
        authorDOM.innerHTML = `<a href="${contents[i].author_link}">${contents[i].author}</a>`;
        contentDOM.appendChild(authorDOM);

        const detailDOM = document.createElement('div');
        detailDOM.classList.add('detail');
        detailDOM.innerHTML = contents[i].detail;
        contentDOM.appendChild(detailDOM);
  }
}

//
// productsを追加する
//
function addProducts(){
  const products_list = document.getElementById("product-list");
  for (let i=0;i<products.length; i++) {
    // li.product
    //   a(href="url")
        // .pic: img(src="picture",alt="name")
        // .product-detail
        //   .name name
        //   .value ¥+value
        //   .comment
    const listDOM = document.createElement('li');
    listDOM.classList.add('product');
    products_list.appendChild(listDOM);

      const aDOM = document.createElement('a');
      aDOM.href = products[i].url;
      listDOM.appendChild(aDOM);
    
        const picDOM = document.createElement('div');
        picDOM.classList.add('pic');
        picDOM.innerHTML = `<img src="./../images/techbookfest6/products/${products[i].picture}" alt="${products[i].name}">`;
        aDOM.appendChild(picDOM);

        const detailDOM = document.createElement('div');
        detailDOM.classList.add('product-detail');
        detailDOM.innerHTML = 
        `<div class="name">${products[i].name}</div>
         <div class="value">${products[i].value}</div>
         <div class="comment">${products[i].comment}</div>`
        aDOM.appendChild(detailDOM);

  }
}

//
// 「ちょっとまってね」
//
function waitPlease(id){
  const space = document.getElementById(id);
  space.textContent = null;
  const waitDOM = document.createElement('div');
  waitDOM.classList.add('please-wait');
  waitDOM.innerHTML = `<div class="BG-spiral"><img src="./../images/techbookfest6/BG_spiral.png"></div><p>ちょっと待ってね……</p>`;
  space.appendChild(waitDOM);
}