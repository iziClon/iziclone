import {
  createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { productService } from '../../services';
import { IProduct, IStateProduct, IStateProducts } from '../../interfaces';

export const getAllProducts = createAsyncThunk(
  'productSlice/getAllProducts',

  async () => {
    try {
      const products = await productService.getAll();

      return { product: products.data };
    } catch (e) {
      return e;
    }
  },
);

const initialState:IStateProduct = {
  products: [],
  product: null,
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.data);
    },
    // getAllProductByTitle: (state, action) => {
    //     state.products.push(action.payload.data);
    // },
  },

  extraReducers: {
    [getAllProducts.pending.type]:
            (state: Draft<IStateProduct>) => {
              state.status = 'pending';
              state.error = null;
            },
    [getAllProducts.fulfilled.type]:
            (
              state: Draft<IStateProduct>,
              action: PayloadAction<IStateProducts>,
            ) => {
              state.status = 'fulfilled';
              state.products = action.payload.product;
            },
    [getAllProducts.rejected.type]:
            (
              state: Draft<IStateProduct>,
              action: PayloadAction<string>,
            ) => {
              state.status = 'reject';
              state.error = action.payload;
            },
  },
});

const productSliceReducer = productSlice.reducer;

export const { addProduct } = productSlice.actions;

export const createProduct = createAsyncThunk<void, any>(
  'productSlice/createProduct',
  async (fullProduct, { dispatch }) => {
    try {
      const newProduct = await productService.create(fullProduct);
      dispatch(addProduct({ data: newProduct.product }));
    } catch (e) {
      console.log(e);
    }
  },
);

export default productSliceReducer;
