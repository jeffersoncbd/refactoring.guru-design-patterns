interface Item {
  level(): string
  processable(item: Item): boolean
}

interface Wood extends Item {}

interface Stone extends Item {}

class NormalQualityWood implements Item {
  public level() {
    return 'Normal'
  }
  public processable(item: Item) {
    return false
  }
}

class HighQualityWood implements Item {
  public level() {
    return 'High'
  }
  public processable(item: Item) {
    return item.level() === this.level()
  }
}

class NormalQualityStone implements Item {
  public level() {
    return 'Normal'
  }
  public processable(item: Item) {
    return false
  }
}

class HighQualityStone implements Item {
  public level() {
    return 'High'
  }
  public processable(item: Item) {
    return item.level() === this.level()
  }
}

interface AbstractFactory {
  getWood(): Wood
  getStone(): Stone
}

class NormalQualityItems implements AbstractFactory {
  constructor() {
    console.log('Game -> Pilha de itens normais criada')
  }
  public getWood() {
    return new NormalQualityWood()
  }
  public getStone() {
    return new NormalQualityStone()
  }
}

class HighQualityItems implements AbstractFactory {
  constructor() {
    console.log('Game -> Pilha de itens de qualidade alta criada')
  }
  public getWood() {
    return new HighQualityWood()
  }
  public getStone() {
    return new HighQualityStone()
  }
}

// CLIENT CODE //

function makeAxe(wood: Wood, stone: Stone) {
  return `Game -> Machado ${wood.processable(stone) ? 'foi' : 'não pode ser'} construido`
}

console.log('')
console.log('History -> Após conseguir bastante materiais os jogadores acabaram estragando suas ferramentas')
const normalQualityStack = new NormalQualityItems()
const highQualityStack = new HighQualityItems()

console.log('')
console.log('History -> O lenhador pegou uma pedra e um galho qualquer, e tentou fazer um machado')
const normalQualityWood = normalQualityStack.getWood()
const normalQualityStone = normalQualityStack.getStone()
console.log(makeAxe(normalQualityWood, normalQualityStone))

console.log('')
console.log('History -> O lenhador decidiu tentar novamente com um galho melhor:')
const highQualityWood = highQualityStack.getWood()
console.log(makeAxe(highQualityWood, normalQualityStone))

console.log('')
console.log('History -> O mineiro observando a tentativa, separou uma pedra melhor e entregou para o lenhador')
const highQualityStone = highQualityStack.getStone()
console.log(makeAxe(highQualityWood, highQualityStone))
console.log('')
