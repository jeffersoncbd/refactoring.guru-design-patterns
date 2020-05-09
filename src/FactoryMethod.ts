interface Tool {
  executeFunction(): string
}

class Axe implements Tool {
  public executeFunction() {
    return 'Game -> cortando madeira e galhos com machado'
  }
}

class Seeds implements Tool {
  public executeFunction() {
    return 'Game -> plantando sementes de trigo e verduras'
  }
}

class Pickaxe implements Tool {
  public executeFunction() {
    return 'Game -> extraindo pedras e minerais com picareta'
  }
}

abstract class Player {
  protected abstract getTool(): Tool

  constructor(occupation: string) {
    console.log(`Game -> ${occupation} adicionado ao jogo`)
  }

  public work() {
    const tool = this.getTool()
    return tool.executeFunction()
  }
}

class LumberjackPlayer extends Player {
  constructor() {
    super('Lenhador')
  }
  getTool() {
    return new Axe()
  }
}

class FarmerPlayer extends Player {
  constructor() {
    super('Fazendeiro')
  }
  getTool() {
    return new Seeds()
  }
}

class MinerPlayer extends Player {
  constructor() {
    super('Mineiro')
  }
  getTool() {
    return new Pickaxe()
  }
}

// CLIENT CODE //

console.log('')
console.log('History -> 3 amigos começaram a jogar cada um em funções diferentes:')
const miner = new MinerPlayer()
const farmer = new FarmerPlayer()
const lumberjack = new LumberjackPlayer()

console.log('')
console.log('History -> Eles então começaram a buscar recursos para sobreviver e construir coisas')
console.log(miner.work())
console.log(farmer.work())
console.log(lumberjack.work())

console.log('') 
