const { faker, fa } = require('@faker-js/faker')

const Human = (name, age) => {
    return {
        name,
        age,
        greet() {
            return Math.random() > 0.5 ? 'Hi' : 'Hello'
        }
    }
}

const randomHuman = Human(faker.person.firstName(), faker.number.int({ max: 99 }))

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`)

const randomWizard = Human(faker.person.firstName(), faker.number.int({ max: 150 }))

randomWizard.powers = [
    'Oculus Reparo',
    'Alohomora',
    'Wingardium Leviosa'
]

const showRandomPower = (powers = []) => {
    if (powers.length <= 0) {
        return "I haven't developed any power yet, but I'm learning at Hogwartz!"
    } else {
        const randomIndex = Math.floor(Math.random() * powers.length)
        return powers[randomIndex]
    }
}

randomWizard.showRandomPower = showRandomPower

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard.`)
console.log(`Here is one of my powers: ${randomWizard.showRandomPower(randomWizard.powers)}`)

const anotherRandomWizard = Human(faker.person.firstName(), faker.number.int({ max: 150 }))

anotherRandomWizard.showRandomPower  = showRandomPower

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too.`)
console.log(`${randomWizard.showRandomPower()}`)

const randomGaucho = Human(faker.person.firstName(), faker.number.int({ max: 99 }))

randomGaucho.greet = () => 'E aí tchê'

console.log(`${randomGaucho.greet()}, me chamo ${randomGaucho.name}`)

const randomMineiro = Human(faker.person.firstName(), faker.number.int({ max: 99 }))

randomMineiro.greet = () => 'Bão!'

console.log(`${randomMineiro.greet()}, michamo ${randomMineiro.name}`)
