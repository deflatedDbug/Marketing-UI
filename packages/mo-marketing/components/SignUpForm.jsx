import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { getCookie } from '@paymentlabs/utils';
import styled from 'styled-components';
import { UserTypeContext } from '../context/userTypeContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { Mobile, Desktop } from '@paymentlabs/components';

const PlayerOrPayorButton = styled.button`
    background: #79a94d;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 16px 32px 16px 32px;
    height: 56px;
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;

const HeaderContainer = styled.div`
    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
    }
`;

const TextArea = styled.textarea`
    border: none;
    border-bottom: 2px solid #062a00;
    background-color: #ffffff;
    height: 50px;
    outline: none;
    width: 100%;
    min-height: 200px;
    padding-top: 22px;
    :active {
        border-bottom: 2px solid #79a94d;
    }
    :focus {
        border-bottom: 2px solid #79a94d;
    }
`;

const Arrow = () => (
    <svg
        style={{
            verticalAlign: 'unset',
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
            fill="white"
        />
    </svg>
);

const SubmitButton = styled.button`
    color: white;
    background-color: #79a94d;
    border: none;
    border-radius: 0.25rem;
    height: 54px;
    margin-top: 12px;
    margin-bottom: 32px;
    width: 168px;
    height: 54px;

    :disabled {
        opacity: 0.65;
    }

    @media screen and (max-width: 767px) {
        padding-left: 4px;
        padding-right: 4px;
        width: 100%;
    }
`;

const ArrowContainer = styled.span`
    padding-left: 5px;
`;

const ButtonAsRadio = styled.input`
    display: none;
`;

const PayoutText = styled.div`
    margin-top: 64px;
    margin-bottom: 32px;
    color: #062a00;

    @media screen and (max-width: 767px) {
        margin-top: 32px;
        margin-bottom: 24px;
    }
`;

const RadioToolbar = styled.div`
    box-sizing: border-box;

    label {
        display: inline-block;
        background-color: #ffffff;
        padding: 10px 15px;
        font-size: 16px;
        border: 1px solid #062a00;
        border-radius: 2px;
        color: #062a00;
        width: 100%;
        height: 48px;
    }

    label.selected {
        background-color: #062a00;
        color: white;
    }

    label:hover {
        background-color: #062a00;
        color: white;
    }
`;

const HubspotForm = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 64px;

    input {
        border: none;
        border-bottom: 2px solid #062a00;
        background-color: #ffffff;
        height: 50px;
        outline: none;
    }

    input:focus {
        border: none;
        border-bottom: 2px solid #79a94d;
        outline: none;
    }

    input:active {
        border-bottom: 2px solid #79a94d;
        outline: none;
    }

    input:focus:active {
        border-bottom: 2px solid #79a94d;
        outline: none;
    }

    .money-button {
        background: $lightGray;
        border: 1px solid #062a00;
        border-radius: 0;
    }

    h4 {
        color: #79a94d;
        text-align: center;
    }

    @media screen and (max-width: 767px) {
        padding-top: 48px;

        h4 {
            color: #79a94d;
            text-align: left;
        }
    }

    @media screen and (max-width: 767px) {
        button {
            padding: 0.375rem 0.75rem;
        }
    }
`;

const Disclaimer = styled.div`
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-bottom: 128px;

    @media screen and (max-width: 767px) {
        text-align: left;
        padding-bottom: 16px;
    }
`;

const DetailText = styled.p`
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`;

function isValidEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function SignUpForm({ contactFormPlayer, contactFormPayor }) {
    const { userType } = useContext(UserTypeContext);

    return (
        <HubspotForm>
            {userType === 'payee' ? (
                <SignUpFormPayee contactFormPlayer={contactFormPlayer} />
            ) : (
                <SignUpFormPayor contactFormPayor={contactFormPayor} />
            )}

            <div>
                <Disclaimer>
                    MALLO needs the contact information you provide to us to
                    contact you about our products and services. For information
                    about our privacy practices and commitment to protecting
                    your privacy, please review our{' '}
                    <a
                        target="_blank"
                        href="https://www.paymentlabs.io/privacy-policy"
                        rel="noreferrer"
                    >
                        Privacy Policy
                    </a>
                    .
                </Disclaimer>
            </div>
        </HubspotForm>
    );
}

function SignUpFormPayee({ contactFormPlayer }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [formStatus, setFormStatus] = useState(null);
    const { setUserType } = useContext(UserTypeContext);

    async function submitZendeskForm() {
        try {
            await fetch('https://mallo.zendesk.com/api/v2/requests.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    request: {
                        requester: {
                            name: `${firstName} ${lastName}`,
                            email,
                        },
                        subject,
                        comment: {
                            body: comment,
                        },
                    },
                }),
            });
            setFormStatus('success');
        } catch (e) {
            console.error(e);
            setFormStatus(null);
        }
    }

    if (formStatus === 'success') {
        return (
            <HubspotForm>
                <div className="text-dark text-center">
                    Thank you – we’ll be in touch as soon as we can!
                </div>
            </HubspotForm>
        );
    }

    const recaptchaRef = React.createRef();

    const isDisabled =
        !firstName?.length ||
        !lastName?.length ||
        !email?.length ||
        !isValidEmail(email) ||
        !subject?.length ||
        !comment?.length;

    return (
        <div>
            <HeaderContainer>
                <div>
                    <Mobile>
                        <h4 className="text-dark text-center">
                            {contactFormPlayer.header}
                        </h4>
                    </Mobile>
                    <Desktop>
                        <h2 className="text-dark">
                            {contactFormPlayer.header}
                        </h2>
                    </Desktop>
                    <DetailText>{contactFormPlayer.detail}</DetailText>
                </div>

                <PlayerOrPayorButton onClick={() => setUserType('payor')}>
                    {contactFormPlayer.secondaryCta}{' '}
                    <ArrowContainer>
                        <Arrow />
                    </ArrowContainer>
                </PlayerOrPayorButton>
            </HeaderContainer>
            <Form>
                <Row>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="text"
                            placeholder="*First Name"
                            name="firstname"
                            className="w-100"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="text"
                            placeholder="*Last Name"
                            name="lastname"
                            className="w-100"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="email"
                            placeholder="*Email"
                            name="email"
                            className="w-100"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" className="mb-2">
                        <input
                            type="text"
                            placeholder="*Subject"
                            name="subject"
                            className="w-100"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </Col>
                </Row>

                <TextArea
                    value={comment}
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="How can we help?"
                />

                <div className="mt-12 mb-32">
                    <SubmitButton
                        disabled={isDisabled}
                        onClick={async (e) => {
                            e.preventDefault();
                            const token =
                                await recaptchaRef.current.executeAsync();

                            if (token) {
                                submitZendeskForm();
                            }
                        }}
                    >
                        {contactFormPlayer.cta}
                    </SubmitButton>
                </div>
                <ReCAPTCHA
                    size="invisible"
                    ref={recaptchaRef}
                    sitekey="6LdcJIMdAAAAAIGjYIfhsDquoh5MRl67-3M-WseH"
                />
            </Form>
        </div>
    );
}

