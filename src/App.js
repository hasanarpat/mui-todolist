import Navbar from "./Layouts/Navbar";
import Stack from "@mui/material/Stack";
import Sidebar from "./Layouts/Sidebar";
import NoteScreen from "./Layouts/NoteScreen";
function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <NoteScreen />
      </Stack>
    </>
  );
}

export default App;
