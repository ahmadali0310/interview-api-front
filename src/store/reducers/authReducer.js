import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    is_auth: false,
    user: {}
}

export const register = createAsyncThunk(
    "register",
    async (data, thunkAPI) => {
        try {

            const result = await axios.post("http://127.0.0.1:8000/api/auth/signUp", data);

            return await result.data;
        } catch {
            return thunkAPI.rejectWithValue({
                message: "Something went wrong",
            });
        }
    }
);

export const login = createAsyncThunk(
    "login",
    async (data, thunkAPI) => {
        try {
            const result = await axios.post(
                "http://127.0.0.1:8000/api/auth/login",
                data
            );
            return await result.data;
        } catch {
            return thunkAPI.rejectWithValue({
                message: "Something went wrong",
            });
        }
    }
);


const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.is_auth = false;
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.is_auth = false;
            state.user = {};
        }).addCase(login.fulfilled, (state, action) => {
            if (action.payload.status === 'ok') {
                state.is_auth = true;
                state.user = action.payload;
                localStorage.setItem('token', action.payload.access_token);

            } else if (action.payload.status === 'error') {
                state.is_auth = false;
                state.user = {};
                if (localStorage.setItem('token', action.payload.access_token)) {
                    localStorage.removeItem('token');
                }
            }
        }).addCase(register.pending, (state) => {
            state.is_auth = false;
            state.user = {};
        }).addCase(register.fulfilled, (state, action) => {
            console.log(action.payload);
        });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;