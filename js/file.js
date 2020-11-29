
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

var frinds = [

  [5,8,6],
  [4,7,3],
  [ [11,12,15],['yasser'] ],
  [ [80,90,100],['hassan'] ],
  [ [110,120,130],['ahmed'] ],
  [ [140,150,160],['moh'] ]

];
var x = frinds.slice([3],[5])
console.log(x);


















// var amount = document.getElementById('doller'),

//     dynamic = document.getElementById('yo'),

//     myInfo = document.getElementById('sel');

// myInfo.onchange = function(){

//     var result = amount.value * myInfo.value;

//     dynamic.innerHTML = result;
// };


























