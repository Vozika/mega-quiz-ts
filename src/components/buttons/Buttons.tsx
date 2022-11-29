import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";
import { switchLessAnswers } from "../../features/options/optionsSlice";
import { RootStore, useAppDispatch } from "../../store";

interface Props {
  backToStart: () => void;
}

const Buttons = ({ backToStart }: Props) => {
  const dispatch = useAppDispatch();
  const { show5050, interfaceText } = useSelector(
    (store: RootStore) => store.options
  );

  return (
    <div>
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
        {show5050 && (
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(switchLessAnswers());
            }}
          >
            {interfaceText.BUTTON_5050}
          </Button>
        )}

        <Button variant="outlined" onClick={() => backToStart()}>
          {interfaceText.BACK_TO_START}
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
