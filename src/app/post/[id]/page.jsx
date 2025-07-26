import React from 'react';

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data
}

const SinglePost = async ({ params }) => {
    const p = await params;
    const singlePostData = await getSinglePost(p.id)
    return (
        <div>
            <p>Single Post : {p.id}</p>
            <h3 className='font-medium text-2xl'>{singlePostData.title}</h3>
            <p>
                {singlePostData.body}
            </p>
        </div>
    );
};

export default SinglePost;