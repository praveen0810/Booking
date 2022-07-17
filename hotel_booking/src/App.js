import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
