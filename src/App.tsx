import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import ConnectWithMe from "./Components/ConnectWithMe";

function App() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      className="app"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition?.x}px ${mousePosition?.y}px,rgb(5 230 230 / 37%) 8vw, rgb(5 59 56) 120vw)`,
      }}
    >
      <div className="left">
        <Header />
        <LeftPanel />
        <ConnectWithMe />
      </div>
      <div className="right">
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
