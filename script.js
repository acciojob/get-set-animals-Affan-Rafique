class Animal {
    constructor(species) {
        this._species = species; // internal property
    }

    get species() {
        return this._species; // getter
    }

    makeSound() {
        return `The ${this.species} makes a sound`;
    }
}

class Dog extends Animal {
    bark() {
        console.log("bark");
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
