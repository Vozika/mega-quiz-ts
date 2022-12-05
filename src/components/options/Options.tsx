import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CancelIcon from "@mui/icons-material/Cancel";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";
import {
  setNumberOfQuestions,
  switchFlip,
  switchShow5050,
  switchHideLetters,
  setOptions,
  switchRegion,
  switchIronMan,
  switchFlags,
  setHideLetters,
  setRegion,
} from "../../features/options/optionsSlice";

import {
  setStart,
  setMain,
  setModal,
} from "../../features/structure/structureSlice";

import { RootStore, useAppDispatch } from "../../store";

const vh: number = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

const options_title = {
  color: "#1976d2",
  fontFamily: "sans-serif",
  fontWeight: "400",
  fontSize: "1.3rem",
  justifyContent: "center",
  mb: 0,
};

interface Props {
  startQuiz: () => void;
}

const Options = ({ startQuiz }: Props) => {
  const dispatch = useAppDispatch();

  const {
    interfaceText,
    numberOfQuestions,
    show5050,
    hideLetters,
    flip,
    region,
    ironMan,
    flags,
  } = useSelector((store: RootStore) => store.options);

  const { showFade } = useSelector((store: RootStore) => store.utilities);

  return (
    <Box
      sx={{
        textAlign: "center",
        position: {
          xs: "absolute",
          sm: "absolute",
        },
        top: {
          xs: vh < 700 ? "0%" : "50%",
          sm: "50%",
        },
        left: {
          xs: "50%",
          sm: "50%",
        },
        transform: {
          xs: "translate(-50%, 0%)",
          sm: "translate(-50%, -50%)",
        },
        width: "min(90%, 700px)",
        bgcolor: "background.paper",
        border: "1px solid #bdbdbd",
        boxShadow: 24,
        p: 2,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <CancelIcon
          onClick={() => {
            dispatch(setOptions(false));
            dispatch(setModal(false));
          }}
        />
      </Stack>

      <Fade
        in={showFade}
        timeout={{
          appear: 0,
          enter: 450,
          exit: 450,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            top: -5,
            mb: 1,
          }}
        >
          {interfaceText.OPTIONS}
        </Typography>
      </Fade>

      <Typography sx={options_title}>
        {interfaceText.NUMBER_OF_QUESTIONS}
      </Typography>

      <FormControl>
        <RadioGroup
          row
          sx={{
            m: 0,
            p: 0,
            justifyContent: "center",
            backgroundColor: "white",
            position: "relative",
            left: 9,
          }}
        >
          {numberOfQuestions.options.map((option) => {
            return (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio sx={{ m: 0.5, p: 0 }} />}
                label={option}
                checked={numberOfQuestions.current === option ? true : false}
                onChange={() => {
                  dispatch(setNumberOfQuestions(option));
                }}
              />
            );
          })}
        </RadioGroup>

        <Divider
          sx={{
            mt: 1.5,
            mb: 0.8,
          }}
        />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.SHOW5050}
          checked={show5050 && !ironMan ? true : false}
          disabled={ironMan ? true : false}
          onChange={() => dispatch(switchShow5050())}
        />
        <Typography>{interfaceText.SHOW5050_DESC}</Typography>

        <Divider />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.FLIP}
          checked={flip ? true : false}
          onChange={() => {
            dispatch(switchFlip());
          }}
        />
        <Typography>{interfaceText.FLIP_DESC}</Typography>

        <Divider />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.REGION}
          disabled={flags ? true : false}
          checked={region ? true : false}
          onChange={() => {
            dispatch(switchRegion());
          }}
        />
        <Typography>{interfaceText.REGION_DESC}</Typography>

        <Divider />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.HIDE_LETTERS}
          checked={hideLetters ? true : false}
          disabled={flags ? true : false}
          onChange={() => dispatch(switchHideLetters())}
        />
        <Typography>{interfaceText.HIDE_LETTERS_DESC}</Typography>

        <Divider />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.FLAGS}
          checked={flags ? true : false}
          onChange={() => {
            dispatch(switchFlags());
            dispatch(setRegion(false));
            dispatch(setHideLetters(false));
          }}
        />
        <Typography>{interfaceText.FLAGS_DESC}</Typography>

        <Divider />

        <FormControlLabel
          sx={options_title}
          disableTypography
          control={<Checkbox />}
          label={interfaceText.IRON_MAN_MODE}
          checked={ironMan ? true : false}
          onChange={() => {
            dispatch(switchIronMan());
          }}
        />
        <Typography>{interfaceText.IRON_MAN_MODE_DESC}</Typography>
      </FormControl>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setOptions(false));
          dispatch(setModal(false));
          dispatch(setStart(false));
          dispatch(setMain(true));
          startQuiz();
        }}
      >
        {interfaceText.START_QUIZ}
      </Button>
      <br />
      <br />
    </Box>
  );
};

export default Options;
