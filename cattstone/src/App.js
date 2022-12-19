
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      cat:[]
    }
  }
  componentDidMount(){
    axios.get(" https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products" ,
    {headers:{Authorization:"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"}}).then((res)=> this.setState({cat:res.data}))
  }
  

  render() {
    
    return (
      <div className="App">

        {this.state.cat.map((el)=>
        <div>{el.name}</div>)}
        
      </div>
    )
  }
}

