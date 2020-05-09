import { MinerPlayer, FarmerPlayer, LumberjackPlayer } from '../examples/FactoryMethod'

export default () => {
  console.log(`
  === Capítulo 01 ===
  `)

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
}
