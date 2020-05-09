interface Builder {
  produceDoor(): void
  produceWall(): void
  produceRoof(): void
  produceColumn(): void
}

class House {
  columns = 0
  walls = 0
  doors = 0
  roofs = 0

  finished = false
}

export class HouseBuilder implements Builder {
  private product: House

  private getProgress() {
    const progressColumns = this.product.columns / 4 * 100
    const progressWalls = this.product.walls / 4 * 100
    const progressDoors = this.product.doors / 1 * 100
    const progressRoofs = this.product.roofs / 1 * 100

    return { progressColumns, progressWalls, progressDoors, progressRoofs }
  }

  constructor() {
    console.log('Game -> Projeto de casa instalado')
    this.product = new House
  }

  public showProgress() {
    const { progressColumns, progressWalls, progressDoors, progressRoofs } = this.getProgress()
    console.log(`Game -> Progresso da construção:
      ${this.product.columns}/4 columns (${progressColumns}%)
      ${this.product.walls}/4 walls (${progressWalls}%)
      ${this.product.doors}/1 doors (${progressDoors}%)
      ${this.product.roofs}/1 roofs (${progressRoofs}%)`)
  }

  public produceColumn() {
    this.product.columns += 1
    this.checkProgress()
  }
  public produceWall() {
    this.product.walls += 1
    this.checkProgress()
  }
  public produceDoor() {
    this.product.doors += 1
    this.checkProgress()
  }
  public produceRoof() {
    this.product.roofs += 1
    this.checkProgress()
  }

  private checkProgress() {
    const { progressColumns, progressWalls, progressDoors, progressRoofs } = this.getProgress()
    const total = progressColumns + progressWalls + progressDoors + progressRoofs
    if (total >= 400) {
      console.log('Game -> Casa construida')
      this.product.finished === true
    }
  }
}
