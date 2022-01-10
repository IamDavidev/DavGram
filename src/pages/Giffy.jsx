import useGiffys from '../hooks/useGiffys';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
      object-fit: cover;
    }
  }
  .loadMore {
    button {
      margin: 1rem 0;
      background: none;
      border: none;
      border-bottom: 1px solid #000000;
      padding: 0.8rem;
      color: #0ff;
    }
  }
  @media (min-width: 758px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .renderGifs {
      margin: 1rem 3rem;
    }
    img {
      max-height: 300px;
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
  h1 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .renderGifs {
      margin: 1rem 5rem;
    }
    img {
      max-height: 300px;
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

const Giffy = () => {
  const [limit, setLimit] = useState(20);
  const data = useGiffys({ limit: limit });
  const [gifs, setGifs] = useState(data);
  const HandleLoadMore = () => {
    setLimit(limit + 10);
    setGifs(data);
  };
  return (
    <StyledGifs>
      <h1>Giffy</h1>
      {data &&
        gifs.map((gif) => {
          return (
            <div className="renderGifs" key={gif.id}>
              <picture>
                <img src={gif.url} alt="gif itsDavid Davgram" />
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
