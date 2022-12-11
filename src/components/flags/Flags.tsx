import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootStore, useAppDispatch } from "../../store";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

import { setQuestionColor } from "../../features/engine/engineSlice";
import { switchImageIsLoading } from "../../features/utilities/utilitiesSlice";

interface Props {
  answerClicked: (isCorrect: boolean | undefined) => void;
}

const Flags = ({ answerClicked }: Props) => {
  const dispatch = useAppDispatch();

  const { question } = useSelector((store: RootStore) => store.engine);
  const { lessAnswers } = useSelector((store: RootStore) => store.options);
  const { isButtonClicked } = useSelector(
    (store: RootStore) => store.utilities
  );
  const { showFade, imageIsLoading } = useSelector(
    (store: RootStore) => store.utilities
  );

  const preloadSrcList: string[] = [];

  question.answers.map((answer) => {
    preloadSrcList.push("flag/" + answer.id + ".svg");
    console.log(preloadSrcList);
  });

  function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = img.onabort = function () {
        reject(src);
      };
      img.src = src;
    });
  }

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (const i of preloadSrcList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setTimeout(() => {
        dispatch(switchImageIsLoading());
      }, 900);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [question.answers]);

  return imageIsLoading ? (
    <Stack
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          xl: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      <CircularProgress sx={{ ml: 1, mt: 1, mr: 1 }} />
    </Stack>
  ) : (
    <Stack
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          xl: "row",
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        columns={{ xs: 2, xl: 4 }}
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: {
            xs: "auto",
            sm: "fit-content",
            xl: "fit-content",
          },
        }}
      >
        {question.answers.map((answer) => {
          return (
            <Grid item xs={1} xl={1} sm={2}>
              <Button
                key={answer.id}
                sx={{
                  p: 0,
                  m: 0,
                  border: `solid 5px ${
                    isButtonClicked && answer.isCorrect
                      ? "#2e7d32"
                      : isButtonClicked && !answer.isCorrect && answer.color
                      ? "#d32f2f"
                      : "white"
                  }`,
                  display: answer.toHide && lessAnswers ? "none" : "inline",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    xl: "fit-content",
                  },
                  height: {
                    xs: 100,
                    sm: "auto",
                    xl: "auto",
                  },
                }}
                onClick={() => {
                  dispatch(
                    setQuestionColor(
                      question.answers.findIndex((x) => x === answer)
                    )
                  );
                  !isButtonClicked && answerClicked(answer.isCorrect);
                }}
              >
                <Zoom in={true} timeout={450}>
                  <Box
                    sx={{
                      minWidth: {
                        xs: "auto",
                        sm: 320,
                        xl: 320,
                      },
                      height: {
                        xs: 70,
                        sm: 130,
                        xl: 170,
                      },
                      p: 0,
                      mb: 1,
                      mt: 1,
                      ml: 1,
                      mr: 1,
                      background: `url(${
                        "flag/" + answer.id + ".svg"
                      }) no-repeat`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                  />
                </Zoom>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Flags;
