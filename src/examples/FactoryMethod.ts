interface Tool {
  executeFunction(): string
}

class Axe implements Tool {
  public executeFunction() {
    return 'Game -> jogador está cortando madeira e galhos com machado'
  }
}

class Seeds implements Tool {
  public executeFunction() {
    return 'Game -> jogador está plantando sementes de trigo e verduras'
  }
}

class Pickaxe implements Tool {
  public executeFunction() {
    return 'Game -> jogador está extraindo pedras e minerais com picareta'
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

export { LumberjackPlayer, FarmerPlayer, MinerPlayer }
