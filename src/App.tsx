import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "./store";
import { Item } from "./data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { interfaceEN } from "./interface";
import { interfaceRU } from "./interface";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Start from "./components/start/Start";
import Question from "./components/question/Question";
import Answers from "./components/answers/Answers";
import Counter from "./components/counter/Counter";
import Buttons from "./components/buttons/Buttons";
import Finish from "./components/finish/Finish";

import {
  setScore,
  setRightAnswer,
  setWrongAnswer,
  setCurrentQuestion,
  clearScore,
  clearCurrentQuestion,
  clearRightAnswer,
  clearWrongAnswer,
} from "./features/score/scoreSlice";

import {
  setIsButtonClicked,
  setLocalStorageData,
  setShowFade,
} from "./features/utilities/utilitiesSlice";

import {
  setLessAnswers,
  setInterfaceText,
  setTranslations,
  setShow5050,
} from "./features/options/optionsSlice";

import {
  setMain,
  setFinish,
  setStart,
} from "./features/structure/structureSlice";

import {
  oneItemToUsedData,
  spreadToUsedData,
  spreadToAnswers,
  pushToAnswers,
  randomizeAnswers,
  setQuestionText,
  setQuestionObject,
  setSubject,
  setObject,
  clearUsedData,
} from "./features/engine/engineSlice";

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "white",
          },
        },
      ],
      defaultProps: {
        // The default props to change
        sx: {
          width: {
            xs: "100%",
            xl: "25%",
          },
          lineHeight: 1.2,
          height: 50,
          letterSpacing: 1,
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        // The default props to change
        sx: {
          mt: 2,
          mb: 0.8,
        },
      },
    },
  },
});

