import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";

const Flag = () => {
  const { question } = useSelector((store: RootStore) => store.engine);

  const trueObject = question.answers.find(
    (element) => element.isCorrect === true
  );
  const id = trueObject ? trueObject.id : 0;
  const flag: string = "flag/" + id + ".svg";

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
