import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";

import { resetLocalStorageData } from "../../features/utilities/utilitiesSlice";

import { setStatistics } from "../../features/options/optionsSlice";

import { setModal } from "../../features/structure/structureSlice";
import { RootStore, useAppDispatch } from "../../store";

const vh: number = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

interface Props {
  toLocalStorage: () => void;
}

const Statistics = ({ toLocalStorage }: Props) => {
  const dispatch = useAppDispatch();
  const { interfaceText } = useSelector((store: RootStore) => store.options);
  const { localStorageData, showFade } = useSelector(
    (store: RootStore) => store.utilities
  );

  function createData(name: string, value: string | null | boolean) {
    return { name, value };
  }

  function calculatePercent() {
    if (
      localStorageData.rightAnswers !== null &&
      localStorageData.wrongAnswers !== null
    ) {
      return (
        Number(localStorageData.rightAnswers) > 0 &&
        Math.round(
          (Number(localStorageData.rightAnswers) /
            (Number(localStorageData.rightAnswers) +
              Number(localStorageData.wrongAnswers))) *
            100
        ).toString()
      );
    } else return null;
  }

  const rows = [
    createData(
      interfaceText.All_TIME_RIGHT_ANSWERS,
      localStorageData.rightAnswers
    ),
    createData(
      interfaceText.All_TIME_WRONG_ANSWERS,
      localStorageData.wrongAnswers
    ),
    createData(interfaceText.RIGHT_ANSWERS_ON_AVERAGE, calculatePercent()),
    createData(interfaceText.LONGEST_IRON_MAN, localStorageData.ironManStreak),
    createData(
      interfaceText.IRON_MAN_ATTEMPTS,
      localStorageData.ironManAttempts
    ),
    createData(
      interfaceText.IRON_MAN_FINISHED,
      localStorageData.ironManFinished
    ),
    createData(interfaceText.OPTION5050_USED, localStorageData.option5050),
    createData(interfaceText.GAMES_FINISHED, localStorageData.gamesFinished),
  ];

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
            dispatch(setStatistics(false));
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
          {interfaceText.STATISTICS}
        </Typography>
      </Fade>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "1rem" }}>
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#1976d2",
                  }}
                >
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          localStorage.clear();
          toLocalStorage();
          dispatch(resetLocalStorageData());
        }}
      >
        {interfaceText.CLEAR_STATISTICS}
      </Button>
    </Box>
  );
};

export default Statistics;
