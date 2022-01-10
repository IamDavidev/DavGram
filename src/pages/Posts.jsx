import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardPost from '../components/CardPost';
import CardTrending from '../components/CardTrending';
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
  .suggestions {
    position: fixed;
    bottom: 0;
    left: 0;
  }
  @media (min-width: 758px) and (max-width: 1024px) {
    .renderPhotosPost {
      margin: 0 6rem;
    }
    .suggestion: {
      position: fixed;
    }
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .renderPhotosPost {
      margin: 0 8rem;
      grid-column: 1/3;
      padding: 1rem;
    }
    footer {
      grid-column: 1/3;
    }
    .suggestions {
      position: relative;
      h1 {
        text-align: center;
      }
      .suggestionsCard {
        margin: 0 3rem;
      }
    }
    .loadMore {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
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
        <div className="suggestions">
          <CardTrending />
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
