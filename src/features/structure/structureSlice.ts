import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Structure {
  start: boolean;
  main: boolean;
  finish: boolean;
  modal: boolean;
  search: boolean;
}

const initialState: Structure = {
  start: true,
  main: false,
  finish: false,
  modal: false,
  search: false,
};

const structureSlice = createSlice({
  name: "structure",
  initialState,
  reducers: {
    setStart: (state, action: PayloadAction<boolean>) => {
      state.start = action.payload;
    },
    setMain: (state, action: PayloadAction<boolean>) => {
      state.main = action.payload;
    },
    setFinish: (state, action: PayloadAction<boolean>) => {
      state.finish = action.payload;
    },
    setModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    setSearch: (state, action: PayloadAction<boolean>) => {
      state.search = action.payload;
    },
  },
});

export const { setStart, setMain, setFinish, setModal, setSearch } =
  structureSlice.actions;

export default structureSlice.reducer;
