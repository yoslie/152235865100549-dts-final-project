import React from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";

function App() {

  return (
    <div className="App"> 
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
