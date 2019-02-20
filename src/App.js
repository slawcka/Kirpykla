//v2 atsaukti mygtuka
import React, { Component } from "react";
import Paieska from "./components/Paieska";
import Header from "./components/Header";
import Pagrindinis from "./components/Pagrindinis";
import Klientas from "./components/Klientas";

import data from "./data/kalendorius.json";
import "./App.css";
import { Route } from "react-router-dom";

//import Diena from "./components/Diena";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kalendorius: null,
      laikinas:{}
    };
    this.atsauktiRezervacija = this.atsauktiRezervacija.bind(this);
    this.rezervuotiLaika = this.rezervuotiLaika.bind(this);
    this.currentClient = this.currentClient.bind(this);
  }
  componentWillMount() {
    this.setState({ kalendorius: data });
  }

  rezervuotiLaika(vardas, dabartinis) {
    let kalendorius, diena;

    kalendorius = [...this.state.kalendorius];
    diena = kalendorius[dabartinis.diena];

    diena.laikas.find((obj, item) => {
      if (obj.valandos === dabartinis.laikas) {
        kalendorius[dabartinis.diena].laikas[item].rezervuota = true;
        kalendorius[dabartinis.diena].laikas[item].klientas = vardas;
        kalendorius[dabartinis.diena].laikas[item].kirpejas = "zuzi";
      }
    });
    this.setState({
      kalendorius
    });
  }
  atsauktiRezervacija(data, laikas) {
    let kalendorius, diena;

    kalendorius = [...this.state.kalendorius];
    diena = kalendorius[data];

    diena.laikas.find((obj, item) => {
      if (obj.valandos === laikas) {
        kalendorius[data].laikas[item].rezervuota = false;
        kalendorius[data].laikas[item].klientas = "";
        kalendorius[data].laikas[item].kirpejas = "";
      }
    });
    this.setState({
      kalendorius
    });
  }
  currentClient(){

  }
  render() {
    
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Pagrindinis} />
        <Route
          exact
          path="/paieska"
          render={props => (
            <Paieska
              {...props}
              kalendar={this.state.kalendorius}
              atsauktiRezervacija={this.atsauktiRezervacija}
              rezervuotiLaika={this.rezervuotiLaika}
            />
          )}
        />
        <Route exact path="/klientas"
        render={props => (
            <Klientas
              {...props}
              calendar={this.state.kalendorius}
              rezervuotiLaika={this.rezervuotiLaika}
              currentClient={this.currentClient}
            />
          )} />
      </div>
    );
  }
}

export default App;
