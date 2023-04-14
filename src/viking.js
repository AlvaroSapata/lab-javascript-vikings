// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  //declaramos todas las propiedades
  constructor(name, health, strength) {
    //vinculamos las propiedades viejas
    super(health, strength);
    //creamos la variable nueva
    this.name = name;
  }

  //declaramos todas las variables
  receiveDamage(damage) {
    super.receiveDamage(damage);
    //condicionales en funcion de la vida
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    //declaramos las armadas como arrays vacios
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  //* metodos
  // añadimos 1 vikingo por declaracion con el .push
  addViking = (viking) => {
    this.vikingArmy.push(viking);
  };
  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  };

  vikingAttack = () => {
    if(this.saxonArmy.length === 0){
        return "No saxons to atatck";
    }
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];

    const result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return result;
  };

  saxonAttack = () => {
    if(this.saxonArmy.length === 0){
        return "No vikings to attack";
    }
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const saxon = this.saxonArmy[randomSaxon];
    const viking = this.vikingArmy[randomViking];

    const result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return result;
  };

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

// Crear dos ejércitos
const vikingArmy = [];
const saxonArmy = [];

// Crear un objeto War
const war = new War(vikingArmy, saxonArmy);

console.log(`Hay ${vikingArmy.length} unidades en la armada de los vikingos`)

let viking1 = new Viking("Jorge", 120, 50);
let viking2 = new Viking("Caro", 100, 70);
let viking3 = new Viking("Ruth", 150, 60);

vikingArmy.push(viking1);
vikingArmy.push(viking2);
vikingArmy.push(viking3);

console.log(`Hay ${vikingArmy.length} unidades en la armada de los vikingos`)

console.log(`Hay ${saxonArmy.length} unidades en la armada de los sajones`)

let saxon1 = new Saxon(60, 30);
let saxon2 = new Saxon(80, 40);
let saxon3 = new Saxon(50, 25);
let saxon4 = new Saxon(60, 30);
let saxon5 = new Saxon(80, 40);
let saxon6 = new Saxon(50, 25);
let saxon7 = new Saxon(60, 30);
let saxon8 = new Saxon(80, 40);
let saxon9 = new Saxon(50, 25);
saxonArmy.push(saxon1);
saxonArmy.push(saxon2);
saxonArmy.push(saxon3);
saxonArmy.push(saxon4);
saxonArmy.push(saxon5);
saxonArmy.push(saxon6);
saxonArmy.push(saxon7);
saxonArmy.push(saxon8);
saxonArmy.push(saxon9);


console.log(`Hay ${saxonArmy.length} unidades en la armada de los sajones`)

//! preguntar por que me esta cogiendo como que el array de los sajones esta vacio ????

// Atacan los vikingos
console.log(war.showStatus());
console.log(war.vikingAttack());

// Atacan los sajones
console.log(war.showStatus());
console.log(war.saxonAttack());

// La batalla queda en empate
console.log(war.showStatus());
