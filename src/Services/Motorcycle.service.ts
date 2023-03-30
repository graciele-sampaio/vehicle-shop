import MOtorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motocycle: IMotorcycle | null): MOtorcycle | null {
    if (motocycle) {
      return new MOtorcycle(motocycle);
    }
    return null;
  }
  public async create(motorcycle: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const newMotorcycle = await motoODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const motoODM = new MotorcycleODM();
    const allMotorcycles = await motoODM.findAll();
    const motorcycleArr = allMotorcycles.map((el) => this.createMotorcycleDomain(el));
    return motorcycleArr;
  }

  public async findById(id: string) {
    const motoODM = new MotorcycleODM();
    const oneMotorcycle = await motoODM.findById(id);
    const motorcycleArr = this.createMotorcycleDomain(oneMotorcycle);
    return motorcycleArr;
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const updated = await motoODM.update(id, motorcycle);
    const updatedMoto = this.createMotorcycleDomain(updated);
    return updatedMoto;
  }

  public async delete(id: string) {
    const motoODM = new MotorcycleODM();
    const deleted = await motoODM.delete(id);
    const updatedCar = this.createMotorcycleDomain(deleted);
    return updatedCar; 
  }
}

export default MotorcycleService;
