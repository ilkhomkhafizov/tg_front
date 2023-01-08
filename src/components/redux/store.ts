import { configureStore } from "@reduxjs/toolkit";
import { referenceApi } from './api/reference.api';

export const store = configureStore({
    reducer: {
        [referenceApi.reducerPath]: referenceApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(referenceApi.middleware)
})