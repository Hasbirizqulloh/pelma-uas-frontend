import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const SignUpUser = createAsyncThunk('user/SignUp', async (user, thunkAPI) => {
  try {
    const response = await axios.post('https://hasbi-api.faikarmocht.my.id/signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      confPassword: user.confPassword,
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LoginUser = createAsyncThunk('user/LoginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('https://hasbi-api.faikarmocht.my.id/login', {
      email: user.email,
      password: user.password,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMe = createAsyncThunk('user/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://hasbi-api.faikarmocht.my.id/me', {
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk('user/LogOut', async () => {
  await axios.delete('https://hasbi-api.faikarmocht.my.id/logout', {
    headers: {
      'content-type': 'application/json',
    },
  });
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get User Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // SignUp User
    builder.addCase(SignUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignUpUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(SignUpUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
