// favoriteSpellsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  FavoriteSpellsState, Spell } from "../../utils/types";

const initialState:FavoriteSpellsState={
  favoriteSpells: JSON.parse(localStorage.getItem("favoriteSpells") ?? "[]"),
};

const favoriteSpellsSlice = createSlice({
  name: "favoriteSpells",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Spell>) => {
      state.favoriteSpells.push(action.payload);
      localStorage.setItem(
        "favoriteSpells",
        JSON.stringify(state.favoriteSpells)
      );
    },
    removeFromFavorites: (state, action: PayloadAction<Spell>) => {
      state.favoriteSpells = state.favoriteSpells.filter(
        (spell) => spell.index !== action.payload.index
      );
      localStorage.setItem(
        "favoriteSpells",
        JSON.stringify(state.favoriteSpells)
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  favoriteSpellsSlice.actions;
export default favoriteSpellsSlice.reducer;
