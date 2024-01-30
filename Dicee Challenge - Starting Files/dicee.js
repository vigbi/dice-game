var a=Math.floor((Math.random() * 6) + 1);
var b=Math.floor((Math.random() * 6) + 1);
var p1=prompt("player 1 enter your name");
var p2=prompt("player 2 enter your name");
var s1="images/dice"+a+".png";
var s2="images/dice"+b+".png";
document.querySelector("img").setAttribute("src",s1);
document.querySelectorAll("img")[1].setAttribute("src",s2);
document.querySelector("p").innerHTML=p1;
document.querySelectorAll("p")[1].textContent=p2;

if(a>b)
  document.querySelector("h1").textContent= p1+" WINS !";
else if (b>a)
  document.querySelector("h1").textContent= p2+" WINS !";
else if(a===b)
  document.querySelector("h1").textContent="It's a DRAW!";
