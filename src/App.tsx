import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DropDownMenu from "./components/dropDownMenu/DropDownMenu";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <DropDownMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
