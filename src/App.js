import React, {Component} from 'react';
import './App.css';
import {Login} from "./components/Login.js";

import ResponsiveDrawer from './MyDrawer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';



class App extends Component{
    constructor(props) {
        super(props);
        localStorage.setItem('email',"juanmanuelherreramoya@gmail.com");
        localStorage.setItem('password',"123");

    }
	
	
	

    render(){
        return (
            <Router>
            <div className="App">
                <div>
                    {localStorage.getItem('isLoggedIn')==="true"?
                        <ResponsiveDrawer/>:<Login/>}
                </div>
            </div>
            </Router>
        );
  }

}

export default App;