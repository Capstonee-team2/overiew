import React, { Component } from 'react'
import axios from 'axios'
import Navba from './navba'
import Carrousel from './carrousel'

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
    // console.log(process.env.REACT_APP_TOKEN)

    return (
      <div className="App">
              <Navba />
       <div><Carrousel/></div> 
              <div className='descriptionChild0' style={{display:'flex',alignItems:'center'}}>
                 <div className='descriptionChild1'>
                    {this.state.cat.map((el)=><div>
                          <p><b>{el.slogan}</b></p>
                           <p>{el.description}</p> </div>)}
                 </div>
                 <div className='descriptionChild2'>
                     <ul className="removeBullets">
                       {this.state.cat.map((item, index) => (
                       <li key={index}>
                         ✓ {item.name} - {item.id}
                       </li>))}
                     </ul>
                </div>
              </div>
          
      </div>
    )
  }
}

