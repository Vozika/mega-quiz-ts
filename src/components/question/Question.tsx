import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import { RootStore } from "../../store";

const Question = () => {
  const { question } = useSelector((store: RootStore) => store.engine);
  const { currentQuestion } = useSelector((store: RootStore) => store.score);
  const { showFade } = useSelector((store: RootStore) => store.utilities);
  const { numberOfQuestions, interfaceText } = useSelector(
    (store: RootStore) => store.options
  );

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
    <div>
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
        <Typography sx={question_object}>{question.object}</Typography>
      </Fade>
    </div>
  );
};

export default Question;
