import styled from 'styled-components';
import {
  AiFillLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import usePhotos from '../hooks/usePhotos';
import LoadMore from '../utils/LoadMore';
import CardPost from '../components/CardPost';

const StyledPosts = styled.div`
  footer {
    button {
      padding: 1rem;
      border-radius: 18px;
      background: #0e9fb7;
      border: none;
    }
  }
`;

const Posts = () => {
  const [limit, setLimit] = useState(5);
  const data = usePhotos({ limit: limit });
  const HandleLoadMore = () => {
    setLimit(limit + 5);
  };
  limit;
  return (
    <>
      <h1>Posts</h1>
      <StyledPosts>
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

//
