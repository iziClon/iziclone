import { createSlice } from '@reduxjs/toolkit';

import { IStateActiveMenu } from '../../interfaces';

const initialState:IStateActiveMenu = {
  menuActive: false,
};

const activeMenuSlice = createSlice({
  name: 'activeMenuSlice',
  initialState,

  reducers: {
    setMenuActive(state, action) {
      state.menuActive = action.payload;
    },
  },
});

const activeMenuSliceReducer = activeMenuSlice.reducer;

export default activeMenuSliceReducer;

const { setMenuActive } = activeMenuSlice.actions;
export const activeMenuSliceActions = { setMenuActive };
