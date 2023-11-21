const card00 = document.getElementById("Mycard00");
const card01 = document.getElementById("Mycard01");
const card02 = document.getElementById("Mycard02");
const card03 = document.getElementById("Mycard03");
const card04 = document.getElementById("Mycard04");
const card05 = document.getElementById("Mycard05");

const card0 = document.getElementById("Mycard0");
const card1 = document.getElementById("Mycard1");
const card2 = document.getElementById("Mycard2");
const card3 = document.getElementById("Mycard3");
const card4 = document.getElementById("Mycard4");
const card5 = document.getElementById("Mycard5");
var Mysummon = "defalt";//自分の召喚情報
var Enmysummon; //相手の召喚情報
var reza = false;
var limitReza = false;
var Nextturn = true;
var limitTime//対戦の制限時間
var roundCounter = 0;
var EndGameDrei = false;
var deleatreza = false;
var ran = null;
var ran2 = null;
var ran3 = null;
var ranbox = [];
var ranbox2 = [];
var ranbox3 = [];

var ClickCard1_enable = true;
var ClickCard2_enable = true;
var ClickCard3_enable = true;
var ClickCard4_enable = true;
var ClickCard5_enable = true;


//自分の手札
const Ecard = [
  "img/D.png" ,
  "img/S.png",
  "img/U.png",
  "img/N.png"
];
//敵の手札
const EcardEnmy = [
  "img/K.png" ,
  "img/S.png",
];

card01.src = Ecard[2]; 
card02.src = Ecard[2]; 
card03.src = Ecard[2];
card04.src = Ecard[2];
card05.src = Ecard[2]; 

card1.src = Ecard[0]; 
card2.src = Ecard[1];
card3.src = Ecard[1]; 
card4.src = Ecard[1]; 
card5.src = Ecard[1]; 

card0.addEventListener("click",card0click);


card1.addEventListener("click",card1click);
card2.addEventListener("click",card2click);
card3.addEventListener("click",card3click);
card4.addEventListener("click",card4click);
card5.addEventListener("click",card5click);


function card0click(){
  if(limitReza == false){
    if(reza == true){
      switch (Mysummon) {
          case "D":
            card1.src = Ecard[0];
            card0.src = Ecard[3];
            ClickCard1_enable = true;
            break;
          case "S1":
            card2.src = Ecard[1];
            card0.src = Ecard[3];
            ClickCard2_enable = true;
            break;
          case "S2":
            card3.src = Ecard[1];
            card0.src = Ecard[3];
            ClickCard3_enable = true;
            break;
          case "S3":
            card4.src = Ecard[1];
            card0.src = Ecard[3];
            ClickCard4_enable = true;
            break;
          case "S4":
            card5.src = Ecard[1];
            card0.src = Ecard[3];
            ClickCard5_enable = true;
            break;
          default:
            break;
      }
    }
    Mysummon = "defalt";    
    reza = false;
  }
}

function card1click(){
if(ClickCard1_enable == true){
  if(limitReza == false){
    if(reza == false){
      card0.src = Ecard[0]; 
      card1.src = Ecard[3];
      Mysummon = "D";
      reza = true;
      }
    }
  }
  ClickCard1_enable = false;
}

function card2click(){
  if(zeroNo = true){}
  if(ClickCard2_enable == true){
    if(limitReza == false){
      if(reza == false){
        card0.src = Ecard[1];
        card2.src = Ecard[3];
        Mysummon = "S1";
        reza = true;
      }
    }
  }
  ClickCard2_enable = false;
}

function card3click(){
  if(ClickCard3_enable == true){
    if(limitReza == false){
      if(reza === false){
        card0.src = Ecard[1];
        card3.src = Ecard[3];
        Mysummon = "S2";
        reza = true
      }
    }
  }
  ClickCard3_enable = false;
}

function card4click(){
  if(ClickCard4_enable == true){
    if(limitReza == false){
      if(reza === false){
        card0.src = Ecard[1];
        card4.src = Ecard[3];
        Mysummon = "S3";
        reza = true;
        }
    }
  }
  ClickCard4_enable = false;
}

function card5click(){
  
  if(ClickCard5_enable == true){
    if(limitReza == false){
      if(reza === false){
        card0.src = Ecard[1];
        card5.src = Ecard[3];
        Mysummon = "S4";
        reza = true;
        }
    }
  }
 ClickCard5_enable = false;
}

//制限時間
var cont = 5;
limitTime = setInterval(timelimit, 1000);
var dis = document.querySelector(".display");
var win = document.querySelector(".win");
var winner = document.querySelector(".winer")

function timelimit(){
  cont--;
  dis.innerHTML = cont;
  //制限時間0
  if(cont == 0){
    console.log(Mysummon);
    clearInterval(limitTime);
    limitReza = true;
    //相手の設定
    DeleatCard();
    EnmysummonRandom();
   
    if(Mysummon == "defalt"){
    MysummonRandom();
    }

  //動作確認
    console.log("相手は"+Enmysummon);
    WinnerRezalut(Mysummon,Enmysummon);
  }
}

