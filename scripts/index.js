var hash = location.hash;
console.log(location.hash)

var header = document.getElementById("header");
var headerUnder = document.getElementById("header-under");
var menuButton = document.getElementById("menu-button");
var menuIcon = document.getElementById("menu-icon");
var itemLink = document.getElementsByClassName("item-link");
var season_style = null;

var seasonButton = document.getElementById("now-season");
var seasonList = document.getElementById("season-list");
var sprBtn = document.getElementById("spring");
var sumBtn = document.getElementById("summer");
var autBtn = document.getElementById("autumn");
var winBtn = document.getElementById("winter");

var clicktime = 0;

var metaDiscre = document.head.children;
var metaLength = metaDiscre.length;
var season_color = null;

window.onload = function(){
  DaySetting();

  for(var i = 0;i < metaLength;i++){ //chromeタブカラーの設定
    var proper = metaDiscre[i].getAttribute('name');
    if(proper === 'theme-color'){
      var dis = metaDiscre[i];
      dis.setAttribute('content','Tab_color');
      console.log(dis);
    }
  }

  //#menuのハッシュの時はメニュOpen
  if(hash == "#menu"){
    menuOpen();
  }
  
}

function DaySetting() {
  //季節の日付設定
  var m = new Date();
  var this_year = m.getFullYear();
  var n;
  var x;

    //春
      n = Date.parse(this_year + "/" + "3/1");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var spr1 = Math.floor(x); 

      n = Date.parse(this_year + "/" + "5/31");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var spr2 = Math.floor(x);

    //夏
      n = Date.parse(this_year + "/" + "6/1");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var sum1 = Math.floor(x);

      n = Date.parse(this_year + "/" + "8/31");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var sum2 = Math.floor(x);

    //秋
      n = Date.parse(this_year + "/" + "9/1");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var aut1 = Math.floor(x);

      n = Date.parse(this_year + "/" + "10/30");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var aut2 = Math.floor(x);

    //冬
      n = Date.parse(this_year + "/" + "11/1");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var win1 = Math.floor(x);

      n = Date.parse(this_year + "/" + "12/31");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var win2 = Math.floor(x);

    //冬（年またぎ）
      n = Date.parse(this_year + "/" + "1/1");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var win3 = Math.floor(x);

      n = Date.parse(this_year + "/" + "2/28");
      x = (m - n) / 1000 / 60 / 60 / 24;
      var win4 = Math.floor(x);

  //季節に合わせて色を変える
  if ((spr1 >= 0) && (spr2 <= 0)){//春
    ChangeSpr();
    Tab_color = "#F4A7B9";
  } else if ((sum1 >= 0) && (sum2 <= 0)){//夏
    ChangeSum();
    Tab_color = "#47b2c5";
  } else if ((aut1 >= 0) && (aut2 <= 0)){//秋
    ChangeAut();
    Tab_color = "#db9616";
  } else if ((win1 >= 0) && (win2 <= 0)){//冬
    ChangeWin();
    Tab_color = "#336774";
  } else if ((win3 >= 0) && (win4 <= 0)){//冬
    ChangeWin();
    Tab_color = "#336774";
  }
}

//季節変更処理（隠し機能）
seasonButton.onclick = function() {
  seasonList.classList.toggle("season-list_open");
};
sprBtn.onclick = function() {
  ResetSeason();
  ChangeSpr();
  seasonList.classList.remove("season-list_open");
  menuIcon.classList.remove("spr","sum","aut","win");
  if(clicktime % 2){
    menuIcon.classList.add(season_style);  
  }else{
    menuIcon.classList.remove("spr","sum","aut","win");
  }
};
sumBtn.onclick = function() {
  ResetSeason();
  ChangeSum();
  seasonList.classList.remove("season-list_open");
  menuIcon.classList.remove("spr","sum","aut","win");
  if(clicktime % 2){
    menuIcon.classList.add(season_style);  
  }else{
    menuIcon.classList.remove("spr","sum","aut","win");
  }
};
autBtn.onclick = function() {
  ResetSeason();
  ChangeAut();
  seasonList.classList.remove("season-list_open");
  menuIcon.classList.remove("spr","sum","aut","win");
  if(clicktime % 2){
    menuIcon.classList.add(season_style);  
  }else{
    menuIcon.classList.remove("spr","sum","aut","win");
  }
};
winBtn.onclick = function() {
  ResetSeason();
  ChangeWin();
  seasonList.classList.remove("season-list_open");
  menuIcon.classList.remove("spr","sum","aut","win");
  if(clicktime % 2){
    menuIcon.classList.add(season_style);  
  }else{
    menuIcon.classList.remove("spr","sum","aut","win");
  }
};

function ChangeSpr() {//春に変更
  header.classList.add("spr");
  headerUnder.classList.add("spr-sub");
  for (i = 0; i < itemLink.length; i++) {
    itemLink[i].classList.add("spr-link");
  }
  seasonButton.innerHTML="now, spring ver.";
  season_style = "spr";
};
function ChangeSum() {//夏に変更
  header.classList.add("sum");
  headerUnder.classList.add("sum-sub");
  for (i = 0; i < itemLink.length; i++) {
    itemLink[i].classList.add("sum-link");
  }
  seasonButton.innerHTML="now, summer ver.";
  season_style = "sum";
};
function ChangeAut() {//秋に変更
  header.classList.add("aut");
  headerUnder.classList.add("aut-sub");
  for (i = 0; i < itemLink.length; i++) {
    itemLink[i].classList.add("aut-link");
  }
  seasonButton.innerHTML="now, autumn ver.";
  season_style = "aut";
};
function ChangeWin() {//冬に変更
  header.classList.add("win");
  headerUnder.classList.add("win-sub");
  for (i = 0; i < itemLink.length; i++) {
    itemLink[i].classList.add("win-link");
  }
  seasonButton.innerHTML="now, winter ver.";
  season_style = "win"; 
};
function ResetSeason() {
  header.classList.remove("spr","sum","aut","win");
  headerUnder.classList.remove("spr-sub","sum-sub","aut-sub","win-sub");
  for (i = 0; i < itemLink.length; i++) {
    itemLink[i].classList.remove("spr-link","sum-link","aut-link","win-link");
  }
}

//メニューボタン押したとき
menuButton.onclick = function(){
  clicktime++;
  if(clicktime % 2){
    menuOpen();
  }else{
    menuClose();
  }
};

function menuOpen() {
  header.classList.add("header_open");
  headerUnder.classList.add("header-under_open");
  menuButton.classList.add("menu-button_open");
  menuIcon.classList.add(season_style);  
};
function menuClose() {
  header.classList.remove("header_open");
  headerUnder.classList.remove("header-under_open");
  menuButton.classList.remove("menu-button_open");
  menuIcon.classList.remove("spr","sum","aut","win");
};