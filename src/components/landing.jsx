import React, { Component } from 'react';
import CoronaApi from '../helpers/coronaapi';
export default class Landing extends Component{
    constructor(){
        super()
        this.state = {
            message : "Hellow World",
            data: []
        }
    }

    componentDidMount() {
      CoronaApi.getCountries()
      .then(Response=>{
          this.setState({
              data : Response
          })
          console.log(this.state.data)
      })
      .catch(err=>{
          console.debug(err)
      })
    }
    render(){
        return(
            <h1> 
                {this.state.message}
            </h1>
        )
    }
}