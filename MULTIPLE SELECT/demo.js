function showChoices(){
    var selLanguage = document.getElementById("selLanguage");
    var result = "<h2> Your Langauge</h>";
        result +=  "<ul> \n";
        for (i=0; i < selLanguage.length; i++){
            currentOption = selLanguage[i];
            if (currentOption.selected == true){
                result += "  <li>" + currentOption.value +"<\/li> \n";
            }
        }
        result += "<\/ul> \n";
        output = document.getElementById("output");
        output.innerHTML = result;
}