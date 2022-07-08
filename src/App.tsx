import { Box } from "@chakra-ui/react";
import { Header } from "./components/header";
import { MyRoutes } from "./routes";

function App() {
  return (
    <Box w="100vw" height="100vh">
      <MyRoutes />
    </Box>
  );
}

export default App;
