import React, { Component } from 'react';

class Paieska extends Component {
    state={
        puslapis:1,
        puslapiuKiekis:null

    }
    componentWillMount() {
        this.setState({puslapiuKiekis:this.props.kalendar.length})
      }
    handleClick(type){
        let current=this.state.puslapis
        let puslapiuKiekis=this.state.puslapiuKiekis
        type==="minus" ? current-- : type==="plus" && current++
        
        if(current<1){
            current=1
        } else if (current>puslapiuKiekis){
            current=puslapiuKiekis
        }
        
        this.setState({
            puslapis:current
        })
    }
    render() {
        const puslapis=this.state.puslapis-1
        const data=this.props.kalendar
        return (
            <div>
                <h1>{data[puslapis].date}</h1>
                <button onClick={()=>this.handleClick("minus")} >prev</button>
                <button onClick={()=>this.handleClick("plus")}>next</button>
                {data[puslapis].laikas.map(e=>
                <div>
                <h1>{e.klientas}</h1>
                <p>{e.valandos}</p>

                </div>
                )}
            </div>
        );
    }
}

export default Paieska;