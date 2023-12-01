import React from 'react';

export default () => (
    <style jsx global>{`
        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body, * {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        
        a {
            text-decoration: none;
        }

        .flex { display: flex; }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
        .flex-3 { flex: 3; }
        .flex-center {
            justify-content: center;
            align-items: center;
        }

        .Header {
            max-height: 150px;
        }

        .header-wrapper, .categorias {
            margin: 0;
            width: 100%;
            display: flex;
        }

        .logo {
            max-width: 230px
        }

        .input-pesquisa {
            font-size: 1rem;
            color: #333;
            padding: 10px 25px;
            width: 90%;
            border: 1px solid #999;
            border-radius: 10px;
        }

        .button-pesquisa {
            margin-left: -45px;
            font-size: 1.2rem;
            color: #333;
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }

        .itens-cabecalho {
            padding: 20px 0
        }
        .item-cabecalho {
            cursor: pointer;
        }
        .item-cabecalho i {
            color: #e87c08;
            font-size: 1.7rem;
            margin: 0 5px;
        }
        .item-cabecalho span {
            color: #777;
            font-size: 14px;
        }
        .item-cabecalho.cart span {
            font-size: 1rem;
            background-color: #222;
            color: #fff;
            border-radius: 100px;
            width: 20px;
            padding: 0 5px;
            margin-left: -15px;
            position: relative;
            top: -15px;
        }

        .categorias {
            justify-content: space-betwen;
        }

        .categorias-wrapper {
            background-color: #ffedd9;
        }

        .categoria-item {
            padding: 10px 5px;
            border-right: 1px solid #e87c08;
            cursor: pointer;
            font-weight: bold;
            font-size: 12px;
            color: #333;
            text-transform: uppercase;
        }

        .categoria-item:hover {
            background-color: #e87c08;
        }

        .categorias a {
            flex-grow: 1;
        }

        @media screen and (max-width: 720px) {
            .Header {
                max-height: 250px;
            }

            .header-wrapper, .categorias {
                flex-direction: column;
            }

            .categorias {
                overflow-x: scroll;
                
            }

            .categoria-item {
                border-right: 0;
            }

            .categoria-item:hover {
                background-color: #ffedd9;
            }
        }
    `}</style>
)