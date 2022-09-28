// import { Product } from './../entity/product';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../enitty/product';

export interface ProductGroup {
  product: Product;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state;
  }
);





