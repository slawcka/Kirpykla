import React from "react";
const Laikas = (props) => {

  let classList = ["reservation__item", "column", "is-full"];
  props.data.rezervuota && classList.push("rezervuota");
  const diena=props.diena
  const laikas=props.data.valandos
  
  return (
    <div className={classList.join(" ")}>
    
      <div className="columns reservation__row ">
        <div className="column reservation__unit is-vcentered">
          <h3>{props.data.valandos}</h3>
        </div>
        <div className="column reservation__unit is-vcentered">
          <p>{props.data.klientas}</p>
        </div>
        <div className="column reservation__unit">
        {props.data.rezervuota ? <i class="fas fa-cut"></i> : <i class="fas fa-check-circle color-two"></i> }
        
        </div>
        <div className="column reservation__unit">
          {props.data.rezervuota ? 
            <button onClick={()=>props.atsauktiRezervacija(diena,laikas)}
              className="button is-rounded">atšaukti</button>
           : 
           <div>
            <button onClick={()=>props.formEdit(diena,laikas)} className="button is-rounded">rezervuoti</button>
            
           </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Laikas;
