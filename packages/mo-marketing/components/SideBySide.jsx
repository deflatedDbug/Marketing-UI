import React from 'react';
// import { CmsContext } from '../pages';
// import { Container } from '../components/Container';
import styled from 'styled-components';
import GraphicOne from '../components/GraphicOne';
import GraphicTwo from '../components/GraphicTwo';
import GraphicThree from '../components/GraphicThree';
import GraphicFour from '../components/GraphicFour';
import GraphicFive from '../components/GraphicFive';
import GraphicSix from '../components/GraphicSix';
// import { urlFor } from '../utils/sanityClient';

// const DescriptionText = styled.StyledText`
//     font-size: 18px;
//     line-height: 28px;
//     color: #4b5679;
//     padding-bottom: 24px;
// `;
// const LightSection = styled.StyledText`
//     margin-top: 90px;
//     background-image: url(/assets/background/light-section.svg);
//     background-repeat: no-repeat;
//     background-size: auto;

//     @media (max-width: 768px) {
//         padding-top: 40px;
//     }
// `;

// const SideContainer = styled.StyledText`
//     display: flex;
//     flex-direction: row;
//     align-items: stretch;
//     flex: 1;
//     padding-bottom: 90px;

//     @media (max-width: 768px) {
//         flex-direction: column;
//         padding-bottom: 60px;
//     }
// `;

// const ContentContainer = styled.StyledText`
//     display: flex;
//     align-items: center;

//     @media (max-width: 768px) {
//         order: -1;
//     }
// `;

// const PaddingLeft = styled.StyledText`
//     padding-left: 90px;
//     @media (max-width: 768px) {
//         padding-left: 0px;
//     }
// `;

// const PaddingRight = styled.StyledText`
//     padding-right: 90px;
//     @media (max-width: 768px) {
//         padding-right: 0px;
//     }
// `;

// const H3 = styled.h3`
//     font-size: 46px;
//     line-height: 48px;
//     letter-spacing: -1px;
//     color: #222c49;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     font-weight: 700;
// `;

// const Pill = styled.span`
//     background: ${(props) => props.backgroundColor};
//     border-radius: 30px;
//     padding: 11px 9px 6px 9px;
//     color: ${(props) => props.color};
// `;

// const MobileOnly = styled.StyledText`
//     @media screen and (min-width: 768px) {
//         display: none;
//     }
// `;

// const DesktopOnly = styled.StyledText`
//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;

// const MobileIp = styled.img`
//     padding-bottom: 40px;
// `;

// const MobilePp = styled.img`
//     padding-bottom: 40px;
// `;

// const DesktopImg = styled.img`
//     height: 400px;

//     @media screen and (min-width: 1000px) {
//         height: 450px;
//     }
// `;

const StyledHeader = styled.h2`
    font-family: 'Faktum';
    font-weight: 500;
    line-height: 48px;
`;

const StyledText = styled.p`
    /* display: flex; */
    align-items: center;
    inline-size: 150px;
    overflow-wrap: break-word;
    font-family: Public sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #616161;
    line-height: 24px;
    width: auto;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.reverse && `flex-flow: row-reverse;`};

    @media screen and (max-width: 768px) {
        flex-direction: columns;
    }
`;

const TextContainer = styled.div`
    display: column;
    justify-content: center;
    align-items: center;
    width: 300px;
`;

const PaddingLeft = styled.div`
    padding-left: 150px;
`;

const PaddingRight = styled.div`
    padding-right: 150px;
`;
export function SideBySide({ imageSrc, textDescription, reverse = false }) {
    return (
        <>
            <FlexContainer reverse={reverse}>
                <GraphicOne />
                <PaddingLeft>
                    <TextContainer>
                        <div>
                            <StyledHeader>Faster payments</StyledHeader>
                        </div>
                        <div>
                            {' '}
                            <StyledText>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </StyledText>
                        </div>
                    </TextContainer>
                </PaddingLeft>
            </FlexContainer>
            <FlexContainer reverse>
                <GraphicTwo />
                <PaddingRight>
                    <TextContainer>
                        {' '}
                        <div>
                            <StyledHeader>Easy one-time payments</StyledHeader>
                        </div>
                        <div>
                            <StyledText>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </StyledText>
                        </div>
                    </TextContainer>
                </PaddingRight>
            </FlexContainer>
            <FlexContainer>
                <GraphicThree />
            </FlexContainer>
            <FlexContainer reverse={reverse}>
                <GraphicFour />
                <PaddingLeft>
                    <TextContainer>
                        {' '}
                        <StyledHeader>Bundle payments</StyledHeader>
                        <StyledText>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est.
                        </StyledText>
                    </TextContainer>
                </PaddingLeft>
            </FlexContainer>
            <FlexContainer reverse>
                <GraphicFive />
                <PaddingRight>
                    <TextContainer>
                        {' '}
                        <StyledHeader>Compliance and security</StyledHeader>
                        <StyledText>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est.
                        </StyledText>
                    </TextContainer>
                </PaddingRight>
            </FlexContainer>
            <FlexContainer>
                <GraphicSix />
            </FlexContainer>
        </>
    );
}
