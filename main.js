canvas = document.getElementById("key_canvas");
ctx = canvas.getContext("2d");

window.addEventListener("keydown", down_k);

function down_k(d){
    Keypressed = d.keyCode;
    console.log(Keypressed);

    if(Keypressed >=97 && Keypressed<=112)||(Keypressed >=65 && Keypressed <= 90){
        alphabet_keys();
        document.getElementById("key_pr").innerHTML = "You pressed and Alpabet key i.e. A-Z or a-z."
        console.log("alphabet key pressed");
    }
}
function alphabet_keys(){
    document."key_canvas".style.background-image = "alphabet_image.jpg";
}