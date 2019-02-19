import React, { Component } from 'react';
import Laikas from './Laikas'
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
        const puslapiuKiekis=this.state.puslapiuKiekis-1
        return (
            <div className="">
                <div className="reservation__header">
                <button className="button is-link" onClick={()=>this.handleClick("minus")} disabled={puslapis===0} >prev</button>
                <p>{data[puslapis].date}</p>
                <button className="button is-link" onClick={()=>this.handleClick("plus")} disabled={puslapis===puslapiuKiekis}>next</button>
                    
                </div>
                <div className="container reservation">
                {data[puslapis].laikas.map(item=>
                <Laikas 
                data={item} 
                diena={this.state.puslapis}
                rezervuotiLaika={this.props.rezervuotiLaika}    
                />
                )}
                    
                </div>
            </div>
        );
    }
}

export default Paieska;