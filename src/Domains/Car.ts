import Icar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(params: Icar) {
    super(params);
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }
}

export default Car;