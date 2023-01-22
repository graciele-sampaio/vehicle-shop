import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import { allMotorcycles, newMotorcycle, oneMotorcycle } from '../../mocks/motorcycle.mock';

describe('Testes para a camada service da rota /motorcycles', function () {
  it('adiciona um carro com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(oneMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(newMotorcycle);

    expect(result).to.be.deep.equal(oneMotorcycle);
  });

  it('listar todos os carros com sucesso', async function () {
    Sinon.stub(Model, 'find').resolves(allMotorcycles);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(allMotorcycles);
  });

  it('listar o carro com sucesso passando um id válido', async function () {
    Sinon.stub(Model, 'findById').resolves(oneMotorcycle);

    const service = new MotorcycleService();
    const result = await service.findById('63cc47450d9e747bfbc1e37a');

    expect(result).to.be.deep.equal(oneMotorcycle);
  });

  it('lança uma mensagem de erro passando um id inválido', async function () {
    Sinon.stub(Model, 'findById').resolves();

    try {
      const service = new MotorcycleService();
      await service.findById('63cc47');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('alterar dados do carro com sucesso passando um id válido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(oneMotorcycle);

    const service = new MotorcycleService();
    const result = await service.update('63cc47450d9e747bfbc1e37a', newMotorcycle);

    expect(result).to.be.deep.equal(oneMotorcycle);
  });

  afterEach(function () {
    Sinon.restore();
  });
});
