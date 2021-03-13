import React from "react";
import Player from "./Components/Player";
import Songs from "./Components/Songs";
import "./Styles/app.scss";

function App() {
  return (
    <div className="App">
      <Songs />
      <Player />
    </div>
  );
}

export default App;
