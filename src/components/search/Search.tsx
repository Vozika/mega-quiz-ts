import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "../../store";
import { setSearchWord } from "../../features/utilities/utilitiesSlice";

interface Props {
  backToStart: () => void;
}

const Search = ({ backToStart }: Props) => {
  const dispatch = useAppDispatch();
  const { interfaceText } = useSelector((store: RootStore) => store.options);
  const { data } = useSelector((store: RootStore) => store.engine);
  const { searchWord } = useSelector((store: RootStore) => store.utilities);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          xl: "column",
        },
        gap: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        label={interfaceText.SEARCH}
        id="search"
        defaultValue=""
        variant="filled"
        onChange={(event) => {
          dispatch(setSearchWord(event.target.value));
        }}
        sx={{
          width: "100%",
        }}
      />
      <br />
      {data
        .filter((item) => {
          if (
            item.name.translations.en
              .toLowerCase()
              .includes(searchWord.toLowerCase())
          ) {
            return item;
          } else if (
            item.capital.translations.en
              .toLowerCase()
              .includes(searchWord.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          if (searchWord !== "" && searchWord.length > 2) {
            return item.name.translations.en;
          }
        })}
      <br />

      <Button variant="outlined" onClick={() => backToStart()}>
        {interfaceText.BACK_TO_START}
      </Button>
    </Stack>
  );
};

export default Search;
