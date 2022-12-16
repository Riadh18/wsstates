import Per from './Comp/Per';
import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }
}
handleShow =()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show  &&  <Counter/> 
        }
        
        </div>
        )
      }











function App() {
    const Fullname ="Riadh"
    const Bio ="tired"
    const profession ="Hata chy"
  return (
    <div>
    <Per Fullname={Fullname} Bio={Bio} profession={profession}>
      </Per>
    
      </div>
    )
  }
   
 


  
    
 

export default App;
