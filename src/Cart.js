import React from 'react';
export default class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            carts:[],
            employees:[]
        }
        console.log(props)
        console.log("cart",this.props.cart)
        
    }
    // componentWillMount(){
    //     fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log("1111111111111111111",res)
    //         if(res.status=="success")
    //         {
    //         this.setState({employees:res.data})
    //         }
    // })}
   
    render(){
        return(<div>hello cart
            {this.state.carts.map((cart)=><p>{cart}</p>)}
        </div>)
        
    }
}