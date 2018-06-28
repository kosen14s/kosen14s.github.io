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

if ((spr1 >= 0) && (spr2 <= 0)){//春
      document.getElementById('header').setAttribute("class","spr");

    } else if ((sum1 >= 0) && (sum2 <= 0)){//夏
      document.getElementById('header').setAttribute("class","sum");

    } else if ((aut1 >= 0) && (aut2 <= 0)){//秋
      document.getElementById('header').setAttribute("class","aut");

    } else if ((win1 >= 0) && (win2 <= 0)){//冬
      document.getElementById('header').setAttribute("class","win");

    } else if ((win3 >= 0) && (win4 <= 0)){//冬
      document.getElementById('header').setAttribute("class","win");

  }