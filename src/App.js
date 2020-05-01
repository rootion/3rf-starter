import React, { Suspense } from "react";
import Scene from "./Scene";

function App() {
  return (
    <>
      <div className="bg" />
      <header className="header">
        <span className="active">title</span>
      </header>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <div className="layer" />
    </>
  );
}

export default App;
