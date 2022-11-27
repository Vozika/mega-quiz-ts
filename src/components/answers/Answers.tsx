import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "../../store";

import Button from "@mui/material/Button";

import { setQuestionColor } from "../../features/engine/engineSlice";
import { Stack } from "@mui/material";

interface Props {
  answerClicked: (isCorrect: boolean | undefined) => void;
}

const Answers = ({ answerClicked }: Props) => {
  const dispatch = useAppDispatch();
  const { question, subject } = useSelector((store: RootStore) => store.engine);
  const { lessAnswers, hideLetters, lang } = useSelector(
    (store: RootStore) => store.options
  );
  const { isButtonClicked } = useSelector(
    (store: RootStore) => store.utilities
  );

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          xl: "row",
        },
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {question.answers.map((answer) => {
        const buttonText: string = answer[subject]["translations"][lang];
        const hiddenButtonText: string =
          buttonText[0] +
          buttonText.slice(1, buttonText.length - 1).replaceAll(/\S/g, "*") +
          buttonText.slice(-1);

        return (
          <Button
            variant="contained"
            key={answer.id}
            sx={{
              display: answer.toHide && lessAnswers ? "none" : "inline",
              width: {
                xs: "100%",
                xl: "25%",
              },
              lineHeight: 1.2,
              height: 50,
              letterSpacing: 1,
            }}
            color={
              isButtonClicked && answer.isCorrect
                ? "success"
                : isButtonClicked && !answer.isCorrect && answer.color
                ? "error"
                : "primary"
            }
            onClick={() => {
              dispatch(
                setQuestionColor(
                  question.answers.findIndex((x) => x === answer)
                )
              );
              !isButtonClicked && answerClicked(answer.isCorrect);
            }}
          >
            {!hideLetters
              ? buttonText
              : hideLetters && answer.isCorrect && isButtonClicked
              ? buttonText
              : hiddenButtonText}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Answers;
