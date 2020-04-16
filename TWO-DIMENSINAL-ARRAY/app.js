function main(){
    var output = "";
    var from = getCity;
    var to = getCity;
    var result = distance[from] [to];
    output = "the distance from" + cityName[from];
    output += "to" + cityName[to];
    output += "is" + result + "miles.";
    alert(output);
}
main ();

cityName = new Array("Indianapolis","New York","Tokyo","London");

distance = new Array(
    new Array (0,648, 6476,4000),
    new Array (648, 0, 6760, 3470),
    new Array (6476, 6760, 0, 5956),
    new Array (4000, 3470, 5956, 0)
);
function getCity(){
    var theCity = "";
    var cityMenu = "Choose a city by typing a number: \n";
        cityMenu += "0) Indianapolis \n";
        cityMenu += "1) New York \n";
        cityMenu += "2) Tokyo \n";
        cityMenu += "3) London \n";
        
        theCity = prompt(cityMenu);
        return theCity;
}

