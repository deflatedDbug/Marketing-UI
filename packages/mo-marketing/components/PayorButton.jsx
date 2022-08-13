import styled from 'styled-components';

export const PayorButton = styled.button`
    color: white;
    border: 0px;
    border-radius: 40px;
    background-color: #79a94d;
    padding-left: 32px;
    padding-right: 32px;
    font-weight: 700;
    margin-top: 16px;
    width: 210px;
    margin-right: 24px;
    height: 55px;
    cursor: pointer;
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-right: 0px;
    }
    :hover {
        opacity: 0.8;
    }
`;
