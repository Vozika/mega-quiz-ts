import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";

const Flag = () => {
  const { usedData } = useSelector((store: RootStore) => store.engine);

  const flag: string = "flag/" + usedData[usedData.length - 2].id + ".svg";

  return (
    <Box
      sx={{
        p: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="Flag"
        src={flag}
        imgProps={{ sx: { height: 128 } }}
        sx={{
          width: 128,
          height: 128,
          mt: 2,
          mb: 1,
          border: "solid 5px white",
        }}
      />
    </Box>
  );
};

export default Flag;
