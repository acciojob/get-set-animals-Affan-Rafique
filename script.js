class Animal {
    constructor(species) {
        this._species = species; // internal property
    }

    get species() {
        return this._species; // getter
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`); // must log, not return
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof"); // test expects "woof", not "bark"
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr"); // test expects "purr"
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
