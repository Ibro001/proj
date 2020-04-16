function Critter(name, age){
    this.name = name;
    this.age = age;
    this.talk = function(){
        msg = "Hi! my name is " + this.name;
        msg += "i am " + this.age;
        alert(msg);
    }
}
function main(){
    critterA = new Critter("Alpha ", 1);

    critterB = new Critter("Beta ", 2)
    critterB.age = 5;
    critterB.name = "charlie ";

    critterA.talk();
    critterB.talk();
}
main();