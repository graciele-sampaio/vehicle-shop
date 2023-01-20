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
}

export default CarService;
