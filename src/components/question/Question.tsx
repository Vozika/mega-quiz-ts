import { useSelector } from "react-redux";
import Flag from "../flag/Flag";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Item } from "../../data";

import { RootStore } from "../../store";

const Question = () => {
  const { question } = useSelector((store: RootStore) => store.engine);
  const { currentQuestion } = useSelector((store: RootStore) => store.score);
  const { showFade } = useSelector((store: RootStore) => store.utilities);
  const { numberOfQuestions, interfaceText, flip, flags } = useSelector(
    (store: RootStore) => store.options
  );

  const trueObject = question.answers.find(
    (element) => element.isCorrect === true
  );
  const id = trueObject ? trueObject.id : 0;
  const flag: string = "flag/" + id + ".svg";

  const objectLength: number = question.object.length;

  const question_object = {
    color: "#707070",
    fontWeight: "600",
    marginBottom: 2,
    p: 0,
    fontSize: {
      xs:
        question.object === "Центральноафриканская Республика"
          ? 25
          : objectLength > 13
          ? 32
          : 48,
      sm: 50,
      xl: 70,
    },
    lineHeight: {
      xs: 1.1,
    },
  };

  return (
    <Box>
      <Chip
        variant="outlined"
        label={`${currentQuestion} ${interfaceText.OUT_OF} ${numberOfQuestions.current}`}
      />
      <Typography variant="h5" sx={{ marginTop: 2, p: 0 }}>
        {question.text}
      </Typography>

      <Fade
        in={showFade}
        timeout={{
          appear: 0,
          enter: 450,
          exit: 450,
        }}
      >
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          {flags && flip ? (
            <Box
              component="img"
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",
                },
                height: {
                  xs: "auto",
                  sm: 250,
                  xl: 250,
                },
                border: "5px white solid",
                mt: 2,
                mb: 3,
              }}
              src={flag}
            />
          ) : null}
          {!flip && !flags ? <Flag /> : null}
          {(!flags && !flip) || (flip && !flags) || (flags && !flip) ? (
            <Typography sx={question_object}>{question.object}</Typography>
          ) : null}
        </Stack>
      </Fade>
    </Box>
  );
};

export default Question;
