// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { spellApi } from "../service/api/apiRequest";
import favoriteSpellsReducer from "../service/features/favoriteSpellSlice";

const rootReducer = combineReducers({
  [spellApi.reducerPath]: spellApi.reducer,
  favoriteSpells: favoriteSpellsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteSpells"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      spellApi.middleware
    ),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "favoriteSpells",
    JSON.stringify(state.favoriteSpells.favoriteSpells)
  );
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
