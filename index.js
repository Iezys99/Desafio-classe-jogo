class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                this.ataque = "magia"
                break
            case "guerreiro":
                this.ataque = "espada"
                break
            case "monge":
                this.ataque = "artes marciais"
                break
            case "ninja":
                this.ataque = "shuriken"
                break
        }
    }
}


let heroAlfa = new Hero("Igor", 28, "mago")
let heroBeta = new Hero("Juh", 22, "ninja")
let heroGama = new Hero("Chaw", 31, "guerreiro")


heroAlfa.atacar()
heroBeta.atacar()
heroGama.atacar()

console.log(`O ${heroAlfa.tipo} atacou usando ${heroAlfa.ataque}`)
console.log(`O ${heroBeta.tipo} atacou usando ${heroBeta.ataque}`)
console.log(`O ${heroGama.tipo} atacou usando ${heroGama.ataque}`)
