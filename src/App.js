import React from "react";
import "../src/Assets/style/style.scss"
import MainGraph from "./Components/mainGraph/mainGraph";
import { Header } from "./Components/header/Header";
import { Statistics } from "./Components/Statistics/Statistics";
import TaskBar from "./Components/taskbar/TaskBar";
import Tickets from "./Components/tickets/Tickets";

function App() {

  return (
    <div className="app">
      <TaskBar />
      <Header />
      <Statistics />
      <MainGraph />
      <Tickets />
    </div>

  )
}

export default App;
