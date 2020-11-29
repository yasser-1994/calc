
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

var amount = document.getElementById('doller'),

    dynamic = document.getElementById('skils'),

    myCalc = document.getElementById('sel');

myCalc.onchange = function(){

    var result = amount.value * myCalc.value;

    dynamic.innerHTML = result;
};
