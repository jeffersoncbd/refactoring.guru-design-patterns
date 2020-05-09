interface Table {
  type(): string
}

interface Chair {
  type(): string
  matchWith(table: Table): boolean
}

class AntiqueTable implements Table {
  public type() {
    return 'antigo'
  }
}

class ModernTable implements Table {
  public type() {
    return 'moderno'
  }
}

class AntiqueChair implements Chair {
  public type() {
    return 'antigo'
  }
  public matchWith(furniture: Table) {
    return furniture.type() === this.type()
  }
}

class ModernChair implements Chair {
  public type() {
    return 'moderno'
  }
  public matchWith(furniture: Table) {
    return furniture.type() === this.type()
  }
}

interface AbstractFactory {
  createTable(): Table
  createChair(): Chair
}

class AntiqueFurnitureFactory implements AbstractFactory {
  public createTable() {
    return new AntiqueTable()
  }
  public createChair() {
    return new AntiqueChair()
  }
}

class ModernFurnitureFactory implements AbstractFactory {
  public createTable() {
    return new ModernTable()
  }
  public createChair() {
    return new ModernChair()
  }
}

 // CLIENT CODE //

function clientCode(factory: AbstractFactory) {
  const table = factory.createTable()
  const chair = factory.createChair()
  console.log(`Mesa e cadeira do modelo ${chair.type()} foram fabricados`)
  console.log(`A cadeira ${chair.matchWith(table) ? '' : 'não'} combina com a mesa`)
}

console.log('')
clientCode(new AntiqueFurnitureFactory())
console.log('')
clientCode(new ModernFurnitureFactory())
console.log('')
