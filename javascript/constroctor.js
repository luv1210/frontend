
class Animal{
    bark(){
        console.log("animal is bark..");
    }
}

class Dog extends Animal{
    bark(){
        super.bark();
        console.log("bhauuu bhauuu bhauuu");
    }
}

class Cats extends Animal{
    bark(){
        super.bark();
        console.log("miyauuuu miyauuu");
    }
} 

let dog= new Dog();
dog.bark();