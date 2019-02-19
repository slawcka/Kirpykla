import React from "react";

const Laikas = (props) => {

  let classList = ["reservation__item", "column", "is-full"];
  props.data.rezervuota && classList.push("rezervuota");
  
  return (
    <div className={classList.join(" ")}>
      <div className="columns reservation__row">
        <div className="column reservation__unit">
          <h3>{props.data.valandos}</h3>
        </div>
        <div className="column reservation__unit">
          <p>{props.data.klientas}</p>
        </div>
        <div className="column reservation__unit">
          <p>{props.data.kirpejas}</p>
        </div>
        <div className="column reservation__unit">
          {props.data.rezervuota ? 
            <button onClick={()=>props.atsauktiRezervacija(props.diena,props.data.valandos)}
              className="button is-rounded">atšaukti</button>
           : 
            <button onClick={()=>props.rezervuotiLaika(props.diena,props.data.valandos)} className="button is-rounded">rezervuoti</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Laikas;
