import React, { Component } from 'react';

class NewComponent extends Component {
    constructor(props){
        super(props);
        this.state={color:"red"};
        this.shoot=this.shoot.bind(this);
    }
    shoot(){
        alert(this);
    }
    shoot1(a){
        alert(a);
    }
    render() {
        return (
            <div>
                <h1>Hello! I have {this.props.company} car with {this.state.color} color</h1>
                <button onClick={this.shoot}>Click</button>
                <button onClick={this.shoot1.bind(this,"Goal")}>Click</button>
            </div>
        );
    }
}

export default NewComponent;