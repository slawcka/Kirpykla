import React from "react";
import TimeItem from "./TimeItem"
//import CustomScroll from "react-custom-scroll";

const Klientas = props => {
  return (
    
      <div className="klientas">
        {props.calendar[0].laikas.map(item => (
            
            <TimeItem
                item={item}
            />
         
        ))}
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
