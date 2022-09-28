import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../entity/product';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state;
  }
);





