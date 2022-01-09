import useGiffys from '../hooks/useGiffys';
import styled from 'styled-components';
import { useState } from 'react';

const StyledGifs = styled.div`
  .renderGifs {
    border-radius: 7px;
    background: #515f6f;
    box-shadow: inset -5px -5px 10px #22282f, inset 5px 5px 10px #8096af;
    margin: 1rem 0;
    padding: 0.7rem 1rem;
    h4 {
      margin: 0px;
      padding: 0px;
    }
    img {
      width: 100%;
      object-fit: cover;
      z-index: 1;
      border-radius: 1rem;
    }
  }

  .loadMore {
    button {
      padding: 0.6rem;
      border-radius: 18px;
      background: #0fafc9;
      border: none;
    }
  }
`;

const Giffy = () => {
  const [limit, setLimit] = useState(10);
  const data = useGiffys({ limit: limit });
  const HandleLoadMore = () => {
    setLimit(limit + 10);
  };
  return (
    <StyledGifs>
      <h1>Giffy</h1>
      {data &&
        data.map((gif) => {
          return (
            <div className="renderGifs" key={gif.id}>
              <picture>
                <img src={gif.url} alt="gif" />
                <h4>{gif.title}</h4>
              </picture>
            </div>
          );
        })}

      <footer className="loadMore">
        <button onClick={HandleLoadMore}>load more</button>
      </footer>
    </StyledGifs>
  );
};

export default Giffy;
