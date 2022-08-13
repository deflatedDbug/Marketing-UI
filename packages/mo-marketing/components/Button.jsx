import styled from 'styled-components';

export const Button = styled.button`
    /* all: unset; */
    border-radius: 40px;
    border-color: #062400;
    background: #062400;
    color: #fff;
    height: 43px;
    width: 159px;
    text-align: center;
    line-height: 10px;
    font-family: Faktum;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

    :hover {
        color: #79a94d;
        background: white;
        border-color: #0a0a09;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`;
