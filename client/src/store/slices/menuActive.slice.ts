import {
     createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';
import {IStateActiveMenu} from "../../interfaces";



const initialState:IStateActiveMenu = {
    menuActive:false,
};

const activeMenuSlice = createSlice({
    name: 'activeMenuSlice',
    initialState,

    reducers: {},


});

const activeMenuSliceReducer = activeMenuSlice.reducer;

export default activeMenuSliceReducer;
