let pan0Rank=document.getElementById('pan1Rank');
let pan0Object=document.getElementById('pan1');
let pan1Rank=document.getElementById('pan2Rank');
let pan1Object=document.getElementById('pan2');
let pan2Rank=document.getElementById('pan3Rank');
let pan2Object=document.getElementById('pan3');
let pan3Rank=document.getElementById('pan4Rank');
let pan3Object=document.getElementById('pan4');
let pan4Rank=document.getElementById('pan5Rank');
let pan4Object=document.getElementById('pan5');
let pan5Rank=document.getElementById('pan6Rank');
let pan5Object=document.getElementById('pan6');
let startButton=document.getElementById('start');


startButton.onclick=function(){

  startButton.style.visibility ="hidden";//ボタンをおしたら隠す
  removeAllChildren(pan0Rank);
  removeAllChildren(pan1Rank);
  removeAllChildren(pan2Rank);
  removeAllChildren(pan3Rank);
  removeAllChildren(pan4Rank);
  removeAllChildren(pan5Rank);

  var speed=null;//初期化
  var speed=[];//空っぽの配列


for(let i=0;i<6;i++){ //パンのスピードを6回とる
  panSpeed();
}

console.log(speed);//配列
console.log(speed[0]);//配列

let winner=Math.min.apply(null,speed);//１番小さい数値を勝者にする（速い）
console.log(winner);//



chanpion(pan0Rank,speed[0]);//チャンピオンを探す
chanpion(pan1Rank,speed[1]);
chanpion(pan2Rank,speed[2]);
chanpion(pan3Rank,speed[3]);
chanpion(pan4Rank,speed[4]);
chanpion(pan5Rank,speed+"["+5+"]");
//文字連結でfor文にまとめたかったけど、で来なかった、、配列の番号のとこ

/**
 * @param{panRankspeedRank}
 * チャンピオンには『召し上がれ』と表示する
 * 
 */
function chanpion(panRank,speedRank){

   if(winner===speedRank){
function chanpioninner(){//settimeoutを使うために関数にしている
const p1 = document.createElement('p');
p1.innerText = 'お召しあがりください';
panRank.appendChild(p1);}
setTimeout(chanpioninner,4000);}
}


function removeAllChildren(element){

  
while(element.firstChild){
  element.removeChild(element.firstChild)
}

}



/***
 * パンが進んで止まっていくいくアニメーション
*/
function susumuPanMotion(panbject,speed){
  var goalPosition=600
  var stopPosition1=null;
  var basyo1=0;

/**
 * パンが進むアニメーション
 */
 function panbjectIdou(){
 basyo1=basyo1+5;
 panbject.style.transform= 'translateX(' + basyo1 + 'px)';//styleとか使う

 if (basyo1 >= goalPosition&& stopPosition1 != null) {
   // ゴール地点の数値になり、かつnullでない
     clearInterval(stopPosition1);
 }
}
stopPosition1=setInterval(panbjectIdou , speed);//
}

susumuPanMotion(pan0Object,speed[0]);
susumuPanMotion(pan1Object,speed[1]);
susumuPanMotion(pan2Object,speed[2]);
susumuPanMotion(pan3Object,speed[3]);
susumuPanMotion(pan4Object,speed[4]);
susumuPanMotion(pan5Object,speed[5]);

/**
 * 順位に影響する
 * 走るスピードをランダムにとって、配列に入れる
 */
function panSpeed(){
  let speedRanking=Math.floor(Math.random()*50)+1;
speed.push(speedRanking);}

/**
 * パンアニメーション全てが終わったら、リトライボタン表示
 */
function retryAgain(){startButton.style.visibility ="visible";}//
setTimeout(retryAgain,6000)
};

