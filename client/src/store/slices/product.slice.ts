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

export const createProduct = createAsyncThunk(
  'productSlice/createProduct',
  async (product: any, { dispatch }) => {
    const categoryId = +product.categoryId;
    const userId = +product.userId;
    const price = +product.price;
    const year = +product.year;
    const title = product.title;
    const description = product.description;
    const status = product.status;
    const image = product.image;
      // const title = product.title;
      // const description = product.description;
      // const status = product.status;
      // const image = product.image;

    const myProduct = {
      categoryId, userId, price, year, title, description, status, image,
    };

    try {
      const newProduct = await productService.create(myProduct);
      dispatch(addProduct({ data: newProduct }));
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState:IStateProduct = {
  products: [],
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.data);
      console.log(action.payload.data, 'add');
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

export default productSliceReducer;
