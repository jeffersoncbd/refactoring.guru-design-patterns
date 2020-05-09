interface Item {
  level(): string
  processable(item: Item): boolean
}

export interface Wood extends Item {}

export interface Stone extends Item {}

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

export { NormalQualityItems, HighQualityItems }
