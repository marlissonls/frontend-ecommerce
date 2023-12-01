import React from 'react';
import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal horizontal-mb wrap-mb">
            <ItemBeneficio
                icone="fa-globe"
                texto="Em 1x sem juros para todo o site" />
            <ItemBeneficio
                icone="fa-truck"
                texto="Entregamos em todo o Brasil" />
            <ItemBeneficio
                icone="fa-windows"
                texto="Os melhores produtos de informática" />
            <ItemBeneficio
                icone="fa-apple"
                texto="Fornecedores oficiais" />
        </div>
    </div>
)

export default Beneficios;