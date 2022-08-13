import sanityClient from '@sanity/client';
import { getFile } from '@sanity/asset-utils';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'x708wyxr',
    dataset: 'production',
    token: 'skIIlrvjiQAnGaxD9EBGEbocYQzvM2eO9jDGkjoWUHKJihNH1x11jgH6ob4f7yGHdOrFBkATE52NwjK0zU4Xt8naEQU5aGYqMLSxIXEnVnuDblgYfPYq6FuGiCOGBeTbVlpMctR5ZfPQ8Ni89iZ9ZOKoF2utf7oCDdvbbqVjbH3tsJRk7DBQ',
    useCdn: false, // `false` if you want to ensure fresh data
});

export function getSanityClient() {
    return client;
}

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client);

    return builder.image(source);
}

export function urlForFile(fileAsset) {
    const file = getFile(fileAsset, client.config());
    return file.asset.url;
}
