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

export const createProduct = createAsyncThunk<void, IProduct>(
  'productSlice/createProduct',
  async (product, { dispatch }) => {
    try {
      const newProduct = await productService.create(product);
      dispatch(addProduct({ data: newProduct }));
    } catch (e) {
      console.log(e);
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
              // state.product = action.payload.data;
              // console.log(state.product,'state product');
            },
    [getAllProducts.rejected.type]:
            (
              state: Draft<IStateProduct>,
              action: PayloadAction<string>,
            ) => {
              state.status = 'reject';
              state.error = action.payload;
            },
    // [createProduct.pending.type]:
    //     (state: Draft<IStateProduct>) => {
    //         state.status = 'pending';
    //         state.error = null;
    //     },
    // [createProduct.fulfilled.type]:
    //     (
    //         state: Draft<IStateProduct>,
    //         action: PayloadAction<IStateCreateProduct>,
    //     ) => {
    //         state.status = 'fulfilled';
    //         state.product = action.payload.product;
    //         console.log(action.payload,'action')
    //     },
    // [createProduct.rejected.type]:
    //     (
    //         state: Draft<IStateProduct>,
    //         action: PayloadAction<string>,
    //     ) => {
    //         state.status = 'reject';
    //         state.error = action.payload;
    //     },
  },
});

const productSliceReducer = productSlice.reducer;

export const { addProduct } = productSlice.actions;

export default productSliceReducer;
