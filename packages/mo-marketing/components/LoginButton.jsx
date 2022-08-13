import styled from 'styled-components';

export const LoginButton = styled.button`
    border: 0px;
    border-radius: 40px;
    background-color: #79a94d;
    padding-left: 32px;
    padding-right: 32px;
    font-weight: 700;
    height: 48px;
    margin-right: 24px;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        width: 100%;
        margin-right: 0px;
    }
    :hover {
        opacity: 0.8;
    }
`;
