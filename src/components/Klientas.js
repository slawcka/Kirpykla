import React from "react";
import TimeItem from "./TimeItem";
//import CustomScroll from "react-custom-scroll";

const Klientas = props => {
  return (
    <div className="container client">
      <div className="columns is-centered">
        <div className="column is-5">
          <h2>iveskite varda</h2>
          <input className="input" type="text" />
          <div className="columns is-centered">
            <div className="column client__list">
              {props.calendar[0].laikas.map(item => (
                <TimeItem item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Klientas;

/* 
kalendar={this.state.kalendorius}
              rezervuotiLaika={this.rezervuotiLaika}
              currentClient={this.currentClient}


              <Laikas
              data={item}
              diena={this.state.puslapis}
              atsauktiRezervacija={this.props.atsauktiRezervacija}
              formEdit={this.formEdit}
            />

*/
