import {
  createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { IImage, IStateImage, IStateImages } from '../../interfaces';
import { imageService } from '../../services';

export const getAllImages = createAsyncThunk(
  'imageSlice/getAllImages',

  async () => {
    try {
      const images = await imageService.getAll();

      return { image: images.data };
    } catch (e) {
      return e;
    }
  },
);

const initialState:IStateImage = {
  images: [],
  status: null,
  error: null,
};

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,

  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload.data);
    },
  },

  extraReducers: {
    [getAllImages.pending.type]:
            (state: Draft<IStateImage>) => {
              state.status = 'pending';
              state.error = null;
            },
    [getAllImages.fulfilled.type]:
            (
              state: Draft<IStateImage>,
              action: PayloadAction<IStateImages>,
            ) => {
              state.status = 'fulfilled';
              state.images = action.payload.image;
            },
    [getAllImages.rejected.type]:
            (
              state: Draft<IStateImage>,
              action: PayloadAction<string>,
            ) => {
              state.status = 'reject';
              state.error = action.payload;
            },
  },
});

const imageSliceReducer = imageSlice.reducer;

export const { addImage } = imageSlice.actions;

export const createImage = createAsyncThunk<void, IImage>(
  'imageSlice/createImage',
  async (image, { dispatch }) => {
    try {
      const newImage = await imageService.create(image);
      dispatch(addImage({ data: newImage }));
    } catch (e) {
      console.log(e);
    }
  },
);

export default imageSliceReducer;
