import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/Car.service';
import { allCars, newCar, oneCar } from '../../mocks/car.mock';

describe('Testes para a camada service da rota /cars', function () {
  it('adiciona um carro com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(oneCar);

    const service = new CarService();
    const result = await service.create(newCar);

    expect(result).to.be.deep.equal(oneCar);
  });

  it('lista todos os carros com sucesso', async function () {
    Sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(allCars);
  });

  it('lista o carro com sucesso passando um id válido', async function () {
    Sinon.stub(Model, 'findById').resolves(oneCar);

    const service = new CarService();
    const result = await service.findById('63cc47450d9e747bfbc1e37a');

    expect(result).to.be.deep.equal(oneCar);
  });

  it('lança uma mensagem de erro passando um id inválido', async function () {
    Sinon.stub(Model, 'findById').resolves();

    try {
      const service = new CarService();
      await service.findById('63cc47');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('altera dados do carro com sucesso passando um id válido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(oneCar);

    const service = new CarService();
    const result = await service.update('63cc47450d9e747bfbc1e37a', newCar);

    expect(result).to.be.deep.equal(oneCar);
  });

  afterEach(function () {
    Sinon.restore();
  });
});
