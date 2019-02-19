import React, { Component } from "react";
import Laikas from "./Laikas";
import Form from "./Form";
class Paieska extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puslapis: 0,
      puslapiuKiekis: null,
      vardas: "",
      dabartinis: {},
      open: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formEdit = this.formEdit.bind(this);
  }
  componentWillMount() {
    this.setState({ puslapiuKiekis: this.props.kalendar.length });
  }
  onChange(e) {
    this.setState({
      vardas: e.target.value
    });
  }
  formEdit(diena, laikas) {
    let laikinas = {};
    laikinas.diena = diena;
    laikinas.laikas = laikas;
    this.setState({
      dabartinis: laikinas,
      open: true
    });
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.rezervuotiLaika(this.state.vardas, this.state.dabartinis);
    this.onCloseModal();
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleClick(type) {
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
  render() {
    const puslapis = this.state.puslapis;
    const data = this.props.kalendar;
    const puslapiuKiekis = this.state.puslapiuKiekis - 1;
    return (
      <div className="">
        <div className="reservation__header">
          <button
            className="button is-link"
            onClick={() => this.handleClick("minus")}
            disabled={puslapis === 0}>
            <i class="fas fa-angle-double-left" />
          </button>
          <p className="reservation__data">{data[puslapis].date}</p>
          <button
            className="button is-link"
            onClick={() => this.handleClick("plus")}
            disabled={puslapis === puslapiuKiekis}>
            <i class="fas fa-angle-double-right" />
          </button>
        </div>

        <div className="container reservation">
          {data[puslapis].laikas.map(item => (
            <Laikas
              data={item}
              diena={this.state.puslapis}
              atsauktiRezervacija={this.props.atsauktiRezervacija}
              formEdit={this.formEdit}
            />
          ))}
          {this.state.open && (
            <Form
              modalstate={this.state.open}
              vardas={this.state.vardas}
              dabartinis={this.state.dabartinis}
              rezervuotiLaika={this.props.rezervuotiLaika}
              onchange={this.onChange}
              onsubmit={this.onSubmit}
              onOpenModal={this.onOpenModal}
              onCloseModal={this.onCloseModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Paieska;
