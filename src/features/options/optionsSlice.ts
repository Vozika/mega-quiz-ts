import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { interfaceEN } from "../../interface";
import { Language } from "../../interface";
import data from "../../data";

interface Options {
  show5050: boolean;
  flip: boolean;
  lessAnswers: boolean;
  numberOfQuestions: {
    current: number;
    options: number[];
  };
  numberOfAnswers: number;
  ironMan: boolean;
  ironManModal: boolean;
  hideLetters: boolean;
  interfaceText: Language;
  RU: boolean;
  EN: boolean;
  lang: string;
  statistics: boolean;
  options: boolean;
  region: boolean;
  flags: boolean;
}

const initialState: Options = {
  show5050: false,
  flip: false,
  lessAnswers: false,
  numberOfQuestions: {
    current: 10,
    options: [5, 10, 15, data.length],
  },
  numberOfAnswers: 4,
  ironMan: false,
  ironManModal: false,
  hideLetters: false,
  interfaceText: { ...interfaceEN },
  RU: false,
  EN: true,
  lang: "",
  statistics: false,
  options: false,
  region: false,
  flags: false,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    switchShow5050: (state) => {
      state.show5050 = !state.show5050;
    },
    setShow5050: (state, action: PayloadAction<boolean>) => {
      state.show5050 = action.payload;
    },
    switchLessAnswers: (state) => {
      state.lessAnswers = !state.lessAnswers;
    },
    setLessAnswers: (state, action: PayloadAction<boolean>) => {
      state.lessAnswers = action.payload;
    },
    switchFlip: (state) => {
      state.flip = !state.flip;
    },
    setFlip: (state, action: PayloadAction<boolean>) => {
      state.flip = action.payload;
    },
    setNumberOfQuestions: (state, action: PayloadAction<number>) => {
      state.numberOfQuestions.current = action.payload;
    },
    switchIronMan: (state) => {
      state.ironMan = !state.ironMan;
    },
    setIronManModal: (state, action: PayloadAction<boolean>) => {
      state.ironManModal = action.payload;
    },
    switchHideLetters: (state) => {
      state.hideLetters = !state.hideLetters;
    },
    setHideLetters: (state, action: PayloadAction<boolean>) => {
      state.hideLetters = action.payload;
    },
    setInterfaceText: (state, action: PayloadAction<Language>) => {
      state.interfaceText = action.payload;
    },
    setRU: (state, action: PayloadAction<boolean>) => {
      state.RU = action.payload;
    },
    switchRU: (state) => {
      state.RU = !state.RU;
    },
    setStatistics: (state, action: PayloadAction<boolean>) => {
      state.statistics = action.payload;
    },
    setOptions: (state, action: PayloadAction<boolean>) => {
      state.options = action.payload;
    },
    setTranslations: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    switchRegion: (state) => {
      state.region = !state.region;
    },
    switchFlags: (state) => {
      state.flags = !state.flags;
    },
    setRegion: (state, action: PayloadAction<boolean>) => {
      state.region = action.payload;
    },
  },
});

export const {
  switchShow5050,
  setShow5050,
  switchLessAnswers,
  setLessAnswers,
  switchFlip,
  setFlip,
  setNumberOfQuestions,
  switchIronMan,
  setIronManModal,
  switchHideLetters,
  setHideLetters,
  setInterfaceText,
  setRU,
  switchRU,
  setStatistics,
  setOptions,
  setTranslations,
  switchRegion,
  switchFlags,
  setRegion,
} = optionsSlice.actions;

export default optionsSlice.reducer;
