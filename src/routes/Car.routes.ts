import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRoutes = Router();

carRoutes.post('/', (req, res, next) => new CarController(req, res, next).create());
carRoutes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
carRoutes.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
carRoutes.put('/:id', (req, res, next) => new CarController(req, res, next).update());

export default carRoutes;
