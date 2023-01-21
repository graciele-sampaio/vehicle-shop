import IVehicle from './IVehicle';

interface Icar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}

export default Icar;