import { getPreviewPost, getBaseUrl } from '@paymentlabs/utils';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Article } from '@paymentlabs/components';

function Preview(props) {
    const [post, setPost] = useState(null);
    const id = props?.router?.query?.id;

    useEffect(() => {
        async function fetch() {
            try {
                const resp = await getPreviewPost(id);
                setPost(resp.posts[0]);
            } catch (e) {
                alert('Could not find post with id: ', id);
            }
        }

        if (id) {
            fetch();
        }
    }, [id]);

    if (!post) {
        return <div />;
    }

    return (
        <Article
            post={post}
            defaultImage={`${getBaseUrl('mo')}/branding/opengraph_primary.png`}
            brand="mo"
        />
    );
}

export default withRouter(Preview);