function DeleatCard(){
  if(deleatreza == false){}
    ran = Math.floor(Math.random()*5);
    //includesメソッド 配列に含まれているか trueかfalseで返す
    if(!ranbox.includes(ran)){ 
      //配列に格納する
      ranbox.push(ran);
    }else{
      deleatreza = true;
      DeleatCard();
    }

  console.log("ran = "+ran);
  console.log("ranbox = "+"["+ranbox+"]");
  
  switch(ran){
    case 0:
      card01.src = Ecard[3];
      break;
    case 1:
      card02.src = Ecard[3];
      break;
    case 2:
      card03.src = Ecard[3];
      break;
    case 3:
      card04.src = Ecard[3];
      break;
    case 4:
      card05.src = Ecard[3];
      break;
  }
  ran = null;
}

function EnmysummonRandom(){
  do{
    ran2 = Math.floor(Math.random() * 5);
  }while(ranbox2.includes(ran2))
  ranbox2.push(ran2);
  console.log("ran2 = "+ran2);
  switch(ran2){
    case 0:
    case 1:
    case 2:
    case 3:
    card00.src = EcardEnmy[1];
    Enmysummon = "S"
    break;
    case 4:
    card00.src = EcardEnmy[0];
    console.log("KING");
    Enmysummon = "K"; 
    break;
  }
  ran2 = null;
}

function MysummonRandom(){
    do{
      ran3 = Math.floor(Math.random() * 5);
    }while(ranbox3.includes(ran3))
    ranbox3.push(ran3);

    console.log("ran3 = "+ran3);
    console.log("ranbox3 = "+"["+ran3+"]");

    switch (ran3) {
      case 0:
        card0.src = Ecard[0]; 
        card1.src = Ecard[3];
        reza = true;
        Mysummon = "D"; 
        break;
      case 1:
        card0.src = Ecard[1];
        card2.src = Ecard[3];
        reza = true;
        Mysummon = "S1";
        break;
      case 2:
        card0.src = Ecard[1];
        card3.src = Ecard[3];
        reza = true;
        Mysummon = "S2";
        break;
      case 3:
        card0.src = Ecard[1];
        card4.src = Ecard[3];
        reza = true;
        Mysummon = "S3";
        break;
      case 4:
        card0.src = Ecard[1];
        card5.src = Ecard[3];
        reza = true;
        Mysummon = "S4";
        break;
    }
     //押したカードを押せなくする。
    ran3 = null;
    switch(Mysummon){
      case "D":
        ClickCard1_enable = false;
        break;
      case "S1":
        ClickCard2_enable = false;
        break;
      case "S2":
        ClickCard3_enable = false;
        break;
      case "S3":
        ClickCard4_enable = false;
        break;
      case "S4":
        ClickCard5_enable = false;
        break;
    }
}

function WinnerRezalut(Mysummon,Enmysummon){
  if(Mysummon == "D"){
    switch(Enmysummon){
      case "K":
      console.log("奴隷の勝利");
      winner.innerHTML = "奴隷の勝利";
        Nextturn = false;
        EndGameDrei = true
        setTimeout(NextROUND,3000);
        break;
      default:
        winner.innerHTML = "市民の勝利";
        console.log("市民の勝利");
        Nextturn = false;
        setTimeout(NextROUND,3000);
        break;
    }
  }
  else{
    switch(Enmysummon){
      case "K":
      console.log("皇帝の勝利");
      winner.innerHTML = "皇帝の勝利"
       setTimeout(NextROUND,3000);
        break;
      case "S":
        console.log("引き分け");
        winner.innerHTML = "引き分け";
        setTimeout(NextTURN,3000);//3秒経ったら消す
        break;
    }
  }
}

function NextTURN(){
  card0.src = Ecard[3];
  card00.src = Ecard[3];
  limitReza = false;//カード選択可能に
  reza = false;
  cont = 5;
  Mysummon = "defalt";
  limitTime = setInterval(timelimit, 1000);
  zeroNo = true;
  //押したカードを押せなくする。
  winner.innerHTML = "";
  entListener("click",card5click);
}

function NextROUND(){
  console.log("次ラウンドファイト!!---------------");
  if(EndGameDrei == false){
    roundCounter++
    win.innerHTML = roundCounter+"/3";
    console.log(roundCounter);
    if(roundCounter<99){
      card00.src = Ecard[3];
      card01.src = Ecard[2]; 
      card02.src = Ecard[2]; 
      card03.src = Ecard[2];
      card04.src = Ecard[2];
      card05.src = Ecard[2]; 
      
      card0.src = Ecard[3];
      card1.src = Ecard[0]; 
      card2.src = Ecard[1];
      card3.src = Ecard[1]; 
      card4.src = Ecard[1]; 
      card5.src = Ecard[1]; 

      ClickCard1_enable = true;
      ClickCard2_enable = true;
      ClickCard3_enable = true;
      ClickCard4_enable = true;
      ClickCard5_enable = true;

      reza = false;
      limitReza = false;
      cont = 5;
      deleatreza = false;
      ranbox = [];
      ranbox2 = [];
      ranbox3 = [];
      zeroNo = true;
      limitTime = setInterval(timelimit, 1000);
      Mysummon = "defalt";

      winner.innerHTML = "";
      }
    else{
      alert("皇帝の勝利");
    }
  }
  else{
    alert("奴隷の勝利");
    var re = confirm("もう一度やりますか?");
    if(re = true){
      
    }
  }
}
