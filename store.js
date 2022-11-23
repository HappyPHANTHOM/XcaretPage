import { configureStore } from "@reduxjs/toolkit";
import reducerData from './slices/textSlice';

export const store = configureStore({
    reducer:{ textData: reducerData},
});