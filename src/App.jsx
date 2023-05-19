import React, { useEffect } from "react";
import "./App.scss";

import owlEye from "./functions/eye-proximity";
import letmag from "./functions/letMag";
import Home from "./page/Home/Home";


const App = () => {
  useEffect(() => {
    owlEye();
    letmag();
  }, []);

  return (
    <div className="app">
      <Home/>
    </div>
  );
};

export default App;