function App() {
  const dispatch = useAppDispatch();
  const { start, main, finish } = useSelector(
    (store: RootStore) => store.structure
  );

  const { isButtonClicked, localStorageData } = useSelector(
    (store: RootStore) => store.utilities
  );

  const {
    numberOfQuestions,
    numberOfAnswers,
    interfaceText,
    RU,
    lang,
    flip,
    region,
    ironMan,
    lessAnswers,
  } = useSelector((store: RootStore) => store.options);

  const { currentQuestion } = useSelector((store: RootStore) => store.score);

  const { data, usedData, subject, object } = useSelector(
    (store: RootStore) => store.engine
  );

  // Standart function for a random number
  function getRandom(a: number): number {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  function startQuiz(): void {
    //Writes the number of Iron Man attempts to local storage.
    if (ironMan) {
      const ironManAttempts = (
        Number(localStorage.getItem("ironManAttempts")) + 1
      ).toString();

      localStorage.setItem("ironManAttempts", ironManAttempts);
    }
    quiz();
  }

  //Writes info from state (localStorageData) to local storage for the first time(?)
  function toLocalStorage(): void {
    Object.keys(localStorageData).map(
      (data) => !localStorage.getItem(data) && localStorage.setItem(data, "0")
    );
  }

  //Writes the streak of right answers in Iron Man mode to local storage
  function ironManToLocalStorage(): void {
    if (currentQuestion > Number(localStorage.getItem("ironManStreak"))) {
      if (currentQuestion === numberOfQuestions.current && main) {
        localStorage.setItem("ironManStreak", currentQuestion.toString());
      } else {
        localStorage.setItem("ironManStreak", (currentQuestion - 1).toString());
      }
    }
  }

  //What happens when you make mistake in Iron Man mode
  function finishIronMan(): void {
    ironManToLocalStorage();
    dispatch(setMain(false));
    dispatch(setFinish(true));
    return;
  }

  //What happens when you finish the game
  function finishQuiz(): void {
    if (currentQuestion === numberOfQuestions.current && main) {
      localStorage.setItem(
        "gamesFinished",
        (Number(localStorage.getItem("gamesFinished")) + 1).toString()
      );
      if (ironMan) {
        ironManToLocalStorage();
        localStorage.setItem(
          "ironManFinished",
          (Number(localStorage.getItem("ironManFinished")) + 1).toString()
        );
      }
      dispatch(setMain(false));
      dispatch(setFinish(true));
      return;
    }
  }

  //This is a more complex solution, but I decided to use it just for education and experience:-)
  //Sets propety named 'color' for object that goes to question.answers
  //For making different color buttons in Answers.jsx
  function propertyUsingObject(object: Item): void {
    Object.defineProperties(object, {
      color: {
        value: false,
        writable: true,
      },
    });
  }

  // Chooses randomly an object from the data array which will be the object of the question
  // StructuredClone makes a deep copy of an object
  function sliceItemFromData(): Item {
    const randomNumber = getRandom(data.length);
    const itemFromData: Item = structuredClone(
      data.slice(randomNumber, randomNumber + 1)[0]
    );
    itemFromData.isCorrect = true;
    propertyUsingObject(itemFromData);

    return itemFromData;
  }

  //Checks if the usedData array already has an object, that has been used before in question
  // Prevents re-appearing of the same question object
  function checkUsedData(): void {
    const itemFromData = sliceItemFromData();

    const match = usedData.find((item) => item.id === itemFromData.id);

    if (match === undefined) {
      dispatch(spreadToUsedData(itemFromData));
    } else {
      checkUsedData();
    }
  }

  //Main core mechanic. Sets wrong answers and a true one into the array
  function setAnswers(): void {
    const wrongAnswers: Item[] = [];

    function wrong(): void {
      while (wrongAnswers.length < numberOfAnswers - 1) {
        const randomNumber = getRandom(data.length);
        const itemFromData: Item = structuredClone(
          data.slice(randomNumber, randomNumber + 1)[0]
        );

        if (
          //Both for flip and region
          itemFromData[object]["translations"]["en"] !==
            usedData[usedData.length - 1][object]["translations"]["en"] &&
          itemFromData[subject]["translations"]["en"] !==
            usedData[usedData.length - 1][subject]["translations"]["en"] &&
          wrongAnswers.find(
            (item) =>
              item[subject]["translations"]["en"] ===
              itemFromData[subject]["translations"]["en"]
          ) === undefined
        ) {
          itemFromData.isCorrect = false;
          propertyUsingObject(itemFromData);
          wrongAnswers.push(itemFromData);
        } else {
          wrong();
        }
      }
    }
    wrong();

    // Sets 2 wrong answers to hide when show5050 (in options) and lessAnswers (buttons) are active
    wrongAnswers[0].toHide = true;
    wrongAnswers[1].toHide = true;

    dispatch(spreadToAnswers(wrongAnswers));
    dispatch(pushToAnswers(usedData[usedData.length - 1]));
    dispatch(randomizeAnswers());
  }

  //Sets the question text
  function questionText(): string {
    let questionText: string = "";

    switch (true) {
      case flip && region:
        questionText = interfaceText.QUESTION_REGION_TEXT_FLIP;
        break;
      case flip:
        questionText = interfaceText.QUESTION_TEXT_FLIP;
        break;
      case region:
        questionText = interfaceText.QUESTION_REGION_TEXT;
        break;
      default:
        questionText = interfaceText.QUESTION_TEXT;
    }

    return questionText;
  }

  //Chooses the question, sets it into the engine(?)
  function setQuestion(): void {
    dispatch(setQuestionText(questionText()));
    dispatch(
      setQuestionObject(
        usedData[usedData.length - 1][object]["translations"][lang]
      )
    );
  }

  function quiz(): void {
    dispatch(setShowFade(true));
    finishQuiz();
    dispatch(setCurrentQuestion());
    checkUsedData();
    setAnswers();
    setQuestion();
    dispatch(setIsButtonClicked(false));
  }

  //What happens when you click the answer
  function answerClicked(isCorrect: boolean | undefined): void {
    if (!isButtonClicked) {
      if (lessAnswers) {
        localStorage.setItem(
          "option5050",
          (Number(localStorage.getItem("option5050")) + 1).toString()
        );
      }
      if (isCorrect) {
        dispatch(setScore());
        dispatch(setRightAnswer());
        localStorage.setItem(
          "rightAnswers",
          (Number(localStorage.getItem("rightAnswers")) + 1).toString()
        );
      } else {
        localStorage.setItem(
          "wrongAnswers",
          (Number(localStorage.getItem("wrongAnswers")) + 1).toString()
        );
        if (ironMan) {
          setTimeout(() => {
            finishIronMan();
          }, 900);
        }

        dispatch(setWrongAnswer());
      }
    }
    dispatch(setShowFade(false));
    setTimeout(() => {
      dispatch(setLessAnswers(false));
      quiz();
    }, 900);
    dispatch(setIsButtonClicked(true));
  }

  //Clears all scores and counters
  function clearAllScores(): void {
    dispatch(clearCurrentQuestion());
    dispatch(clearRightAnswer());
    dispatch(clearWrongAnswer());
    dispatch(clearScore());
    dispatch(setLessAnswers(false));
  }

  //Sends the first country to the array
  function firstSlice(): void {
    const itemFromData: Item = sliceItemFromData();
    propertyUsingObject(itemFromData);
    dispatch(oneItemToUsedData(itemFromData));
  }

  function clearAndRefresh(): void {
    if (numberOfQuestions.current === data.length) {
      dispatch(clearUsedData());
      firstSlice();
    }
  }

  function backToStart(): void {
    clearAllScores();
    clearAndRefresh();
    main && dispatch(setMain(false));
    finish && dispatch(setFinish(false));
    dispatch(setStart(true));
  }

  //Clears the array of used countries when its length is 195 (all countries)
  function refreshUsedData(): void {
    if (usedData.length === data.length) {
      dispatch(oneItemToUsedData(usedData[usedData.length - 1]));
    }
  }

  function playAgain(): void {
    if (ironMan) {
      localStorage.setItem(
        "ironManAttempts",
        (Number(localStorage.getItem("ironManAttempts")) + 1).toString()
      );
    }
    clearAllScores();
    clearAndRefresh();
    dispatch(setFinish(false));
    dispatch(setMain(true));
    quiz();
  }

  function preloadImage(): void {
    if (usedData.length !== 0) {
      const img = new Image();
      img.src = "flag/" + usedData[usedData.length - 1].id + ".svg";
    }
  }

  useEffect(() => {
    clearAndRefresh();
  }, [numberOfQuestions.current]);

  //Sends the first country to the array at start
  useEffect(() => {
    firstSlice();
  }, []);

  useEffect(() => {
    setLocalStorageData();
  }, []);

  useEffect(() => {
    toLocalStorage();
  }, []);

  //Changes the subject and the object
  useEffect(() => {
    if (flip && !region) {
      dispatch(setSubject("name"));
      dispatch(setObject("capital"));
    } else if (flip && region) {
      dispatch(setSubject("name"));
      dispatch(setObject("region"));
    } else if (region) {
      dispatch(setSubject("region"));
      dispatch(setObject("name"));
    } else {
      dispatch(setSubject("capital"));
      dispatch(setObject("name"));
    }
  });

  //Sets languages
  useEffect(() => {
    if (!RU) {
      dispatch(setInterfaceText(interfaceEN));
      dispatch(setTranslations("en"));
    }
    if (RU) {
      dispatch(setInterfaceText(interfaceRU));
      dispatch(setTranslations("ru"));
    }
  });

  //Stops 50/50 if Iron Man is active
  useEffect(() => {
    if (ironMan) {
      dispatch(setShow5050(false));
    }
  });

  useEffect(() => {
    refreshUsedData();
  }, [usedData]);

  useEffect(() => {
    preloadImage();
  }, [usedData]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            p: 3,
            width: {
              xs: "100%",
              sm: "800px",
              xl: "1500px",
            },
          }}
        >
          {start && (
            <Start
              startQuiz={startQuiz}
              toLocalStorage={toLocalStorage}
              preloadImage={preloadImage}
            />
          )}
          {main && (
            <Stack>
              <Question />
              <Answers answerClicked={answerClicked} />
              <Counter />
              <Buttons backToStart={backToStart} />
            </Stack>
          )}
          {finish && <Finish playAgain={playAgain} backToStart={backToStart} />}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
