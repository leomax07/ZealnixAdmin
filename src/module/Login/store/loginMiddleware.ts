import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  API,
  DEFAULT_TOKEN_EXPIRY_DAY,
  REMEMBER_ME_EXPIRY_DAYS,
  TOKEN,
} from "../../../constants";
import { getRequest, postRequest } from "../../../utils/commonService";
import { LoginPayload } from "./loginTypes";

const tokenHanlder = (rememberMe: boolean, token: string) => {
  const EXPIRY_DAYS = rememberMe
    ? REMEMBER_ME_EXPIRY_DAYS
    : DEFAULT_TOKEN_EXPIRY_DAY;
  Cookies.set(TOKEN, token, { expires: EXPIRY_DAYS });
};

export const login = createAsyncThunk(
  "login/login",
  async ({ credentials, rememberMe }: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(API.LOGIN, credentials);
      tokenHanlder(rememberMe, data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "login/getCurrentUser",
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(API.CURRENT_USER);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  },
);
