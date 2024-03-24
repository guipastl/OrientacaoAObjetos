const { faker } = require('@faker-js/faker')

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return Math.random() > 0.5 ? 'Hi': 'Hello'
    }
}

const randomHuman = new Human(faker.person.firstName(), faker.number.int({ max: 99 }))

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`)

class Wizard extends Human {
    constructor(name, age, powers = []) {
        super(name, age)
        this.powers = [...powers]
    }

    showRandomPower() {
        if (this.powers.length <= 0) {
            return "I haven't developed any power yet, but I'm learning at Hogwartz!"
        } else {
            const randomIndex = Math.floor(Math.random() * this.powers.length)
            return this.powers[randomIndex]
        }
    }
}

const randomWizard = new Wizard(
    faker.person.firstName(),
    faker.number.int({ max: 150 }),
    [
        'Lumux Maxima',
        'Expecto Patronum',
        'Abracadabra'
    ]
)

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard.`)
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`)

const anotherRandomWizerd = new Wizard(faker.person.firstName(), faker.number.int({ max: 150}))

console.log(`${anotherRandomWizerd.greet()}, I'm ${anotherRandomWizerd.name}. I'm a wizard too.`)
console.log(`${anotherRandomWizerd.showRandomPower()}`)

class Gaucho extends Human {
    constructor(name, age) {
        super(name, age)
    }

    greet() {
        return 'E aí tchê'
    }
}

const randomGaucho = new Gaucho(faker.person.firstName(), faker.number.int({ max: 99}))

console.log(`${randomGaucho.greet()}, me chamo ${randomGaucho.name  }`)

class Mineiro extends Human {
    constructor(name, age) {
        super(name, age)
    }

    greet() {
        return 'Bão'
    }
}

const randomMineiro = new Mineiro(faker.person.firstName(), faker.number.int({ max: 99}))

console.log(`${randomMineiro.greet()}, michamo ${randomMineiro.name}`)
