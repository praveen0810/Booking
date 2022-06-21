import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
function App() {
  return (
    <ChakraProvider>
      {/* <Hotels /> */}
      {/* <Home /> */}
      <Hotel />
    </ChakraProvider>
  );
}

export default App;
