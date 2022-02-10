let content = document.querySelector(".container")
const player1 = document.getElementById("submit1")
const player2 = document.getElementById("submit2")
const reset = document.getElementById("reset")
let score = document.querySelector(".score")
let player1_score = document.querySelector(".content4_sol")
let player2_score = document.querySelector(".content4_sağ")



//***********Olaylar */
player1.addEventListener("click",artış);
player2.addEventListener("click", artış);
reset.addEventListener("click",artış);
score.addEventListener("change",artış);



function artış(event) {

    if (event.target == player1) {
        var span1 = document.createElement("span");
        span1.setAttribute("class","content4_sol");
        span1.innerText = player1_score.innerText++ + 1;
        
    } else if (event.target == player2) {
        var span2 = document.createElement("span");
        span2.setAttribute("class","content4_sağ");
        span2.innerText = player2_score.innerText++ + 1;
    } else if (event.target == reset) {
        player1_score.innerText = 0;
        player2_score.innerText = 0;
    } else if (event.target == score) {
        var span3 = document.createElement("span");
        span3.appendChild(document.createTextNode(event.target.value));
    }

}



