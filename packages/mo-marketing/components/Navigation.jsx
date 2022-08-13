import React, { useState } from 'react';
// import { useContext } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import Logo from '../public/assets/logo_primary.svg';
// import { UserTypeContext } from '../context/userTypeContext';
import Menu from '../public/assets/icons/menu.svg';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Mobile = styled.div`
    @media (min-width: 768px) {
    }
`;

const Desktop = styled.div`
    @media (max-width: 768px) {
    }
`;

const StyledNativeLink = styled.a`
    color: #062400 !important;
    line-height: 24px;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;

    :hover {
        color: #79a94d !important;
    }
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`;

const DesktopNavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
    }

    @media (min-width: 768px) {
        padding-left: 300px;
    }
`;

const NavLink = styled.span`
    @media (max-width: 768px) {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 16px;
    }
    @media (min-width: 768px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`;

const NavContainer = styled.div`
    box-shadow: 0px 10px 21px rgba(34, 44, 73, 0.04);
    display: flex;
    font-family: Faktum;
    background-color: white;
`;

const ClickableLogo = styled(Logo)`
    cursor: pointer;
    @media (min-width: 768px) {
        height: 48px;
    }
    @media (max-width: 768px) {
        height: 48px;
    }
`;
// const NavCta = styled.a``;

export default function Navigation({ navigationText }) {
    // const { setUserType } = useContext(UserTypeContext);
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <NavContainer>
            <Container>
                <Nav open={open}>
                    <Link href="/">
                        <ClickableLogo />
                    </Link>
                    <Mobile>
                        <div onClick={() => setOpen(!open)}>
                            <Menu />
                        </div>
                    </Mobile>
                    <>
                        <DesktopNavLinkContainer>
                            {navigationText.menu.map((link) => (
                                <NavLink key={link._key}>
                                    <StyledNativeLink
                                        key={link.text}
                                        href={link.linkUrl}
                                    >
                                        {link.text}
                                    </StyledNativeLink>
                                </NavLink>
                            ))}
                        </DesktopNavLinkContainer>
                        <Desktop>
                            <Button
                                onClick={(e) => {
                                    setOpen(false);
                                    e.preventDefault();
                                    router.push(`/#contact-us`);
                                }}
                            >
                                Request Demo
                            </Button>
                        </Desktop>
                    </>
                </Nav>
                <Mobile>
                    {open && (
                        <MobileMenu>
                            {navigationText.menu.map((link) => (
                                <NavLink key={link._key}>
                                    <StyledNativeLink
                                        target={link.linkTarget}
                                        href={link.linkUrl}
                                    >
                                        {link.text}
                                    </StyledNativeLink>
                                </NavLink>
                            ))}
                            <NavLink>
                                <Button
                                    onClick={(e) => {
                                        setOpen(false);
                                        e.preventDefault();
                                        router.push(`/#contact-us`);
                                    }}
                                >
                                    {navigationText.cta}
                                </Button>
                            </NavLink>
                        </MobileMenu>
                    )}
                </Mobile>
            </Container>
        </NavContainer>
    );
}

Navigation.propTypes = {
    navigationText: PropTypes.object,
};
