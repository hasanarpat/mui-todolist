import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  const multiline = true;
  let marginLeft = props.marginLeft;
  const DeleteItem = () => {
    props.setItems((els) => [...els.filter((el) => el.title !== props.title)]);
  };
  return (
    <Box
      flex={2}
      mt={10}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "25px",
        outline: "2px solid rgb(255, 123, 12,.3) ",
        padding: "0 25px",
        maxWidth: "320px",
        width: "100%",
        position: "relative",
        ml: { sm: marginLeft, xs: 0 },
        mr: { sm: 15, xs: 0 },
      }}
    >
      <TextField
        sx={{ maxWidth: "480px", mb: 5, mt: 3 }}
        fullWidth
        id="standard-basic"
        label="To-Do"
        variant="standard"
        color="warning"
        value={props.title}
      />
      <TextField
        sx={{ maxWidth: "480px", mb: 5, color: "white" }}
        fullWidth
        id="standard-basic"
        label="Description"
        variant="standard"
        color="warning"
        multiline={multiline}
        rows={multiline ? 4 : 1}
        value={props.text}
      />
      <IconButton style={{ color: "grey" }} onClick={DeleteItem}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Note;
