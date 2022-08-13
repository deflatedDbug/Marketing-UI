import { getPost, getPosts, getSitemap, getBaseUrl } from '@paymentlabs/utils';
import { DefaultHelmet } from '../../components/ArticleHeader';
import { Article } from '@paymentlabs/components';

export default function Slug({ post }) {
    return (
        <main className="about-background-top-left about-mobile-background-top-left">
            <DefaultHelmet
                site="@mallo"
                title={post?.meta_title || post?.title}
                description={post?.meta_description || post?.excerpt}
                url={`https://www.mallo.io/articles/${post.slug}`}
                twitterTitle={post?.twitter_title || post.title}
                twitterDescription={post?.twitter_description || post?.excerpt}
                twitterImage={
                    post?.twitter_image ||
                    post?.feature_image ||
                    `${getBaseUrl('mo')}/branding/opengraph_primary.png`
                }
                ogTitle={post?.og_title || post.title}
                ogDescription={post?.og_description || post?.excerpt}
                ogImage={
                    post?.og_image ||
                    post?.feature_image ||
                    `${getBaseUrl('mo')}/branding/opengraph_primary.png`
                }
            />

            <Article
                post={post}
                defaultImage={`${getBaseUrl(
                    'mo'
                )}/branding/opengraph_primary.png`}
                brand="mo"
            />
        </main>
    );
}

export async function getStaticPaths() {
    const posts = await getPosts('mallo');

    // Get the paths we want to create based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const fs = require('fs');
    const format = require('xml-formatter');
    const sitemap = getSitemap('mallo', paths);

    const formattedSitemap = format(sitemap, {
        indentation: '  ',
        filter: (node) => node.type !== 'Comment',
        collapseContent: true,
        lineSeparator: '\n',
    });

    fs.writeFile('./public/sitemap.xml', formattedSitemap, (err) => {
        if (err) {
            console.error('Failed to generate sourcemap', err);
        }
    });

    // { fallback: false } means posts not found should 404.
    return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
    const post = await getPost(context.params.slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
    };
}
