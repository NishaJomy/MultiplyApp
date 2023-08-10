const num1= Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionE1=document.getElementById("question");
const inputE1=document.getElementById("input");
questionE1.innerHTML=`What is ${num1} multiplied by ${num2} ?`;
const correctans =num1*num2;
const scoreE1=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
score=0;

}
const formE1=document.getElementById("form");
formE1.addEventListener("submit",()=>{

const userans= +inputE1.value;
if(userans==correctans){

score++;
updateLocalStorage();
}
else{

    score--;
    updateLocalStorage();
}})
function updateLocalStorage(){
localStorage.setItem("score",JSON.stringify(score) );}

scoreE1.innerText=`Score : ${score}`
