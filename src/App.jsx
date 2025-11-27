import { useState } from "react";
import SaveTheDate from "./pages/saveTheDate";
import Program from "./pages/schedule";
import Location from "./pages/location";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="fecha" className="section">
        <SaveTheDate />
      </section>
      <section id="programa" className="section">
        <Program />
      </section>
      <section id="ubicacion" className="section">
        <Location />
      </section>
      {/* <section id="fotos" className="section">
        <Photos />
      </section> */}
    </div>
  );
}

export default App;
