import { createReducer, on } from '@ngrx/store';
import { getData } from '../data';
import { Product } from '../entity/product';
import { addProduct } from './cart.actions';

export const intialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  intialCartEntries,
  on(addProduct, () => {
    return getData;
  }),
)


