import React from "react";
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import Navigation from "./navigation/Navigation";
import Home from "./Home/Home";
import Discover from "./discover/Discover";
import Chat from "./Chat/Chat";
import OurStory from "./OurStory/OurStory";

const App = () => {
  return (
    <>
      {" "}
      <Navigation/>   
      {/* <Slider />    */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<Discover />}></Route>
        <Route exact path="/services" element={<Chat />}></Route>
        <Route exact path="/shop" element={<OurStory/>}></Route>
      </Routes>
        {/* Home is responsible for body of page */}
      {/* <Footer/> */}
    </>
  );
};

export default App;
