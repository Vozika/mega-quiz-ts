import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalStorageData {
  [key: string]: string | null;
}

interface Utilities {
  isButtonClicked: boolean;
  localStorageData: LocalStorageData;
  statistics: boolean;
  showFade: boolean;
  imageIsLoading: boolean;
}

const initialState: Utilities = {
  isButtonClicked: false,
  localStorageData: {
    ironManStreak: "0",
    ironManAttempts: "0",
    rightAnswers: "0",
    wrongAnswers: "0",
    option5050: "0",
    gamesFinished: "0",
    ironManFinished: "0",
  },
  statistics: false,
  showFade: true,
  imageIsLoading: true,
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    setIsButtonClicked: (state, action: PayloadAction<boolean>) => {
      state.isButtonClicked = action.payload;
    },
    setStatistics: (state, action: PayloadAction<boolean>) => {
      state.statistics = action.payload;
    },
    setLocalStorageData: (state) => {
      state.localStorageData = {
        ironManStreak: localStorage.getItem("ironManStreak"),
        ironManAttempts: localStorage.getItem("ironManAttempts"),
        rightAnswers: localStorage.getItem("rightAnswers"),
        wrongAnswers: localStorage.getItem("wrongAnswers"),
        option5050: localStorage.getItem("option5050"),
        gamesFinished: localStorage.getItem("gamesFinished"),
        ironManFinished: localStorage.getItem("ironManFinished"),
      };
    },
    resetLocalStorageData: (state) => {
      state.localStorageData = initialState.localStorageData;
    },
    setShowFade: (state, action: PayloadAction<boolean>) => {
      state.showFade = action.payload;
    },
    switchImageIsLoading: (state) => {
      state.imageIsLoading = !state.imageIsLoading;
    },
    setImageIsLoading: (state, action: PayloadAction<boolean>) => {
      state.imageIsLoading = action.payload;
    },
  },
});

export const {
  setIsButtonClicked,
  setStatistics,
  setLocalStorageData,
  resetLocalStorageData,
  setShowFade,
  switchImageIsLoading,
  setImageIsLoading
} = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
