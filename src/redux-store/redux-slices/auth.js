import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LOGIN_ERROR, REGISTRATION_ERROR } from '../../config/constants';
import { showToast } from '../../helpers/common';
import crossFetch from '../api/instance';
import actionTypes from '../constants/actionTypes'
import servicesEndpoint from '../constants/services';

export const registerAction = createAsyncThunk(
  actionTypes.REGISTER,
  async (param) => {
    return crossFetch({
      method: "POST",
      endpoint: servicesEndpoint.register,
      param
    });
  }
)
export const loginAction = createAsyncThunk(
  actionTypes.LOGIN,
  async (param) => {
    return crossFetch({
      method: "POST",
      endpoint: servicesEndpoint.login,
      param
    });
  }
)
export const profileAction = createAsyncThunk(
  actionTypes.PROFILE,
  async () => {
    return crossFetch({
      method: "POST",
      endpoint: servicesEndpoint.profile
    });
  }
)

const initialState = {
  value: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    testing: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.fulfilled, (state, action) => {
      const payload = action.payload;
      showToast({ success: payload?.success, message: payload.message });
    })
      .addCase(registerAction.rejected, () => {
        showToast({ success: false, message: REGISTRATION_ERROR });
      })
    builder.addCase(loginAction.fulfilled, (state, action) => {
      const payload = action.payload;
      showToast({ success: payload?.success, message: payload.message });
    })
      .addCase(loginAction.rejected, () => {
        showToast({ success: false, message: LOGIN_ERROR });
      })
    builder.addCase(profileAction.fulfilled, () => {

    })
      .addCase(profileAction.rejected, () => {

      })
  },
})

// Action creators are generated for each case reducer function
export const { testing } = authSlice.actions

export default authSlice.reducer