import React from "react";
import "./App.css";
import { Name } from "./components/Name/Name";
import { Image } from "./components/Image/Image";
import { Navbar } from "./components/Navbar/Navbar";
import { Text } from "./components/Text/Text";
import { OptionProvider } from "./components/Context/Context";

function App() {
  return (
    <>
      <Name />
      <Image />
      <OptionProvider>
        <Navbar />
        <Text />
      </OptionProvider>
    </>
  );
}

export default App;
