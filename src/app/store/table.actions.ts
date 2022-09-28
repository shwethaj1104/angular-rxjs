import { createAction, props } from '@ngrx/store';
import { Product } from '../entity/product';

export const addProduct = createAction('Table items', props<Product>());

