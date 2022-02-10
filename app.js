const player1 = document.getElementById("submit1")
const player2 = document.getElementById("submit2")
const reset = document.getElementById("reset")
let score = document.querySelector(".score")
let player1_score = document.querySelector(".content4_sol")
let player2_score = document.querySelector(".content4_sağ")



//***********Olaylar */
player1.addEventListener("click",artış1);
player2.addEventListener("click", artış2);
reset.addEventListener("click",resett);
score.addEventListener("change",skor);



function skor(event) {
    let p = document.createElement("p")
    p.appendChild(document.createTextNode(event.target.value));
    console.log(p);
}







function resett(event) {
    player1_score.innerText = "0"
    player2_score.innerText = "0"
}
function artış1(event) {
    
    let a = player1_score.innerText++;

}



function artış2(event) {
    return player2_score.innerText++;
}

//*********Koşullar */



