import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import HomePage from './screen/home'
import Carta_raconet from './screen/carta_raconet'
import Carta1 from './screen/bar1'
import Carta2 from './screen/bar2'
import Qr from './screen/qr'

function App() {
  return (
    <div className="app">
          <Route exact={true}  path="/" component={HomePage}  />
          <Route path="/raconet" component={Carta_raconet} /> 
          <Route path="/bar1" component={Carta1} />
          <Route path="/bar2" component={Carta2} />
          <Route path="/qr" component={Qr} />
    </div>
  );
}

export default App;

