import { createSlice } from "@reduxjs/toolkit";

interface Score {
  rightAnswer: number;
  wrongAnswer: number;
  score: number;
  currentQuestion: number;
}

const initialState: Score = {
  rightAnswer: 0,
  wrongAnswer: 0,
  score: 0,
  currentQuestion: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setRightAnswer: (state) => {
      state.rightAnswer = state.rightAnswer + 1;
    },
    setWrongAnswer: (state) => {
      state.wrongAnswer = state.wrongAnswer + 1;
    },
    clearRightAnswer: (state) => {
      state.rightAnswer = initialState.rightAnswer;
    },
    clearWrongAnswer: (state) => {
      state.wrongAnswer = initialState.wrongAnswer;
    },
    setCurrentQuestion: (state) => {
      state.currentQuestion = state.currentQuestion + 1;
    },
    clearCurrentQuestion: (state) => {
      state.currentQuestion = initialState.currentQuestion;
    },
    setScore: (state) => {
      state.score = state.score + 1;
    },
    clearScore: (state) => {
      state.score = initialState.score;
    },
  },
});

export const {
  setRightAnswer,
  setWrongAnswer,
  clearRightAnswer,
  clearWrongAnswer,
  setCurrentQuestion,
  clearCurrentQuestion,
  setScore,
  clearScore,
} = scoreSlice.actions;

export default scoreSlice.reducer;
