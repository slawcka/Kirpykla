import React, { Component } from 'react';

class Paieska extends Component {
    state={
        puslapis:0,
        puslapiuKiekis:null

    }
    componentWillMount() {
        this.setState({puslapiuKiekis:this.props.kalendar.length})
        
      }
    handleClick(type){
        let current=this.state.puslapis
        let puslapiuKiekis=this.state.puslapiuKiekis-1
        type==="minus" ? current-- : type==="plus" && current++
        
        if(current<0){
            current=0
        } else if (current>puslapiuKiekis){
            current=puslapiuKiekis
        }
        
        this.setState({
            puslapis:current
        })
    }
    render() {
        const puslapis=this.state.puslapis
        const data=this.props.kalendar
		console.log('TCL: Paieska -> render -> data', data)
        const puslapiuKiekis=this.state.puslapiuKiekis-1
        return (
            <div>
                <h1>{data[puslapis].date}</h1>
                <button onClick={()=>this.handleClick("minus")} disabled={puslapis===0} >prev</button>
                <button onClick={()=>this.handleClick("plus")} disabled={puslapis===puslapiuKiekis}>next</button>
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