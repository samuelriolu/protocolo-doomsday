const hero = {
    name: "Thor",
    team: "Vingadores",
    power: 98,
    weapons: ["Stormbreaker", "Mjolnir"],
    origin: { planet: "Asgard" }
    }

hero.name
console.log(hero.name);

hero["team"]
console.log(hero["team"]);
hero.origin.planet

console.log(hero.origin.planet);
hero.weapons[0]

console.log(hero.weapons[0]);

const key = "power"
hero[key]

hero.age
console.log(hero.age)

hero.power = 99
console.log(hero);

hero.nickname = "Deus do Trovão"
console.log(hero);

delete hero.nickname
console.log(hero);

for (const prop in hero) {
    console.log(`${prop}:`, hero[prop]);
}

Object.keys(hero)
Object.values(hero)

const { name, team } = hero
console.log(name, team);

const villain = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
        return `${this.name} atacou ${target}!`

    },
    powerUp(amount) {
        this.power += amount
        return this.power
    }
}

console.log(villain.attack("Thor"))
console.log(villain.powerUp(50))

const ref = hero

ref.power = 1

console.log(hero.power);
