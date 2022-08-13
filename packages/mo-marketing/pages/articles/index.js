import { getBaseUrl, getPosts } from '@paymentlabs/utils';
import { BlogContainer } from '@paymentlabs/components';
import Head from 'next/head';

export default function Articles({ posts }) {
    return (
        <main className="about-background-top-left about-mobile-background-top-left">
            <Head>
                <title>Articles</title>
            </Head>
            <BlogContainer
                brand="mo"
                posts={posts}
                defaultImage={`${getBaseUrl(
                    'mo'
                )}/branding/opengraph_primary.png`}
            />
        </main>
    );
}

export async function getStaticProps(context) {
    const posts = await getPosts('mallo');

    if (!posts) {
        return {
            notFound: true,
        };
    }

    return {
        props: { posts },
    };
}
