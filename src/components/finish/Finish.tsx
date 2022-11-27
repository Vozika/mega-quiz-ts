import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";
import { RootStore } from "../../store";

interface Props {
  backToStart: () => void;
  playAgain: () => void;
}

const Finish = ({ playAgain, backToStart }: Props) => {
  const { numberOfQuestions, interfaceText } = useSelector(
    (store: RootStore) => store.options
  );
  const { rightAnswer } = useSelector((store: RootStore) => store.score);
  const { showFade } = useSelector((store: RootStore) => store.utilities);

  const perCent = Math.round((rightAnswer / numberOfQuestions.current) * 100);

  return (
    <Stack>
      <Fade
        in={showFade}
        timeout={{
          appear: 0,
          enter: 450,
          exit: 450,
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="baseline">
          <Avatar
            sx={{
              width: 128,
              height: 128,
              bgcolor:
                perCent === 100
                  ? "#2e7d32"
                  : perCent < 50
                  ? "#d32f2f"
                  : "#1976d2",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {perCent}%
            </Typography>
          </Avatar>
        </Stack>
      </Fade>

      <br />
      <Typography variant="h5">
        {rightAnswer} {interfaceText.OUT_OF} {numberOfQuestions.current}{" "}
        {interfaceText.QUESTIONS_CORRECT}
        <br />
      </Typography>
      <br />
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
        <Button variant="contained" onClick={() => playAgain()}>
          {interfaceText.PLAY_AGAIN}
        </Button>
        <Button variant="outlined" onClick={() => backToStart()}>
          {interfaceText.BACK_TO_START}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Finish;
