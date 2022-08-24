import React, { Component } from 'react'

export class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    status;
    minBeli = 1;
    render() {
        return (
        <div>
            <h3>Component 1</h3>
            <p>{this.props.stock}</p>
            <p>
                {(this.props.stock) < 1 ? "Habis" : "Tersedia"}
            </p>
            <button
                onClick={() => this.props.fungsi(this.minBeli)}
                disabled={(this.props.stock) < 1 ? true : false}
                >
                Beli Item
            </button>
        </div>
        )
    }
}

export default Child1;
