import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UseSelector , TypedUseSelectorHook, useSelector } from "react-redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, bookReducer)

export const store = configureStore({
    reducer: {
       bookSlice: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector