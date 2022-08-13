import Layout from '../components/Layout';
import React, { useState } from 'react';
import { UserTypeContext } from '../context/userTypeContext';
import { getSanityClient } from '../utils/sanityClient';

function MyApp({ Component, pageProps, navigationText, footerText }) {
    const [userType, setUserType] = useState('payor');

    return (
        <UserTypeContext.Provider
            value={{
                userType,
                setUserType,
            }}
        >
            <Layout navigationText={navigationText} footerText={footerText}>
                <Component {...pageProps} />
            </Layout>
        </UserTypeContext.Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const query = '*[_type == "navigation"]';
    const navData = (await getSanityClient().fetch(query))[0];

    const footerQuery = '*[_type == "footer"]';
    const footerData = (await getSanityClient().fetch(footerQuery))[0];

    return {
        navigationText: navData,
        footerText: footerData,
    };
};

export default MyApp;
