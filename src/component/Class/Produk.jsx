import React, { Component } from 'react';
import './css/produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    buttonBeli = () => {
        this.setState ({
            stock: this.state.stock - 1
        })

        if(this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }

    }

    render() {
        return (
        <div className='box-stock'>
            <h2>{this.props.nama}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQh-Jd86ycLbRKIdY2Dzo6PI5Y342_Slm2y5RRNAi1SEMyU4LsVFzawG0lHauieB4YeA&usqp=CAU" alt="Macbook_Pro" />
            <p><b>Rp. {this.props.harga}</b></p>
            <p>{this.state.stock}</p>
            <button className='btn-click' onClick={this.buttonBeli} disabled={this.state.disabled}>Beli</button>
            <p>{this.state.status}</p>
        </div>
        )
    }
}

export default Produk;
