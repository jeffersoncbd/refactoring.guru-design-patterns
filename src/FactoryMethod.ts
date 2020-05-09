interface Vehicle {
  carry(): string
}

class Car implements Vehicle {
  public carry() {
    return 'entrega feita pela estrada'
  }
}

class Boat implements Vehicle {
  public carry() {
    return 'entrega feita pelo mar'
  }
}

abstract class Transports {
  public abstract makeVehicle(): Vehicle

  public makeDelivery() {
    const vehicle = this.makeVehicle()
    return `Transports -> ${vehicle.carry()}`
  }
}

class CarFactory extends Transports {
  public makeVehicle() {
    return new Car()
  }
}

class BoatFactory extends Transports {
  public makeVehicle() {
    return new Boat()
  }
}

// CLIENT CODE //

function makeDeliveryWith(transport: Transports) {
  console.log('App -> Iniciando entrega')
  console.log(transport.makeDelivery())
}

console.log('')
console.log('App -> Fabricando um carro')
const car = new CarFactory()
makeDeliveryWith(car)

console.log('')

console.log('App -> Fabricando um barco')
const boat = new BoatFactory()
makeDeliveryWith(boat)
console.log('')
