import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Products extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        console.log("test")
        this.state={
            employees:[],
            filteredemployees:[],
            view:'',
            cart:[],
            show:'true'
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
    })}
    agehandler()
{
    this.setState({show:true})
  // const agetext=event.target.value;
  const filteredagee=this.state.employees.filter(item =>{
    return item.employee_age>60
})
this.setState({filteredemployees:filteredagee})
}
salaryhandler()
{
    this.setState({show:true})
  // const agetext=event.target.value;
  const filteredsalaryy=this.state.employees.filter(item =>{
    return item.employee_salary>200000
})
this.setState({filteredemployees:filteredsalaryy})
}
gridview(){
    
this.setState({view:'grid'})
}
listview(){
    
this.setState({view:'list'})
}
addtocart(emp){
    //filter method to check ehether it is same product
    
    emp.quantity = 1
    let temp=this.state.cart;
    temp.push(emp);
this.setState({cart:temp})
}
removeitem(emp)
{
    
    // let temp=this.state.cart;
    // temp.pop(emp.idx)
    // this.setState({cart:temp})
    let temp=this.state.cart;
    const index=temp.indexOf(emp)
    temp.splice(index,1);
    this.setState({cart:temp})

}
showcart(){
    // this.setState({removecart:this.state.removecart})
    this.setState({show:false})
    this.setState({view:'cart'})
    this.setState({filteredemployees:this.state.cart})
}

    render(){
        return(
            <div>
    <aside>
         
          <div className="below-header">
          < a href="#" onClick={()=>this.agehandler()}>age > 60</a>
          < a href="#" onClick={()=>this.salaryhandler()}>salary > 200000</a>
          < a href="#" onClick={()=>this.showcart()}>ShowCart</a>
          
          </div>
    </aside>
    <article>
<div>
    <div>
        cart={this.state.cart.length}
        <button onClick={()=>this.gridview()}>Grid</button>
        <button onClick={()=>this.listview()}>List</button>
        
    </div>
{
              this.state.filteredemployees.map((emp, idx)=>(
                  <div className={`${this.state.view}`} key={idx}>
                      
            <div className="innergrid">{emp.employee_name}<br />
          {this.state.show && <div><button  onClick={()=>this.addtocart(emp)} >AddtoCart</button></div>}
        <div><button  onClick={()=>this.removeitem(emp)} >Removeitem</button></div>
           
            </div>
            {/* {<Link to="/products/${emp.id}">qwerty</Link>} */}
            </div>
            
  ))
          }
          
          
</div>
    </article>
   
    </div>
        )
}
}