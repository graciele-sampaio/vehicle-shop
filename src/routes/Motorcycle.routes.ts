import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const motoRoutes = Router();

motoRoutes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
motoRoutes.get('/', (req, res, next) => new MotorcycleController(req, res, next).findAll());
motoRoutes.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).findById());
motoRoutes.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());
motoRoutes.delete('/:id', (req, res, next) => new MotorcycleController(req, res, next).delete());

export default motoRoutes;
