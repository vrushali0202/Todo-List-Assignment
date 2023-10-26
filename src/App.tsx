import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { Container, Grid } from "@mui/material";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
