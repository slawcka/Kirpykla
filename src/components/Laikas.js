import React from 'react';

const Laikas = (props) => {
    let classList=["item","column","col-12"]
    props.data.rezervuota && classList.push("rezervuota")
    return (
        <div className={classList.join(" ")}>
            
            <h3>{props.data.valandos}</h3>
            <p>{props.data.klientas}</p>
                
            
        </div>
    );
};

export default Laikas;