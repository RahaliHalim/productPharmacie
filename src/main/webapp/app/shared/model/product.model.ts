import { Moment } from 'moment';

export interface IProduct {
  id?: number;
  name?: string;
  code?: number;
  validationDate?: Moment;
  sellingPrice?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public code?: number,
    public validationDate?: Moment,
    public sellingPrice?: number
  ) {}
}
