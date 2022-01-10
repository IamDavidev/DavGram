import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardPost from '../components/CardPost';
import usePhotos from '../hooks/usePhotos';

const StyledPosts = styled.div`
  footer {
    button {
      margin: 1rem 0;
      background: none;
      border: none;
      border-bottom: 1px solid #000000;
      padding: 0.8rem;
      color: #0ff;
    }
  }
  @media (min-width: 1024px) {
    .renderPhotosPost {
    }
  }
`;

const Posts = () => {
  const [limit, setLimit] = useState(15);
  const data = usePhotos({ limit: limit });
  const [photos, setPhotos] = useState(data);
  const HandleLoadMore = () => {
    setLimit(limit + 5);
    setPhotos(data);
  };
  return (
    <>
      <h1>Posts</h1>
      <StyledPosts>
        <div className="renderPhotosPost">
          {photos &&
            photos.map((i) => {
              return <CardPost i={i} key={i.id} />;
            })}
        </div>
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
