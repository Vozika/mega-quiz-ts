import { useSelector, useDispatch } from "react-redux";
import { RootStore, useAppDispatch } from "../../store";

import {
  setStart,
  setMain,
  setModal,
  setSearch,
} from "../../features/structure/structureSlice";

import { switchRU, setOptions } from "../../features/options/optionsSlice";
import {
  setStatistics,
  setLocalStorageData,
} from "../../features/utilities/utilitiesSlice";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";

import Options from "../options/Options";
import Statistics from "../statistics/Statistics";

interface Props {
  startQuiz: () => void;
  toLocalStorage: () => void;
  preloadImage: () => void;
}

const Start = ({ startQuiz, toLocalStorage, preloadImage }: Props) => {
  const dispatch = useAppDispatch();

  const { interfaceText, options } = useSelector(
    (store: RootStore) => store.options
  );
  const { modal } = useSelector((store: RootStore) => store.structure);
  const { statistics, showFade } = useSelector(
    (store: RootStore) => store.utilities
  );

  // preloadImage();

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
        <Box
          component="img"
          src="./skyline.png"
          sx={{ height: "100%", width: "100%" }}
        ></Box>
      </Fade>

      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: 40,
            sm: 80,
            xl: 120,
          },
          fontWeight: "400",
          mt: 1.6,
        }}
      >
        {interfaceText.MAIN_TITLE}
      </Typography>
      <br />

      <Modal
        sx={{ height: "100%", width: "100%", p: 0, overflow: "auto" }}
        open={modal}
        onClose={() => {
          dispatch(setStatistics(false));
          dispatch(setOptions(false));
          dispatch(setModal(false));
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          {options && <Options startQuiz={startQuiz} />}
          {statistics && <Statistics toLocalStorage={toLocalStorage} />}
        </>
      </Modal>
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
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setStart(false));
            dispatch(setMain(true));
            startQuiz();
          }}
        >
          {interfaceText.START_QUIZ}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setOptions(true));
            dispatch(setStatistics(false));
            dispatch(setModal(true));
          }}
        >
          {interfaceText.OPTIONS}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setLocalStorageData());
            dispatch(setStatistics(true));
            dispatch(setModal(true));
          }}
        >
          {interfaceText.STATISTICS}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setStart(false));
            dispatch(setSearch(true));
          }}
        >
          {interfaceText.SEARCH}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(switchRU());
          }}
        >
          {interfaceText.CHANGE_LANGUAGE}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Start;
