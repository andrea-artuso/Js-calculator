var ac = document.getElementById('btnAC');
var equal = document.getElementById('btnEQ');
var box1 = document.getElementById('result-text');
var opBox = document.getElementById('operator');
var box2 = document.getElementById('result-text1');
var resBox = document.getElementById('final-text');
var partial = "";
var partial1 = "";
var result = 0;

var plus = 0;
var minus = 0;
var times = 0;
var divis = 0;

var operator = "";


ac.addEventListener("click", clear);

function addNumb(clicked_id){
  if (plus == 1 || minus == 1 || times == 1 || divis == 1){
    partial1 += clicked_id.slice(-1);
    showRes();
  } else {
    partial += clicked_id.slice(-1);
    showRes();
  }
}

function clear(){
  box1.innerHTML = "";
  opBox.innerHTML = "";
  box2.innerHTML = "";
  partial = "";
  partial1 = "";
  operator = "";
  resBox.innerHTML = "";
  plus = 0;
  minus = 0;
  times = 0;
  divis = 0;
}

function showRes(){
  if (partial == undefined){
    box1.innerHTML = "";
  }
  else {
    box1.innerHTML = partial;
  }
  if (partial1 == undefined){
    box2.innerHTML = "";
  }
  else {
    box2.innerHTML = partial1;
  }
  opBox.innerHTML = operator;
}

function add(){
  plus = 1;
  minus = 0;
  times = 0;
  divis = 0;
  operator = "+"
  resBox.innerHTML = "";
}
function sott(){
  plus = 0;
  minus = 1;
  times = 0;
  divis = 0;
  operator = "-"
  resBox.innerHTML = "";
}
function mult(){
  plus = 0;
  minus = 0;
  times = 1;
  divis = 0;
  operator = "×"
  resBox.innerHTML = "";
}
function divi(){
  plus = 0;
  minus = 0;
  times = 0;
  divis = 1;
  operator = "÷"
  resBox.innerHTML = "";
}

function finalRes(){
  if (plus == 1){
    result = parseFloat(partial) + parseFloat(partial1);
    partial = result;
    partial1 = "";
    box1.innerHTML = "";
    opBox.innerHTML = "";
    box2.innerHTML = "";
    resBox.innerHTML = result;
  }
  else if (minus == 1){
    result = parseFloat(partial) - parseFloat(partial1);
    partial = result;
    partial1 = "";
    box1.innerHTML = "";
    opBox.innerHTML = "";
    box2.innerHTML = "";
    resBox.innerHTML = result;
  }
  else if (times == 1){
    result = parseFloat(partial) * parseFloat(partial1);
    partial = result;
    partial1 = "";
    box1.innerHTML = "";
    opBox.innerHTML = "";
    box2.innerHTML = "";
    resBox.innerHTML = result;
  }
  else if (divis == 1){
    result = parseFloat(partial) / parseFloat(partial1);
    partial = result;
    partial1 = "";
    box1.innerHTML = "";
    opBox.innerHTML = "";
    box2.innerHTML = "";
    resBox.innerHTML = result;
  }
}
