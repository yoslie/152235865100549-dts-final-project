import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ActionPanel from "./components/ActionPanel";

function App() {

  return (
    <div className="App"> 
      <NavBar />
      <ActionPanel />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
