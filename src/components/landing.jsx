import React, { Component } from 'react';
import CoronaApi from '../helpers/coronaapi';
import Card from './card';
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
            <div className="cardHolder">
                {this.state.data.map(function (country , index) {
                    return(
                        <Card key={index} {...country} />
                    )
                })}
            </div>
        )
    }
}
