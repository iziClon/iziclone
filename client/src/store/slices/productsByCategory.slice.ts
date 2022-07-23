import {
  createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { productService } from '../../services';
import { IStateProductsByCategory } from '../../interfaces/stateProductsByCategory.interface';
import { IProductByCategory } from '../../interfaces';

export const getAllProductsByCategory = createAsyncThunk(
  'productSlice/getAllProductsByCategory',

  async (categoryId :string) => {
    try {
      const productsByCategory = await productService.getProductsByCategory(+categoryId);

      return { allProductsByCategory: productsByCategory.data };
    } catch (e) {
      return e;
    }
  },
);

const initialState:IStateProductsByCategory = {
  productsByCategory: [],
  status: null,
  error: null,
};

const productsByCategorySlice = createSlice({
  name: 'productsByCategorySlice',
  initialState,

  reducers: {},

  extraReducers: {
    [getAllProductsByCategory.pending.type]:
            (state: Draft<IStateProductsByCategory>) => {
              state.status = 'pending';
              state.error = null;
            },
    [getAllProductsByCategory.fulfilled.type]:
            (state: Draft<IStateProductsByCategory>, action: PayloadAction<IProductByCategory>) => {
              state.status = 'fulfilled';
              state.productsByCategory = action.payload.allProductsByCategory;
            },
    [getAllProductsByCategory.rejected.type]:
            (state: Draft<IStateProductsByCategory>, action: PayloadAction<string>) => {
              state.status = 'reject';
              state.error = action.payload;
            },
  },
});

const productSByCategorySliceReducer = productsByCategorySlice.reducer;

export default productSByCategorySliceReducer;
