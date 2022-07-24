import {
    createAsyncThunk, createSlice, Draft, PayloadAction,
} from '@reduxjs/toolkit';

import { IStateAuth, IUser, IUserLoginData } from '../../interfaces';
import { authService } from '../../services';

const initialState: IStateAuth = {
    user: null,
    status: null,
    error: null,
};

export const createNewUser = createAsyncThunk(
    'authSlice/createNewUser',
    async (user: IUser) => {
        try {
            const newUser: IUser = await authService.signUp(user);
            console.log({
                user,
                newUser,
            });
            return { newUser };
        } catch (e) {
            return e;
        }
    },
);

export const loginNewUser = createAsyncThunk(
    'authSlice/loginNewUser',
    async (userLoginData: IUserLoginData) => {
        try {
            const newUser: IUser = await authService.login(userLoginData);
            console.log({
                userLoginData,
                newUser,
            });
            return { newUser };
        } catch (e) {
            return e;
        }
    },
);

export const logoutUser = createAsyncThunk(
    'authSlice/logoutUser',
    async () => {
        try {
            const response: string = await authService.logout();
            console.log({ response });
            return { response };
        } catch (e) {
            return e;
        }
    },
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.newUser;
        },
    },

    extraReducers: {
        [createNewUser.pending.type]:
            (state: Draft<IStateAuth>) => {
                state.status = 'pending';
                state.error = null;
            },
        [createNewUser.fulfilled.type]:
            (state: Draft<IStateAuth>, action) => {
                state.status = 'fulfilled';
                state.user = action.payload.newUser;
            },
        [createNewUser.rejected.type]:
            (state: Draft<IStateAuth>, action: PayloadAction<string>) => {
                state.status = 'reject';
                state.error = action.payload;
            },

        [loginNewUser.pending.type]:
            (state: Draft<IStateAuth>) => {
                state.status = 'pending';
                state.error = null;
            },
        [loginNewUser.fulfilled.type]:
            (state: Draft<IStateAuth>, action) => {
                state.status = 'fulfilled';
                state.user = action.payload.newUser;
            },
        [loginNewUser.rejected.type]:
            (state: Draft<IStateAuth>, action: PayloadAction<string>) => {
                state.status = 'reject';
                state.error = action.payload;
            },

        [logoutUser.pending.type]:
            (state: Draft<IStateAuth>) => {
                state.status = 'pending';
                state.error = null;
            },
        [logoutUser.fulfilled.type]:
            (state: Draft<IStateAuth>) => {
                state.status = 'fulfilled';
                state.user = null;
            },
        [logoutUser.rejected.type]:
            (state: Draft<IStateAuth>, action: PayloadAction<string>) => {
                state.status = 'reject';
                state.error = action.payload;
            },
    },
});

const authSliceReducer = authSlice.reducer;

export default authSliceReducer;
