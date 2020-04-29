import React, { Component } from 'react';

class Counter extends Component {
    //state is a special prperty that includes any data that component need
    // state = {
    //     //count: 0,
    //     value : this.props.counter.value
    //    // tags :['tag1','tag2','tag3']
    // };

    //we can bind event handlers to 'this' by using 
    // 01 constructors
    //---------------------------------------------------------------
    // constructor(){
    //     super();//should call the constructor of the parent calss before the chiild class
    //     //console.log("Constructor",this);
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }
    styles ={
        fontSize:10,
        fontWeight:"bold"
    };

    // handleIncrement(){
    //     console.log('Increment Clicked',this);
    // }

    //02 Arrow functions doesn't remember the 'this' keyword
    // handleIncrement = product =>{  
    //     console.log(product);
    //     this.setState({value : this.state.value + 1});
    // }

    // doHandleIncrement = () =>{
    //     this.handleIncrement({id:1});
    // }

    // handleDecrement= () =>{
    //     console.log('Decrement Clicked');
    //     this.setState({count : this.state.count - 1 });
    // }

    render(){ 
        return (
            <React.Fragment>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span> 
                <button 
                    //onClick={this.doHandleIncrement}
                    onClick = {() =>this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                    >
                        Increment
                </button>

                <button 
                    onClick = {() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                    >Delete
                </button>

                <br/>  
            </React.Fragment>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-"; //primary classes that are common to all cases
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }

    //checking the value of the count property
    formatCount(){
        //if the count is zero then print "zero" and else print the value
        //return this.state.count === 0 ? 'Zero' :this.state.count;

        //destructure the object and pick the count property
        const {value: count} = this.props.counter;//picking the count property from state object and storing it in the seperate constant "count" 
        const x = <h6>Zero</h6>
        return count === 0 ? x : count;
    }
}
 
export default Counter;