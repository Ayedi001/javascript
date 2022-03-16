//document.getElementById("count-el").innerText = 5
let countel= document.getElementById("count-el")
let saveel = document.getElementById("save-el")
let count = 0
function increment(){
    count = count + 1
    countel.textContent = count
}
let st="marwen"
let nd="ayedi"
let p = st + nd

function save(){
    let countStr = count + "-" + p + "-"
    saveel.textContent+= countStr
    countel.textContent = 0
    count = 0
   

}





