let num1 = 8
let num2 = 2
document.getElementById("ex1").textContent = num1 
document.getElementById("ex2").textContent = num2



let sum = document.getElementById("sume")

function add(){
    sum.textContent = num1 + num2
    
}
function sub(){
    sum.textContent = num1 - num2
       
   }
   
   function div(){
    sum.textContent = num1 / num2
       
   }
   
   function mult(){
    sum.textContent = num1 * num2
       
   }
   
let a = ["marwen","ayedi"] 
for (let index = 0; index < 6; index++) {
    console.log(a[index])
    
}