function SignUpFormPayor({ contactFormPayor }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [payout, setPayout] = useState();
    const [formStatus, setFormStatus] = useState(null);
    const { setUserType } = useContext(UserTypeContext);

    async function submitHubspotForm() {
        try {
            const resp = await fetch('https://initech.paymentlabs.io/initech');
            const { ip } = await resp.json();
            const cookie = getCookie('hubspotutk');
            const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/6553783/39eabdc1-037d-4020-bf1b-f9ed634b8f02`;
            await fetch(hubspotUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    context: {
                        ...(cookie ? { hutk: cookie } : {}),
                        pageUri: 'https://www.mallo.io/',
                        pageName: 'Landing Page',
                        ipAddress: ip,
                    },
                    fields: [
                        {
                            name: 'firstname',
                            value: firstName,
                        },
                        {
                            name: 'lastname',
                            value: lastName,
                        },
                        {
                            name: 'email',
                            value: email,
                        },
                        {
                            name: 'company',
                            value: company,
                        },
                        {
                            name: 'annual_prizes',
                            value: payout,
                        },
                    ],
                }),
            });
            setFormStatus('success');
        } catch (e) {
            console.error(e);
            setFormStatus(null);
        }
    }

    if (formStatus === 'success') {
        return (
            <HubspotForm>
                <div className={classnames('text-dark text-center ')}>
                    Thank you for your interest. We will reach out soon to
                    schedule a demo!
                </div>
            </HubspotForm>
        );
    }

    const recaptchaRef = React.createRef();

    const isDisabled =
        !firstName?.length ||
        !lastName?.length ||
        !email?.length ||
        !isValidEmail(email) ||
        !company?.length ||
        !payout?.length;

    return (
        <div>
            <HeaderContainer>
                <div>
                    <Mobile>
                        <h4 className="text-dark text-center">
                            {contactFormPayor.header}
                        </h4>
                    </Mobile>
                    <Desktop>
                        <h2 className="text-dark">{contactFormPayor.header}</h2>
                    </Desktop>
                    <DetailText>{contactFormPayor.detail}</DetailText>
                </div>

                <PlayerOrPayorButton onClick={() => setUserType('payee')}>
                    {contactFormPayor.secondaryCta}
                    <ArrowContainer>
                        <Arrow />
                    </ArrowContainer>
                </PlayerOrPayorButton>
            </HeaderContainer>

            <Form>
                <Row>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="text"
                            placeholder="*First Name"
                            name="firstname"
                            className="w-100"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="text"
                            placeholder="*Last Name"
                            name="lastname"
                            className="w-100"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="email"
                            placeholder="*Email"
                            name="email"
                            className="w-100"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" md="6" className="mb-2">
                        <input
                            type="text"
                            placeholder="*Company"
                            name="company"
                            className="w-100"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </Col>
                </Row>

                <PayoutText>Estimated yearly payments volume</PayoutText>
                <RadioToolbar>
                    <Row>
                        <Col xs="6" md="3" className="mb-2">
                            <label
                                className={classnames('text-center', {
                                    selected: payout === '~$250,000',
                                })}
                            >
                                <ButtonAsRadio
                                    type="radio"
                                    name="annual_prizes"
                                    value={'~$250,000'}
                                    checked={payout === '~$250,000'}
                                    onChange={() => setPayout('~$250,000')}
                                />
                                ~$250,000
                            </label>
                        </Col>
                        <Col xs="6" md="3" className="mb-2">
                            <label
                                className={classnames('text-center', {
                                    selected: payout === '~$1,000,000',
                                })}
                            >
                                <ButtonAsRadio
                                    type="radio"
                                    name="annual_prizes"
                                    value={'~$1,000,000'}
                                    checked={payout === '~$1,000,000'}
                                    onChange={() => setPayout('~$1,000,000')}
                                />
                                ~$1,000,000
                            </label>
                        </Col>
                        <Col xs="6" md="3" className="mb-2">
                            <label
                                className={classnames('text-center', {
                                    selected: payout === '~$2,500,000',
                                })}
                            >
                                <ButtonAsRadio
                                    type="radio"
                                    name="annual_prizes"
                                    value={'~$2,500,000'}
                                    checked={payout === '~$2,500,000'}
                                    onChange={() => setPayout('~$2,500,000')}
                                />
                                ~$2,500,000
                            </label>
                        </Col>
                        <Col xs="6" md="3" className="mb-2">
                            <label
                                className={classnames('text-center', {
                                    selected: payout === '$5,000,000+',
                                })}
                            >
                                <ButtonAsRadio
                                    type="radio"
                                    name="annual_prizes"
                                    value={'$5,000,000+'}
                                    checked={payout === '$5,000,000+'}
                                    onChange={() => setPayout('$5,000,000+')}
                                />
                                $5,000,000+
                            </label>
                        </Col>
                    </Row>
                </RadioToolbar>
                <div className="mt-12 mb-32">
                    <SubmitButton
                        disabled={isDisabled}
                        onClick={async (e) => {
                            e.preventDefault();
                            const token =
                                await recaptchaRef.current.executeAsync();
                            if (token) {
                                submitHubspotForm();
                            }
                        }}
                    >
                        {contactFormPayor.cta}
                    </SubmitButton>
                </div>
                <ReCAPTCHA
                    size="invisible"
                    ref={recaptchaRef}
                    sitekey="6LdcJIMdAAAAAIGjYIfhsDquoh5MRl67-3M-WseH"
                />
            </Form>
        </div>
    );
}
