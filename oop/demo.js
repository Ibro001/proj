function Player(name, nationality, position,run,skill,shoot,pass,dribble,header){
this.name = name;
this.nationality = nationality;
this.position = position;
this.run = run;
this.skill = skill;
this.shoot = shoot;
this.pass = pass;
this.dribble = dribble;
this.header = header;
this.soccer = function(){
    msg = this.name + "\n" + this.nationality + "\n" + this.position +"\n";
    msg += this.run +"\n" + this.skill +"\n" + this.shoot +"\n" + this.pass + "\n" + this.dribble + "\n" + this.header +"\n";
    alert(msg); 
}
}
function main(){
    playerA = new Player ("Cristiano Ronaldo", "Porturgal", "CF");
    playerA.run = 5;
    playerA.skill = 9;
    playerA.shoot = 10;
    playerA.pass = 20;
    playerA.dribble = 90;
    playerA.header = 10;

    playerB = new Player ("Lionel Messi", "Argentina", "AMF");
    playerB.run = 99;
    playerB.skill = 99;
    playerB.shoot = 99;
    playerB.pass = 99;
    playerB.dribble = 99;
    playerB.header = 99;
    playerA.soccer();
    playerB.soccer();
}
main();