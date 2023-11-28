import React, { Component } from 'react';

export default class Produto extends Component {
    render() {
        const { produto } = this.props;
        return (
            <div>
                <h2>Loja IT - Produtos - {produto}</h2>
            </div>
        )
    }
}