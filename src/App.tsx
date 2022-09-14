import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DropDownMenu from "./components/dropDownMenu/DropDownMenu";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import MyBreweriesModule from "./components/myBrewries/MyBreweriesModule";
import SearchBrewery from "./components/searchBrewery/SearchBrewery";

function App() {
  return (
    <div className='App'>
      <Header />
      <DropDownMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/myBrewries' element={<MyBreweriesModule />} />'
        <Route path='/searchBrewery' element={<SearchBrewery />} />'
      </Routes>
    </div>
  );
}

export default App;
