import { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePhotos from '../hooks/usePhotos';

import Loading from '../components/Loading';
import CardPost from '../components/CardPost';

const StyledPosts = styled.div`
  footer {
    button {
      background: #0c0c0c;
      border: none;
      border-radius: .8rem;
      padding: .8rem;
      color:#0ff; 
    } 
  }
`;

const Posts = () => {
  const [limit, setLimit] = useState(5);
  const { data, loading } = usePhotos({ limit: limit });
  const HandleLoadMore = () => {
    setLimit(limit + 5);
  };

  return (
    <>
      <h1>Posts</h1>
      <StyledPosts>
        {loading && <Loading />}
        {data.map((i) => {
          return <CardPost i={i} key={i.id} />;
        })}
        <footer className="loadMore">
          <button onClick={HandleLoadMore}>
            <span>view more</span>
          </button>
        </footer>
      </StyledPosts>
    </>
  );
};

export default Posts;
