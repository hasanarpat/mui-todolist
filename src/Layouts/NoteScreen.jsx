import { IconButton, TextField } from "@mui/material";
import axios from "axios";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Note from "../Components/Note";
const NoteScreen = () => {
  const [multiline, setMultiLine] = useState(false);
  const [item, setItem] = useState({
    title: "",
    text: "",
  });
  const [items, setItems] = useState([]);
  const AddItem = () => {
    const sendItem = {
      title: item.title,
      text: item.text,
    };
    axios({
      method: "POST",
      url: "http://localhost:8000/",
      contentType: "application/json",
      data: { sendItem },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:8000/").then((response) => {
      setItems(response.data);
    });
  }, [items]);
  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          mt={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
            outline: "5px solid rgb(255, 123, 12,.3) ",
            padding: "0 25px",
            maxWidth: "480px",
            width: "100%",
            position: "relative",
          }}
        >
          <TextField
            sx={{ maxWidth: "520px", mb: 5, mt: 3 }}
            fullWidth
            id="standard-basic"
            label="Add Title"
            variant="standard"
            color="warning"
            value={item.title}
            onChange={(e) => {
              e.preventDefault();
              setItem((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
              console.log(item);
            }}
          />
          <TextField
            sx={{ maxWidth: "520px", mb: 5, color: "white" }}
            fullWidth
            id="standard-basic"
            label="Add Note"
            variant="standard"
            color="warning"
            multiline={multiline}
            rows={multiline ? 4 : 1}
            onFocus={(e) => {
              e.preventDefault();
              setMultiLine(true);
            }}
            onChange={(e) => {
              e.preventDefault();
              setItem((prevState) => ({
                ...prevState,
                text: e.target.value,
              }));
              console.log(item);
            }}
            value={item.text}
          />
          <IconButton
            sx={{
              maxWidth: 64,
              position: "absolute",
              right: 0,
              bottom: -25,
              zIndex: "999",
              color: "rgb(255, 123, 12)",
            }}
            onClick={() => {
              console.log("clicked");
              AddItem();
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: "2rem", border: "none" }} />
          </IconButton>
          {multiline && (
            <IconButton
              color="warning"
              onClick={(e) => {
                e.preventDefault();
                setMultiLine(false);
              }}
            >
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: { sm: "grid", xs: "flex" },
          flexDirection: { sm: "none", xs: "column" },
          gridTemplateColumns: "auto auto  auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items.length > 0 &&
          items.map((el, i) => {
            return (
              <Note
                setItems={setItems}
                key={el._id}
                _id={el._id}
                title={el.title}
                text={el.text}
                marginLeft={i % 3 === 0 ? "0px" : "25px"}
              />
            );
          })}
      </Box>
    </Container>
  );
};

export default NoteScreen;
