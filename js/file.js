
var myInfo = document.getElementById('ba');

myInfo.onclick = function calc(){
    var salary = 7000,
        y = document.getElementById('doller').value,
        result = salary - y * 150 ;
    
  if (isNaN(y)){
      document.getElementById('yo').innerHTML =
       "<p style='color:red'>filed</p>"
    } else if (y < 0){
      document.getElementById('yo').innerHTML =
       "<p style='color:red'>filed</p>"
    } else if (y === "0"){
      document.getElementById('yo').innerHTML =
       "<p style='color:red'>filed</p>"
    } else if (y === ""){
      document.getElementById('yo').innerHTML =
       "<p style='color:red'>filed</p>"
    } else if (y > 15){
      document.getElementById('yo').innerHTML =
       "<p style='color:red'>filed</p>"
    }else {
      document.getElementById('yo').innerHTML =
       "this is salary " + result ;
    }
}

var frinds = [];

frinds[0]="yasser";
frinds[1]="ahmed";
frinds[2]="hassan";

frinds.indexOf();

console.log(frinds);



















// var amount = document.getElementById('doller'),

//     dynamic = document.getElementById('yo'),

//     myInfo = document.getElementById('sel');

// myInfo.onchange = function(){

//     var result = amount.value * myInfo.value;

//     dynamic.innerHTML = result;
// };
