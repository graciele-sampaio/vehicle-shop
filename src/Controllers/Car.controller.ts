import { NextFunction, Request, Response } from 'express';
import Icar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: Icar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allCars = await this.service.findAll();
    return this.res.status(200).json(allCars);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const oneCar = await this.service.findById(id);
      if (!oneCar) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(oneCar);
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const oneCar = await this.service.findById(id);
      if (!oneCar) return this.res.status(404).json({ message: 'Car not found' });
      const updated = await this.service.update(id, body);
      return this.res.status(200).json(updated);
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      const oneCar = await this.service.findById(id);
      if (!oneCar) return this.res.status(404).json({ message: 'This car not was found' });
      await this.service.delete(id);
      return this.res.status(204).json();
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }
}

export default CarController;