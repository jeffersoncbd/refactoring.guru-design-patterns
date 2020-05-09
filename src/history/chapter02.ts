import { NormalQualityItems, HighQualityItems, Wood, Stone } from '../examples/AbstractFactory'

function makeAxe(wood: Wood, stone: Stone) {
  return `Game -> Machado ${wood.processable(stone) ? 'foi' : 'não pode ser'} construido`
}

export default () => {
  console.log(`
  === Capítulo 02 ===
  `)

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
}