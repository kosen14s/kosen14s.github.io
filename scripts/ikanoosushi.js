'use strict';

// contentsを取得・表示
const contents = fetchJSON('./../scripts/ikanoosushi-contents.json');
switchContents(contents);

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
      numberDOM.innerHTML = ( '00' + (i+1) ).slice( -2 );;
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

