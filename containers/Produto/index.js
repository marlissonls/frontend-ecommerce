import React, { Component } from 'react';

import Hero from './Hero';
// import Descricao from './Descricao';
// import Avaliacoes from './Avaliacoes';

export default class produtoContainer extends Component {
    render(){
        return (
            <div className='container-big Produto'>
                <Hero />
                {/* <Descricao />
                <Avaliacoes /> */}
            </div>
        )
    }
}