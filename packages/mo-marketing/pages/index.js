import Header from '../components/Header';
import { SideBySide } from '../components/SideBySide';
import { getSanityClient } from '../utils/sanityClient';

export default function Home(props) {
    return (
        <div>
            <main>
                <Header headerText={props.header} />
                <SideBySide />
            </main>
        </div>
    );
}

export async function getStaticProps(context) {
    const query = '*[_type == "landingPage"]';
    const pageData = (await getSanityClient().fetch(query))[0];

    return {
        props: {
            ...pageData,
        },
    };
}
