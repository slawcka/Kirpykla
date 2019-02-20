import React from "react";
//import Modal from "react-responsive-modal";

const Form = props => {
  return (
    <div className={"modal " + (props.modalstate && "is-active")}>
      <div className="modal-background" />
      <div className="modal-content">
        
        <form className=" forma" action="" onSubmit={props.onsubmit}>
        <h2>Laikas: {props.dabartinis.laikas}</h2>
          <input className="input" onChange={props.onchange} type="text" required />
          <button className="button is-primary" type="submit">
            Rezervuoti
          </button>
        </form>
      </div>
      <button
        onClick={props.onCloseModal}
        class="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
};

export default Form;

/* 
 <div className="control">
            <div className="field">
              <input className="input" onChange={props.onchange} type="text" />
            </div>
            <div className="field is-centered">
            </div>
            <button className="button is-primary" type="submit">
                Rezervuoti
              </button>
          </div>



*/
