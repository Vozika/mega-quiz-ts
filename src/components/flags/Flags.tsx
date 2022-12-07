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
    // <Stack
    //   sx={{
    //     display: "flex",
    //     flexDirection: {
    //       xs: "column",
    //       sm: "column",
    //       xl: "row",
    //     },
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
      <Grid container columns={2} spacing={0}>
        {question.answers.map((answer) => {
          return (
            <Grid item xl={1} sx={{}}>
              <Button
                variant="contained"
                key={answer.id}
                color={
                  isButtonClicked && answer.isCorrect
                    ? "success"
                    : isButtonClicked && !answer.isCorrect && answer.color
                    ? "error"
                    : "primary"
                }
                sx={{
                  p: 0,
                  m: "4px",
                  display: answer.toHide && lessAnswers ? "none" : "inline",
                  width: {
                    xs: "fit-content",
                    sm: "fit-content",
                    xl: "fit-content",
                  },
                  height: {
                    xs: "auto",
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
                    component="img"
                    sx={{
                      width: {
                        xs: 250,
                        sm: 250,
                        xl: "auto",
                      },
                      height: {
                        xs: "auto",
                        sm: "auto",
                        xl: 170,
                      },
                      p: 0,
                      mb: 0,
                      mt: 1,
                      ml: 1,
                      mr: 1,
                      border: "1px solid white",
                    }}
                    alt="Flag"
                    src={"flag/" + answer.id + ".svg"}
                  />
                </Zoom>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    // </Stack>
  );
};

export default Flags;
