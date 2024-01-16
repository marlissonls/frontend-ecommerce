import React from 'react';

const DadosDaLoja = () => (
    <div className="flex-1 dados-da-loja">
        <div>
            <h2>Entre em Contato</h2>
            <br />
        </div>
        <p className='loja-nome'>LOJA IT</p>
        <p className='loja-cnpj'>CNPJ: 12.345.678/0001-05</p>
        <p className='loja-email'>E-mail: <a href='mailto:loja@it.com'>loja@it.com</a></p>
        <p className='loja-telefones'>Telefone:</p>
        <p className='loja-telefone'>&nbsp;&nbsp;<a href='phone:3498887666'>(34) 9888-7666</a></p>
        <p className='loja-telefone'>&nbsp;&nbsp;<a href='phone:3498887666'>(34) 9888-7666</a></p>
        <p className='loja-telefone'>&nbsp;&nbsp;<a href='phone:3498887666'>(34) 9888-7666</a></p>
        <p className='loja-endereco'>Rua Teste, 123 - Bairro Centro</p>
        <p className='loja-cidade'>Uberaba/MG - 33456-123</p>
    </div>
)

export default DadosDaLoja;