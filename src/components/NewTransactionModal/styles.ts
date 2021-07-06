import styled from 'styled-components';

import { darken, transparentize } from 'polished'; // dentro do polished temos diversos meios de estilizar cores de maneira única dentro de determinado local.

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size:  1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

        
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter  0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns:  1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps{ //Isso é uma interface criada para passar o 'isActive' para dentro do meu RadioBox
    isActive: boolean; //boolean = true or false
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
};

export const RadioBox = styled.button<RadioBoxProps>` //Descobrimos que podemos passar o que foi definido na Interface dentro do button
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) //Nessa linha nós estamos definindo quais serão as cores que iremos usar após a validação do IsActive
    : 'transparent'};

    /* background: ${(props) => props.isActive ? '#000' : 'transparent'}; 
    A linha acima é uma funcionalidade EXTREMAMENTE importante do StyledComponents, nós podemos receber props do elemento que está definido ou seja se
    se tivermos um button definido depois do styled (EX: export const Nomedocomponente = styled.button) recebemos as propriedades desse elemento para
    conseguir trabalhar com  ele dentro do styled components */

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
    width: 20px;
    height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

`;