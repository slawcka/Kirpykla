
//v3 atsaukti mygtuka

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
      laikinas: {},
      vardas: "",
      puslapiuKiekis: null,
      puslapis: 0,
      error: false,
      redirect: false,
      registered: false,
      procentai:0
    };
    this.atsauktiRezervacija = this.atsauktiRezervacija.bind(this);
    this.rezervuotiLaika = this.rezervuotiLaika.bind(this);
    this.klientasRezervuoti = this.klientasRezervuoti.bind(this);
    this.sekmingaRegistracija = this.sekmingaRegistracija.bind(this);
    this.procentai = this.procentai.bind(this);
    this.pageCounter = this.pageCounter.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    this.setState({ kalendorius: data });
  }
  componentDidMount() {
    const length = this.state.kalendorius.length;
    this.setState({ puslapiuKiekis: length });
    this.procentai();
  }

  onChange(e) {
    this.setState({
      vardas: e.target.value
    });
  }
  klientasRezervuoti(item) {
    if (this.state.vardas.length < 3 || this.state.vardas.length > 12) {
      this.setState({ error: true });
      console.log("i has no name");
      return;
    }
    if (item.rezervuota) {
      return;
    }
    this.setState({ error: false });
    let laikinas = {};
    laikinas.diena = this.state.puslapis;
    laikinas.laikas = item.valandos;
    this.rezervuotiLaika(this.state.vardas, laikinas);
    this.setState({ registered: true });
    setTimeout(this.sekmingaRegistracija, 4000);
  }
  sekmingaRegistracija() {  
    this.setState({
      redirect: true,
      registered: false
    });
    this.setState({ redirect: false });
  }
  rezervuotiLaika(vardas, dabartinis) {
    let kalendorius, diena;

    kalendorius = [...this.state.kalendorius];
    diena = kalendorius[dabartinis.diena];

    diena.laikas.find((obj, item) => {
      if (obj.valandos === dabartinis.laikas) {
        kalendorius[dabartinis.diena].laikas[item].rezervuota = true;
        kalendorius[dabartinis.diena].laikas[item].klientas = vardas;
        //kalendorius[dabartinis.diena].laikas[item].kirpejas = "zuzi";
      }
    });
    this.setState({
      kalendorius: kalendorius,
      vardas: ""
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
  pageCounter(type) {
    let current = this.state.puslapis;
    let puslapiuKiekis = this.state.puslapiuKiekis - 1;
    type === "minus" ? current-- : type === "plus" && current++;

    if (current < 0) {
      current = 0;
    } else if (current > puslapiuKiekis) {
      current = puslapiuKiekis;
    }

    this.setState({
      puslapis: current
    });
  }
  procentai(){
    let time=0;
    let interval=setInterval(e=>{
      time++
      this.setState({
        procentai:time
      })
      if(time>99){
        clearInterval(interval)
      }
    },10)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
            <Pagrindinis
              {...props}
              procentai={this.state.procentai}
            />
          )} />
        <Route
          exact
          path="/kirpyklai"
          render={props => (
            <Paieska
              {...props}
              kalendar={this.state.kalendorius}
              atsauktiRezervacija={this.atsauktiRezervacija}
              rezervuotiLaika={this.rezervuotiLaika}
            />
          )}
        />
        <Route
          exact
          path="/klientui"
          render={props => (
            <Klientas
              {...props}
              calendar={this.state.kalendorius}
              klientasRezervuoti={this.klientasRezervuoti}
              currentClient={this.currentClient}
              pageCounter={this.pageCounter}
              puslapis={this.state.puslapis}
              puslapiukiekis={this.state.puslapiuKiekis}
              onChange={this.onChange}
              error={this.state.error}
              vardas={this.state.vardas}
              redirect={this.state.redirect}
              registered={this.state.registered}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
