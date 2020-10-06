import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employees:[],
            filteredemployees:[],
            msg:false
        }
    }
    componentWillMount(){
        fetch(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res=>res.json())
        .then(res=>{
            console.log("1111111111111111111",res)
            if(res.status=="success")
            {
            this.setState({employees:res.data,filteredemployees:res.data})
            }
        })
      
      }
    searchhandler(event)
    {
        const searchtext=event.target.value;
        const filtereddata=this.state.employees.filter(item =>{
            return item.employee_name.indexOf(searchtext)>=0
        })
        this.setState({filteredemployees:filtereddata})
        {this.state.msg='true'}
    }
    removehandler(event)
    {
        this.setState({filteredemployees:[]})
    }
   
    render(){
        return(

    <div className="header"><img className="detailimg"src={logo} /> 
        <Link className="btn btn-primary" to="/products">Products</Link>
    <span className="search-div"><input className="search" type="text" name="search" placeholder="search employee names" onChange={(event)=>this.searchhandler(event)} onBlur={(event)=>this.removehandler(event)}></input>   {
          this.state.msg=='true' && this.state.filteredemployees.map((emp, idx)=>(
              <div key={idx}>{emp.employee_name}</div>
))
      }</span>
    <Link className="btn btn-primary" to="/cart">Cart</Link>
     
      </div>
        )
}
}