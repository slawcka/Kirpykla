import React from 'react';

const TimeItem = (props) => {
    return (
       
            <div className={"column reservation__item " + (props.item.rezervuota && "rezervuota")}>
                <p>{props.item.valandos}</p>
            </div>
        
    );
};

export default TimeItem;

/* 
{"modal " + (props.modalstate && "is-active")}
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

*/