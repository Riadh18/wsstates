import React from "react"
class App extends React.Component{
    constructor(){
      super()
      this.state={
        textB : ''

      }
      render(){
        return(
            <div>
            <input type='text' onChange={(e)=>this.setState({textB : e.target.value})}/>
                <h2>{this.state.textB}</h2>
                </div>

        )
    }
}













let Per=({Fullname,Bio,profession,})=>{
    return(
        <div>
            <h1>myfullname is :{Fullname}</h1>
            <h2>my bio :{Bio}</h2>
            <h3>profession :{profession}</h3>
            <img className='pics'  src="/pic.png"></img>
            </div>
            )
}
export default Per