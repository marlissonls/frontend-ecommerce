import React, { Component } from 'react';

class Paginacao extends Component {
    render(){
        const { atual, total, limite, onClick } = this.props;
        const numeroPaginas = Math.ceil(total / limite);

        return (
            <div className='Paginacao flex horizontal flex-center'>
                {
                    [...Array(numeroPaginas).keys()].map((numero, index) => {
                        const numeroAtualDaPagina = numero * limite;
                        return (
                            <div key={index} onClick={() => onClick(numeroAtualDaPagina)} className={`paginacao-item ${numeroAtualDaPagina === atual ? 'paginacao-item-active' : ''}`} >
                                { numero + 1 }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Paginacao