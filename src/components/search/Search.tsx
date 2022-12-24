import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "../../store";
import { setSearchWord } from "../../features/utilities/utilitiesSlice";
import { Typography } from "@mui/material";

interface Props {
  backToStart: () => void;
}

const Search = ({ backToStart }: Props) => {
  const dispatch = useAppDispatch();
  const { interfaceText } = useSelector((store: RootStore) => store.options);
  const { data } = useSelector((store: RootStore) => store.engine);
  const { searchWord } = useSelector((store: RootStore) => store.utilities);

  function filterItem(option: string) {
    return option.toLowerCase().includes(searchWord.toLowerCase());
  }

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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h5" mb={2}>
          Type a country or a capital in English
        </Typography>
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
      </Box>

      {data
        .filter((item) => {
          if (filterItem(item.name.translations.en)) {
            return item;
          } else if (filterItem(item.capital.translations.en)) {
            return item;
          }
        })
        .map((item) => {
          if (searchWord !== "" && searchWord.length > 2) {
            return (
              <>
                <Zoom in={true} timeout={450}>
                  <Box
                    component="img"
                    src={"flag/" + item.id + ".svg"}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: 320,
                        xl: 420,
                      },
                      height: {
                        xs: "auto",
                        sm: "auto",
                        xl: "auto",
                      },
                      p: 0,
                      mb: 3,
                      mt: 3,
                      ml: 0,
                      mr: 0,
                    }}
                  />
                </Zoom>
                <Typography>
                  {item.name.translations.en} / {item.capital.translations.en}
                </Typography>
              </>
            );
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
