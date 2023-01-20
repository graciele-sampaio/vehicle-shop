import { 
  Model,
  Schema,
  models,
  model,
  isValidObjectId,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema<T>;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findById(id);
  }
}

export default AbstractODM;