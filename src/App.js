import React, { Component } from 'react';
import Paieska from './components/Paieska';
import data from './data/kalendorius.json';
import './App.css';

class App extends Component {
  state={
    kalendorius:null,
    loading:true
  }

  componentWillMount() {
    this.setState({kalendorius:data})
  }

  componentDidMount(){
    

    this.setState({loading:false})
    console.log("loaded")
  }
  render() {
    if(this.state.loading){
      return <p>loading</p>
    }
    return (
      <div className="App">
      <Paieska kalendar={this.state.kalendorius} /> 
       
         
      </div>
    );
  }
}

export default App;
