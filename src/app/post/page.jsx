import Link from 'next/link';
import React from 'react';
export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return data;
}

const PostPage = async () => {
    const posts = await getPosts()
    return (
        <div className='space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {posts.map(singlePost => {
                return <div key={singlePost.id} className='border py-2 px-3 rounded shadow-2xl'>
                    <h3 className='mb-2 text-2xl font-medium'>
                        {singlePost.title}
                    </h3>
                    <p className='mb-4'>
                        {singlePost.body}
                    </p>
                    <Link className='px-6 py-2 bottom-0 border rounded bg-gray-700 active:bg-gray-800 hover:bg-gray-900' href={`/post/${singlePost.id}`}>
                        Details
                    </Link>
                </div>
            })}
        </div>
    );
};

export default PostPage;