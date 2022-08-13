import React from 'react';
import Head from 'next/head';

export function DefaultHelmet({
    site, // "@mallo || @prizepayments"
    title,
    description,
    url,
    twitterTitle,
    twitterDescription,
    twitterImage,
    ogTitle,
    ogDescription,
    ogImage,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta key="title" name="title" content={title} />
            <meta key="description" name="description" content={description} />
            <meta key="url" name="url" content={url} />

            <meta key="og:type" property="og:type" content="website" />
            <meta key="og:url" property="og:url" content={url} />
            <meta key="og:title" property="og:title" content={ogTitle} />
            <meta
                key="og:description"
                property="og:description"
                content={ogDescription}
            />
            <meta key="og:image" property="og:image" content={ogImage} />

            <meta key="twitter:site" name="twitter:site" content={site} />
            <meta key="twitter:creator" name="twitter:creator" content={site} />
            <meta
                key="twitter:card"
                property="twitter:card"
                content="summary_large_image"
            />
            <meta key="twitter:url" property="twitter:url" content={url} />
            <meta
                key="twitter:title"
                property="twitter:title"
                content={twitterTitle}
            />
            <meta
                key="twitter:description"
                property="twitter:description"
                content={twitterDescription}
            />
            <meta
                key="twitter:image"
                property="twitter:image"
                content={twitterImage}
            />
        </Head>
    );
}
