var critter = new Object()
critter.name = "milo";
critter.age = 5;
critter.talk = function(){
    msg = "hi my name is " + critter.name;
    msg += " and i am " + critter.age + " years old";
    alert(msg);
}
critter.talk();
