import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import structureReducer from "./features/structure/structureSlice";
import utilitiesReducer from "./features/utilities/utilitiesSlice";
import optionsReducer from "./features/options/optionsSlice";
import scoreReducer from "./features/score/scoreSlice";
import engineReducer from "./features/engine/engineSlice";

export const store = configureStore({
  reducer: {
    structure: structureReducer,
    utilities: utilitiesReducer,
    options: optionsReducer,
    score: scoreReducer,
    engine: engineReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
