interface Builder {
  produceDoor(): void
  produceWall(): void
  produceRoof(): void
  produceColumn(): void
}

class House {
  public parts: string[] = []
}

class HouseBuilder implements Builder {
  private product: House

  constructor() {
    this.reset()
  }

  public reset() {
    this.product = new House
  }

  public produceColumn() {
    this.product.parts.push('columns')
  }
  public produceDoor() {
    this.product.parts.push('door')
  }
  public produceRoof() {
    this.product.parts.push('roof')
  }
  public produceWall() {
    this.product.parts.push('walls')
  }

  public getProduct() {
    const result = this.product
    this.reset()
    console.log(`Construido estrutura com: ${result.parts.join(', ')}`)
    return result
  }
}

class Director {
  builder: Builder

  setBuilder(builder: Builder) {
    this.builder = builder
  }

  buildSmallHouse() {
    console.log('Construindo casa pequena')
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()

    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()

    this.builder.produceRoof()
    this.builder.produceDoor()
  }

  buildLargeHouse() {
    console.log('Construindo casa grande')
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()
    this.builder.produceColumn()

    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()
    this.builder.produceWall()

    this.builder.produceRoof()
    this.builder.produceRoof()
    this.builder.produceDoor()
  }
}

// CLIENT CODE //

function clientCode(director: Director) {
  const builder = new HouseBuilder()
  director.setBuilder(builder)

  director.buildSmallHouse()
  builder.getProduct()

  director.buildLargeHouse()
  builder.getProduct()

  // SEM UM DIRETOR: //
  builder.produceColumn()
  builder.produceColumn()
  builder.produceRoof()
  builder.produceRoof()
  builder.getProduct()
}

const director = new Director()
clientCode(director)
