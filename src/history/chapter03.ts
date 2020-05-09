import { HouseBuilder } from '../examples/Builder'

export default () => {
  console.log(`
  === Capítulo 03 ===
  `)

  console.log('History -> Após várias horas coletando recursos os jogadores decidiram fazer uma casa.')
  const house = new HouseBuilder()

  console.log('')
  console.log('Lenhador -> Pessoal, dá para ver o que precisa para finalizar a construção:')
  house.showProgress()

  console.log('')
  console.log('History -> Cada um pegou uma tarefa e mãos a obra')
  house.produceColumn()
  house.produceColumn()
  house.produceColumn()
  house.produceWall()
  house.produceWall()

  console.log('')
  console.log('History -> Após muito trabalho eles foram verificar o progresso')
  house.showProgress()

  console.log('')
  console.log('History -> Um tempo depois:')
  house.produceColumn()
  house.produceWall()
  house.produceWall()
  house.produceDoor()
  house.produceRoof()
  console.log('')
}
