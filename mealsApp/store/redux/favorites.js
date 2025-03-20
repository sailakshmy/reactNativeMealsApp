import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload?.id);
    },
    removeFavorite: (state, { payload }) => {
      const index = state?.ids?.indexOf(payload?.id);
      state?.ids?.splice(index, 1);
    },
  },
});

export const addFavorite = favoritesSlice?.actions?.addFavorite;
export const removeFavorite = favoritesSlice?.actions?.removeFavorite;

export default favoritesSlice.reducer;
