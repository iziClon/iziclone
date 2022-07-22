import {
  createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { productService } from '../../services';
import { IStateProduct, IStateProducts } from '../../interfaces';

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

// export const createProduct = createAsyncThunk(
//   'productSlice/createProduct',
//   async (product:IProduct, { dispatch }) => {
//     try {
//       const newProduct = await productService.create(product);
//       dispatch(addProduct({ data: newProduct }));
//     } catch (e) {
//       console.log(e);
//     }
//   },
// );

const initialState:IStateProduct = {
  products: [],
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  reducers: {
    // addProduct: (state, action) => {
    //   state.products.push(action.payload.data);
    // },
    //
    // changeStatus: (state, action) => {
    //   // const item = state.text.find(item => item.id === action.payload.id);
    //   // Object.assign(item, {status: !item.status})
    //
    //   // const index = state.text.findIndex(item => item.id === action.payload.id);
    //   // const item = state.text[index];
    //   // item.status = !item.status
    //   // item.status?++state.completed:--state.completed
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

// export const { addProduct, changeStatus } = productSlice.actions;

export default productSliceReducer;
