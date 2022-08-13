import LinkedInSvg from "../public/assets/connect/linkedin.svg";
import Head from "next/head";

import { getSanityClient, urlFor } from "../utils/sanityClient";

export default function About(props) {
  return (
    <main className="about-background-top-left about-mobile-background-top-left">
      <Head>
        <title>About Us</title>
      </Head>
      <AboutUs
        LinkedIn={() => <LinkedInSvg />}
        brand="mo"
        header={props.header}
        ourTeam={props.ourTeam}
        urlFor={urlFor}
      />
    </main>
  );
}

export async function getStaticProps(context) {
  const query = '*[_type == "aboutPage"]';
  const pageData = (await getSanityClient().fetch(query))[0];

  return {
    props: {
      ...pageData,
    }, // will be passed to the page component as props
  };
}
