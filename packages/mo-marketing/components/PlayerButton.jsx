import styled from 'styled-components';

export const PlayerButton = styled.button`
    /* all: unset; */
    background: #ffff;
    border-color: #79a94d;
    border-radius: 40px;
    color: #79a94d;
    padding-left: 32px;
    padding-right: 32px;
    font-weight: 700;
    margin-top: 16px;
    width: 270px;
    height: 55px;
    cursor: pointer;
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-bottom: 50px;
    }

    :hover {
        opacity: 0.7;
        border-color: #79a94d;
    }
`;
