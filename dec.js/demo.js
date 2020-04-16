function checkName(){
    lblOutput = document.getElementById("lblOutput");
    txtInput = document.getElementById("txtInput");
    
    userName = txtInput.value;
    if (userName == "tim Barness lee"){
        lblOutput.innerHTML = "Thank You For Inventing HTML";
    }else{
        lblOutput.innerHTML = "Do I Know You?";
    }
}