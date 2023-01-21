import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allMotorcycles = await this.service.findAll();
    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const oneMotorcycle = await this.service.findById(id);
      if (!oneMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(oneMotorcycle);
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const oneMotorcycle = await this.service.findById(id);
      if (!oneMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      const updated = await this.service.update(id, body);
      return this.res.status(200).json(updated);
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }
}

export default MotorcycleController;