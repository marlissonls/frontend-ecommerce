import React from 'react';
import Link from 'next/link';

const Paginas = () => (
    <div className="flex-1 flex vertical institucional">
        <div>
            <h2>Páginas</h2>
            <br />
        </div>
        <Link className='pages-nav' href="/">
            <span>Página Inicial</span>
        </Link>
        <Link className='pages-nav' href="/carrinho">
            <span>Ver Sacola</span>
        </Link>
        <Link className='pages-nav' href="/area-cliente">
            <span>Minha Conta</span>
        </Link>
        <Link className='pages-nav' href="/Sobre">
            <span>Sobra a Loja</span>
        </Link>
    </div>
)

export default Paginas;