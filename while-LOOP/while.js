function getPassword(){
    var correct = "HTML5";
    var guess = "";
    while (guess != correct){
        guess = prompt("Password");
    }
    alert("You May Proceed");
}

function threeTries(){
    var correct = "ibro";
    var guess = "";
    var keepGoing= "true";
    var tries = 0;
    while (keepGoing){
        guess= prompt("Password");
        if (guess == correct){
            alert ("You May Proceed");
            keepGoing = false;
        }else{
            tries++;
            if (tries >= 3){
                alert ("To Many Tries.Launching Missile...");
                keepGoing = false;
            }
        }
    }
}