import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data";
import { Item } from "../../data";

interface EngineSlice {
  data: typeof data;
  usedData: typeof data;
  question: { text: string; object: string; answers: typeof data };
  subject: string;
  object: string;
}

const initialState: EngineSlice = {
  data: data,
  usedData: [],
  question: { text: "", object: "", answers: [] },
  subject: "capital",
  object: "name",
};

const engineSlice = createSlice({
  name: "engine",
  initialState,
  reducers: {
    clearUsedData: (state) => {
      state.usedData.length = 0;
    },
    oneItemToUsedData: (state, action: PayloadAction<Item>) => {
      state.usedData = [action.payload];
    },
    spreadToUsedData: (state, action: PayloadAction<Item>) => {
      state.usedData = [...state.usedData, action.payload];
    },
    spreadToAnswers: (state, action: PayloadAction<Item[]>) => {
      state.question.answers = [...action.payload];
    },
    pushToAnswers: (state, action: PayloadAction<Item>) => {
      state.question.answers.push(action.payload);
    },
    randomizeAnswers: (state) => {
      state.question.answers.sort(() => {
        return 0.5 - Math.random();
      });
    },
    setQuestionText: (state, action: PayloadAction<string>) => {
      state.question.text = action.payload;
    },
    setQuestionObject: (state, action: PayloadAction<string>) => {
      state.question.object = action.payload;
    },
    setQuestionColor: (state, action: PayloadAction<number>) => {
      state.question.answers[action.payload].color = true;
    },
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
    setObject: (state, action: PayloadAction<string>) => {
      state.object = action.payload;
    },
  },
});

export const {
  clearUsedData,
  oneItemToUsedData,
  spreadToUsedData,
  spreadToAnswers,
  pushToAnswers,
  randomizeAnswers,
  setQuestionText,
  setQuestionObject,
  setQuestionColor,
  setSubject,
  setObject,
} = engineSlice.actions;

export default engineSlice.reducer;
