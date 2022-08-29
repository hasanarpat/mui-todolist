import Navbar from "./Layouts/Navbar";
import Stack from "@mui/material/Stack";
import Sidebar from "./Layouts/Sidebar";
import NoteScreen from "./Layouts/NoteScreen";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Box } from "@mui/material";
function App() {
  const [mode, setMode] = useState("light");

  let theme = createTheme({
    palette: {
      primary: {
        main: "#ffa54f",
        nav: "orange",
        text: "#000",
      },
      secondary: {
        main: "#ffaf3f",
        nav: "ffa54f",
        text: "#191919",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        theme={
          mode === "light"
            ? theme.palette.primary.nav
            : theme.palette.secondary.nav
        }
        font={
          mode === "light"
            ? theme.palette.primary.text
            : theme.palette.secondary.text
        }
      />

      <Box
        sx={{
          background:
            mode === "light"
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <NoteScreen />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
