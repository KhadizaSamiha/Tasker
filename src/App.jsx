import { useState } from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col justify-center items-center">
        <TaskBoard />
      </div>
    </>
  );
}

export default App;
