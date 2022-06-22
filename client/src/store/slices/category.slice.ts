import {
  createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { categoryService } from '../../services';
import { IStateCategory } from '../../interfaces';

export const getAllCategories = createAsyncThunk(
  'categorySlice/getAllCategories',

  async () => {
    try {
      const categories = await categoryService.getAll();

      return { category: categories.data };
    } catch (e) {
      return e;
    }
  },
);

const initialState:IStateCategory = {
  categories: [],
  status: null,
  error: null,
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,

  reducers: {},

  extraReducers: {
    [getAllCategories.pending.type]:
        (state: Draft<IStateCategory>) => {
          state.status = 'pending';
          state.error = null;
        },
    [getAllCategories.fulfilled.type]:
        (state: Draft<IStateCategory>, action: PayloadAction<any>) => {
          state.status = 'fulfilled';
          state.categories = action.payload.category;
        },
    [getAllCategories.rejected.type]:
        (state: Draft<IStateCategory>, action: PayloadAction<string>) => {
          state.status = 'reject';
          state.error = action.payload;
        },
  },
});

const categorySliceReducer = categorySlice.reducer;

export default categorySliceReducer;
