// create your App component here
import React, {Component} from "react";

export default class App extends Component{
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(console.log)
    }

    render(){
        return(
           <div> hello</div> 
        )
    }
}