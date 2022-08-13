import React, { useContext } from "react";
import { Container } from "./Container";
import styled from "styled-components";
import { UserTypeContext } from "../context/userTypeContext";
import { urlForFile } from "../utils/sanityClient";

import { PayorButton } from "./PayorButton";
import { PlayerButton } from "./PlayerButton";
import PropTypes from "prop-types";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 40px;
  padding-left: 45px;
`;

const ArrowPayor = ({ fill = "white" }) => (
  <svg
    style={{
      verticalAlign: "unset",
    }}
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6461 5.17591L10.7119 0.334493C10.2573 -0.111498 9.49936 -0.111498 9.04475 0.334493C8.59015 0.780483 8.59015 1.52402 9.04475 1.97001L11.9579 4.84535H1.17895C0.522377 4.84535 0 5.35783 0 6.00197C0 6.6461 0.522377 7.15858 1.17895 7.15858H11.9579L9.04408 10.0172C8.58948 10.4632 8.58948 11.2068 9.04408 11.6528C9.2796 11.8838 9.58289 12 9.88619 12C10.1895 12 10.4928 11.8845 10.7283 11.6528L15.646 6.82819C15.8651 6.61325 16 6.31571 16 6.00203C16 5.68836 15.8822 5.39081 15.646 5.17588L15.6461 5.17591Z"
      fill={`${fill}`}
    />
  </svg>
);
const ArrowPayee = ({ fill = "#79A94D" }) => (
  <svg
    style={{
      verticalAlign: "unset",
    }}
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6461 5.17591L10.7119 0.334493C10.2573 -0.111498 9.49936 -0.111498 9.04475 0.334493C8.59015 0.780483 8.59015 1.52402 9.04475 1.97001L11.9579 4.84535H1.17895C0.522377 4.84535 0 5.35783 0 6.00197C0 6.6461 0.522377 7.15858 1.17895 7.15858H11.9579L9.04408 10.0172C8.58948 10.4632 8.58948 11.2068 9.04408 11.6528C9.2796 11.8838 9.58289 12 9.88619 12C10.1895 12 10.4928 11.8845 10.7283 11.6528L15.646 6.82819C15.8651 6.61325 16 6.31571 16 6.00203C16 5.68836 15.8822 5.39081 15.646 5.17588L15.6461 5.17591Z"
      fill={`${fill}`}
    />
  </svg>
);

const ArrowContainer = styled.span`
  padding-left: 15px;
`;

const EllipseContainer = styled.div`
  position: relative;
  width: 791px;
  height: 791px;
  left: 324px;
  z-index: -1;
  top: 162px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #e4eedb 47.92%,
    rgba(228, 238, 219, 0) 100%
  );
`;

const CtaButtons = () => {
  const { setUserType } = useContext(UserTypeContext);

  return (
    <HeaderContainer>
      <Container>
        <a href="#contact-us" onClick={() => setUserType("payor")}>
          <PayorButton>
            Request a Demo
            <ArrowContainer>
              <ArrowPayor />
            </ArrowContainer>
          </PayorButton>
        </a>
        <a href="#contact-us" onClick={() => setUserType("payee")}>
          <PlayerButton>
            I’m Expecting a Payment
            <ArrowContainer>
              <ArrowPayee />
            </ArrowContainer>
          </PlayerButton>
        </a>
      </Container>
    </HeaderContainer>
  );
};

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  @media screen and (max-width: 768px) {
    flex-direction: columns;
  }
`;

const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 55px;
`;

const StyledH1 = styled.h3`
  display: flex;
  justify-content: center;
  font-family: "Faktum";
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  padding-bottom: 40px;
`;

export default function Header({ headerText }) {
  return (
    <div>
      <div>
        <div>
          <EllipseContainer>
            <StyledVideo>
              <video
                className="w-100 hero-image"
                width="800"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={urlForFile(headerText.video)} type="video/webm" />
              </video>
            </StyledVideo>

            <StyledH1>
              Fast and compliant global payments with low, flat-rate fees
            </StyledH1>
          </EllipseContainer>
          <CtaContainer>
            <CtaButtons />
          </CtaContainer>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  fill: PropTypes.string,
  headerText: PropTypes.object,
};
