class Hero {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
       console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let Mago = new Hero("Arcus", "27", "Mago","Magia")
let Guerreiro = new Hero("Arcus", "27", "Guerreiro","uma Espada")
let Monge = new Hero("Arcus", "27", "Monge","Artes Marciais")
let Ninja = new Hero("Arcus", "27", "Ninja","Shuriken")

Guerreiro.atacar()

