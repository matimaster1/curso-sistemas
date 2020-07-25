function buttonIgualhandler()
{
  let display= document.getElementById("display")
  let newValue= eval(display.getAttribute("value"));
  display.setAttribute("value", newValue);
}

let buttonigual=document.getElementById("buttonigual")
buttonigual.addEventListener("click",buttonIgualhandler)


function button6handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+6;
  display.setAttribute("value", newValue);
}

let button6=document.getElementById("button6")
button6.addEventListener("click",button6handler)

function button5handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+5;
  display.setAttribute("value", newValue);
}
let button5= document.getElementById("button5");
button5.addEventListener('click',button5handler)

function button4handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+4;
  display.setAttribute("value", newValue);
}
let button4= document.getElementById("button4");
button4.addEventListener('click',button4handler)

function button7handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+7;
  display.setAttribute("value", newValue);
}
let button7= document.getElementById("button7");
button7.addEventListener('click',button7handler)

function button8handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+8;
  display.setAttribute("value", newValue);
}
let button8= document.getElementById("button8");
button8.addEventListener('click',button8handler)

function button9handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+9;
  display.setAttribute("value", newValue);
}
let button9= document.getElementById("button9");
button9.addEventListener('click',button9handler)

function button1handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+1;
  display.setAttribute("value", newValue);
}
let button1= document.getElementById("button1");
button1.addEventListener('click',button1handler)


function button2handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+2;
  display.setAttribute("value", newValue);
}
let button2= document.getElementById("button2");
button2.addEventListener('click',button2handler)

function button3handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+3;
  display.setAttribute("value", newValue);
}
let button3= document.getElementById("button3");
button3.addEventListener('click',button3handler)

function button0handler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+0;
  display.setAttribute("value", newValue);
}
let button0= document.getElementById("button0");
button0.addEventListener('click',button0handler)

function buttonMashandler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+"+";
  display.setAttribute("value", newValue);
}
let buttonMas= document.getElementById("buttonMas");
buttonMas.addEventListener('click',buttonMashandler)

function buttonMenoshandler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+"-";
  display.setAttribute("value", newValue);
}
let buttonMenos= document.getElementById("buttonMenos");
buttonMenos.addEventListener('click',buttonMenoshandler)

function buttonPorhandler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+"*";
  display.setAttribute("value", newValue);
}
let buttonPor= document.getElementById("buttonPor");
buttonPor.addEventListener('click',buttonPorhandler)

function buttonDivididohandler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+"/";
  display.setAttribute("value", newValue);
}
let buttonDividido= document.getElementById("buttonDividido");
buttonDividido.addEventListener('click',buttonDivididohandler)

function buttonComahandler()
{
  let display= document.getElementById("display")
  let newValue= display.getAttribute("value")+".";
  display.setAttribute("value", newValue);
}
let buttonComa= document.getElementById("buttonComa");
buttonComa.addEventListener('click',buttonComahandler)

function buttonborrarhandler()
{
  let display= document.getElementById("display")
  let newValue="";
  display.setAttribute("value", newValue);
}
let buttonborrar= document.getElementById("buttonborrar");
buttonborrar.addEventListener('click',buttonborrarhandler)