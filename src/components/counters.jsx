import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id:1,value:10},
            {id:2,value:20},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:0},
        ]
     };

     //Event handler for handle onIncrement event
     handleIncrement = counter =>{
         //console.log(counter);
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = {...counter};
         counters[index].value++;
         this.setState({counters});
     }

     handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value =0;
            return c;
        });
        this.setState({counters})
     }

     handleDelete = (counterId) =>{
        //console.log('Event handler called',counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters});//overide the counters property with constant
     }

    render() { 
        return (
            <div>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                    >Reset
                </button>
                { this.state.counters.map(counter => (
                <Counter 
                    key={counter.id}//used internally by react. we can't access it in counter component
                    onDelete={this.handleDelete}  //
                    onIncrement={this.handleIncrement}
                    //value={counter.value} 
                    //id={counter.id}/> //we have to pass id as a prop and then read it via this.prop.id
                    
                    //the above way is gets messy the code. 
                    //Instead of that directly we can pass a counter object which includes all its props and then we can uses them according to our need

                    counter = {counter}
                />
                ))}
            </div>
        );
    }
}
 
export default Counters;