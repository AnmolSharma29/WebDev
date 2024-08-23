//class
class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType(){
        console.log("Fuck Animal");
    }

    speak(){
        console.log("Hi there " + this.speaks);
    }
    walk(){
        console.log("I'm walking with " + this.legCount + " legs");
    }
}

//object
/* let dog = {
    name : "dog",
    legCount: 4,
    speaks : "bow bow"
}*/

//creating a new object
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");

//call function on object
cat.speak();
dog.walk();

Animal.myType();
//Animal.speak(); // Gives Error
//dog.myType(); //Gives Error