import logo from "./logo.svg";
import Layout from "./Components/Layout.js";
import Axios from "axios";

import React, { useEffect, useState } from "react";
import "./App.css";
//import weather from './Components/weather';
//import './Components/weather.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
//import geoloacation from './Components/geoloacation'

function App() {
  // var result1;
  // const [city, setCity] = useState([]);
  // const [search, setSearch] = useState("mumbai");
  // const url = `http://api.weatherapi.com/v1/current.json?key=ba90dfe32fc54dcd800152728212707&q=${search}`;

  return (
    <>
      <div>
        <Layout />
      </div>
    </>
  );
}

export default App;
