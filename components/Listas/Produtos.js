import React, { Component } from 'react';
import Produto from '../Item/Produto';

class Produtos extends Component {
    componentDidMount() {
        let highest = 0;
        const produtosListados = document.querySelectorAll(".produto-title")
        produtosListados.forEach(function(item) {
            if (highest < item.clientHeight) highest = item.clientHeight;
        });
        produtosListados.forEach(function(item) {
            item.computedStyleMap.height = highest + "px";
        });
    }

    render() {
        const { produtos, itensPorLinha } = this.props;
        return (
            <div className="Produtos flex wrap">
                {
                    produtos.map(item => (
                        <Produto
                            item={item}
                            key={item.id}
                            porLinha={itensPorLinha} />
                    ))
                }
            </div>
        )
    }
}

export default Produtos;