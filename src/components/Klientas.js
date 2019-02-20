import React from "react";
import TimeItem from "./TimeItem";
import { Redirect } from "react-router-dom";
import Spinner from "react-spinkit";
//import CustomScroll from "react-custom-scroll";

const Klientas = props => {
  return (
    <div className="container client">
      {props.redirect && <Redirect to="/" />}
      <div className="columns is-centered">
        <div className="column is-6">
          <h2 className="is-size-3 is-size-5-mobile">
            Įveskite vardą <br />
            ir paspauskite ant laiko
          </h2>
          <div className="client__dashboard">
            <input
              className=""
              onChange={props.onChange}
              type="text"
              value={props.vardas}
              required
            />
            {props.error && <p className="error">įveskite vardą...</p>}
            <button
              className="button is-link is-rounded"
              onClick={() => props.pageCounter("minus")}
              disabled={props.puslapis === 0}>
              <i class="fas fa-angle-double-left" />
            </button>

            <button
              className="button is-link is-rounded"
              onClick={() => props.pageCounter("plus")}
              disabled={props.puslapis === props.puslapiukiekis - 1}>
              <i class="fas fa-angle-double-right" />
            </button>

            <p className="client__date">
              {props.calendar[props.puslapis].date}
            </p>
          </div>

          <div className="columns is-centered">
            <div className="column client__list">
              {props.calendar[props.puslapis].laikas.map(item => (
                <TimeItem
                  item={item}
                  klientasRezervuoti={props.klientasRezervuoti}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={"modal " + (props.registered && "is-active")}>
      <div className="modal-background" />
      <div className="modal-content client__modal--success">
        <h1 className="is-size-2">Registracija sėkminga!</h1>
        <p>gražinama į pradinį puslapį</p>
        <Spinner name='ball-scale-multiple' color="purple" className="spinner" />
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
