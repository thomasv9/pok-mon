class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(defender) {
        if (this.isLucky()) {
            const damage = this.attack - defender.defense;
            if (damage > 0) {
                defender.hp -= damage;
            }
        }
    }
}

const pokemon1 = new Pokemon("Artikodin", 70, 15, 200, 10);
const pokemon2 = new Pokemon("Giratina", 60, 30, 230, 20);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackPokemon(pokemon2);
    
    if (pokemon2.hp <= 0) {
        console.log(pokemon2.name + " KO " + pokemon1.name + " Win! ");
        break;
    }

    pokemon2.attackPokemon(pokemon1);
    
    if (pokemon1.hp <= 0) {
        console.log(pokemon1.name + " KO " + pokemon2.name + " Win! ");
        break;
    }
}

console.log(pokemon1.name + " a " + pokemon1.hp + " points de vie restants.");
console.log(pokemon2.name + " a " + pokemon2.hp + " points de vie restants.");
