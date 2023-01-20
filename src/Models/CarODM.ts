import {
  Schema,
} from 'mongoose';
import Icar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<Icar> {
  constructor() {
    const schema = new Schema<Icar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async create(newCar: Icar): Promise<Icar> {
    return this.model.create({ ...newCar });
  }
}

export default CarODM;
