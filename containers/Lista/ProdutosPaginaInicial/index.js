import React, { Component } from 'react';
import Produtos from '../../../components/Listas/Produtos';

const PRODUTOS = [
    {
        id: 19239123,
        fotos: [ "/static/img/mouse-1.png"],
        titulo: "Mouse Gamer 1",
        preco: 35,
        promocao: 25,
    },
    {
        id: 19239124,
        fotos: [ "/static/img/mouse-4.png"],
        titulo: "Mouse Gamer 2",
        preco: 35,
        promocao: 25,
    },
    {
        id: 19239125,
        fotos: [ "/static/img/mouse-5.png"],
        titulo: "Mouse Gamer 3",
        preco: 35,
        promocao: 25,
    },
    {
        id: 19239126,
        fotos: [ "/static/img/mouse-2.png"],
        titulo: "Mouse Gamer 4",
        preco: 35,
        promocao: 25,
    },
]

class ProdutosPaginaInicial extends Component {
    render() {
        return (
            <div className="container Produtos-Pagina-Inicial flex vertical">
                <h2>Lançamentos</h2>
                <br />
                <Produtos
                    produtos={PRODUTOS}
                    itensPorLinha={4}
                />
            </div>
        )
    }
}

export default ProdutosPaginaInicial;