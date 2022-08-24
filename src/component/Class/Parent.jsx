import React, { Component } from 'react'
import Child1 from './Child1';

class Parent extends Component {
    constructor(props){
        super(props)

        this.state = {
            stock: 10
        }
    }

    beliItem = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render() {
        return (
            <div>
                <Child1 
                    stock = {this.state.stock}
                    fungsi = {this.beliItem.bind(this)}
                />
            </div>
        )
    }
}

export default Parent;