import logo from './logo.svg';
import './App.css';
import  React from 'react';

class  App extends React.Component {
  state = {
   counters:{
     counter1:0,
     counter2:0,
     counter3:0,
     counter4:0,
   },numberOfCounter:0,
  };
  incr = (e) =>{
    console.log(e.target.className)
    const {name} = e.target;
    
    this.setState(({counters,numberOfCounter}) =>{
      const newCounters = {...counters};
      var k = numberOfCounter;
      if(newCounters[name]===0) 
      k=k+1; 
      newCounters[name]=newCounters[name]+1;
      return{counters:newCounters,numberOfCounter:k};
    } 
    
    );
      
  };
  decr = (e) =>{
    const {name} = e.target;
    
    

    this.setState(({counters,numberOfCounter}) =>{
      const newCounters = {...counters};
      var k = numberOfCounter;
      if(newCounters[name]===1) 
      k=k-1; 
      newCounters[name]=newCounters[name]-1;
      if(newCounters[name]<0){
        newCounters[name]=0;
      }
      

      return{counters:newCounters,numberOfCounter:k};

    
    } 
    
    
    );
  
     
  };

    clear = (e) =>{
      const {counters,numberOfCounter} = this.state;
      this.setState(({counters}) =>{
        const newCounters = {...counters};
        
        newCounters.counter1=0;
        newCounters.counter2=0;
        newCounters.counter3=0;
        newCounters.counter4=0;
        return{counters:newCounters};
        
      } 

  
      );
      this.setState({numberOfCounter:0})
  
  };
  render(){
    const {counters,numberOfCounter} = this.state;
    

    return (
      <div className="lc">
        <div className="flex">
        <h1 className="number">{numberOfCounter}</h1>
        <img src='https://www.charge.com/wp-content/uploads/2015/12/cart.png' className="img" alt="ddd"/>
        </div>
        
        <button className="clear" onClick = {this.clear}></button> 
      
       { Object.keys(counters).map((key) =>(
           <Counter name={key} counter={counters[key]} incr={this.incr} decr={this.decr} numbers={this.numbers} />
       )
       

       )
          }
      </div>
      );
  }
  }
  function Counter (props){
    const {counter,incr,decr,name} = props;
    // <div id={condition ? 'msg' : null}>
    
    return(
      //<i class="fas fa-plus-circle"></i>
      <div className="app">
      <h1 className="number">{counter}</h1>
        <button  className="plus" name = {name} onClick={incr}>
        
        </button>
        <button className="minus" name = {name} onClick={decr}></button>
        
    </div>
       
    );
  }

  
export default App;