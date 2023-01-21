import Car from '../Domains/Car';
import Icar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: Icar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: Icar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    const carsArr = allCars.map((el) => this.createCarDomain(el));
    return carsArr;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const oneCar = await carODM.findById(id);
    const carsArr = this.createCarDomain(oneCar);
    return carsArr;
  }

  public async update(id: string, car: Icar) {
    const carODM = new CarODM();
    const updated = await carODM.update(id, car);
    console.log(updated);
    const updatedCar = this.createCarDomain(updated);
    return updatedCar;
  }
}

export default CarService;
