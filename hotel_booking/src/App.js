import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <ChakraProvider>
      <Hotels />
    </ChakraProvider>
  );
}

export default App;
