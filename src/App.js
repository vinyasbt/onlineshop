import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import pagenotfound from'./pagenotfound';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
class App extends React.Component {
  constructor (props){
    super(props);
    this.state={
      employees:[],
      filteredemployees:[],
      msg:false
  }
}

 

  render()
  {
    return(
      <div className="App">
      <Router>
      <Header  />
      
      <Switch>
      
      <Route  exact path="/products" component={Products}></Route>
      <Route  exact path="/products/:id" component={Cart}></Route>
      <Route  path="/cart" component={Cart}></Route>
      <Route  path="*" component={pagenotfound}></Route>
      </Switch>
      <Carousel>
                <div >
                    <img src={logo} />
                    
                </div>
                <div >
                    <img src={logo} />
                    
                </div>
                <div >
                    <img src={logo} />
                    
                </div>
            </Carousel> 
         
         
          </Router>
          </div>
          
    )
  };
}


export default App;
