class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        let speed = 3;
        let strength = 3;
    }
    sayName(){
        console.log(`This Ninja is ${this.name} call them by any other name at your own peril...`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }
    speakWidsom(){
        super.drinkSake();
        let quotes = [`Appear weak when you are strong, and strong when you are weak.`, `The supreme art of war is to subdue the enemy without fighting.`, `Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.`, `Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.`]
        //4 quotes
        console.log(quotes[Math.floor(Math.random()*4)]);
    }
    showStats(){
        super.showStats();
        console.log(`Sensei ${this.name} also has Wisdom: ${this.wisdom}.`);
    }
}

let super_sensei = new Sensei(`Master Splinter`);
super_sensei.speakWidsom();
super_sensei.showStats();