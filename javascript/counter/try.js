const count = document.getElementById("counter");
let co = 0;
increase.addEventListener( "click" ,function (){
    co = co + 1
    count.innerText = co
});
decrease.addEventListener( "click" ,function (){
    co = co - 1
    count.innerText = co
});
reset.addEventListener( "click" ,function (){
  
    count.innerText = 0
    co = 0;
});
