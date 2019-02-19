
//v3 atsaukti mygtuka

import React, { Component } from "react";
import Paieska from "./components/Paieska";
import data from "./data/kalendorius.json";
import "./App.css";
//import Diena from "./components/Diena";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kalendorius: null,
      loading: true
    };
    this.atsauktiRezervacija = this.atsauktiRezervacija.bind(this);
    this.rezervuotiLaika = this.rezervuotiLaika.bind(this);
  }
  componentWillMount() {
    this.setState({ kalendorius: data });
  }

  componentDidMount() {
    this.setState({ loading: false });
    console.log("loaded");
  }
  rezervuotiLaika(vardas,dabartinis){
		console.log('TCL: App -> rezervuotiLaika -> vardas', vardas)
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
  render() {
    if (this.state.loading) {
      return <p>loading</p>;
    }
    return (
      <div className="App ">
        <Paieska
          kalendar={this.state.kalendorius}
          atsauktiRezervacija={this.atsauktiRezervacija}
          rezervuotiLaika={this.rezervuotiLaika}
        />
      </div>
    );
  }
}

export default App;
