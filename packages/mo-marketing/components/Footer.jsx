import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import Logo from '../public/assets/logo_secondary.svg';
import Twitter from '../public/assets/connect/twitter.svg';
import LinkedIn from '../public/assets/connect/linkedin.svg';
import { PayorButton } from './PayorButton';
import { LoginButton } from '../components/LoginButton';

const StyledPayor = styled(PayorButton)`
    border-radius: 25px;
    background: #79a94d;
    padding: 10px;
    width: 159px;
    text-align: center;
    line-height: 10px;
    height: 43px;
`;

const FooterGrid = styled.div`
    padding-top: 45px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 45% 12% 12% 18% 10%;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        padding-top: 39px;
        padding-left: 20px;
    }
`;

const Header = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Faktum';
    color: white;
    @media (max-width: 768px) {
        padding-top: 30px;
    }
`;

const Item = styled.div`
    font-style: normal;
    font-weight: normal;
    font-family: 'Faktum';
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #ffffff !important;
    opacity: 0.7;
    padding-top: 5px;
    a {
        color: #ffffff !important;
        text-decoration: none;

        :hover {
            opacity: 0.6;
        }
    }
`;
const HR = styled.hr`
    opacity: 0.3;
    border-top: 1px solid rgb (255, 255, 255); width 100%;
    
`;

const Disclaimer = styled.div`
    color: #ffffff;
    opacity: 0.6;
    padding-bottom: 25px;
    padding-top: 25px;
`;

const FooterContainer = styled.div`
    background-color: #062400 !important;
`;

const FooterLogo = styled(Logo)`
    width: 170px;
`;

const StyledLogin = styled(LoginButton)`
    color: #79a94d;
    border-radius: 25px;
    background: white;
    /* padding: 10px; */
    width: 159px;
    text-align: center;
    line-height: 10px;
    height: 43px;
`;

const ButtonContainer = styled.div`
    padding-bottom: 14px;
`;

export default function FooterPage({ footerText }) {
    return (
        <FooterContainer>
            <Container>
                <FooterGrid>
                    <div>
                        <FooterLogo />
                    </div>
                    {footerText.column.map((column) => (
                        <div key={column._key}>
                            <Header>{column.column}</Header>
                            {column.links.map((link, idx) => {
                                return (
                                    <Item key={idx}>
                                        {link.linkText === 'LinkedIn' && (
                                            <LinkedIn />
                                        )}
                                        {link.linkText === 'Twitter' && (
                                            <Twitter />
                                        )}
                                        <a
                                            target={link.target}
                                            href={link.linkUrl}
                                        >
                                            {link.text}
                                        </a>
                                    </Item>
                                );
                            })}
                        </div>
                    ))}
                    <div>
                        <ButtonContainer>
                            <StyledPayor>Request Demo</StyledPayor>
                        </ButtonContainer>
                        <StyledLogin>Login</StyledLogin>
                    </div>
                </FooterGrid>
                <HR />
                <Disclaimer>
                    <span>©</span> {new Date().getFullYear()} Payment Pro
                    Logistics, LLC. All Rights Reserved.
                </Disclaimer>
            </Container>
        </FooterContainer>
    );
}
