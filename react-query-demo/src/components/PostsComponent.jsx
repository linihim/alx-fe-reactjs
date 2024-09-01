import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, refetch } = useQuery(
    ['posts', page],
    fetchPosts,
    {
      cacheTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 1 * 60 * 1000, // 1 minute
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice((page - 1) * 10, page * 10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>
          Previous Page
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(old => old + 1)} disabled={page === 10}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PostsComponent;