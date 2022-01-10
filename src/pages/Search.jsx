import { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
import useTrendingPhotos from '../hooks/useTrendingPhotos';
import styled from 'styled-components';
import SwiperTrending from '../Containers/SwiperTrending';
import CardPost from '../components/CardPost';

const StyledSearch = styled.div`
  min-height: 100vh;
  height: 100%;
  form {
    margin-top: 400px;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        border-radius: 1rem;
        border: none;
        padding: 0.5rem;
        width: 80%;
        background: none;
        outline: none;
        font-size: 1.2rem;
        color: #170055;
        border-bottom: 1px solid #170055;
        :focus {
          outline: none;
        }
        ::placeholder {
          font-weight: bold;
        }
      }
      button {
        margin: 1rem 0;
        background: none;
        border: none;
        border-bottom: 1px solid #000000;
        padding: 0.8rem;
        color: #0ff;
      }
    }
  }
  @media (min-width: 758px) and (max-width: 1024px) {
    .renderSearch {
      margin: 0 6rem;
    }
    form{
      button{
        margin: 1rem 0;
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    .renderSearch {
      margin: 0 10rem;
    }
    
  }
`;

const Search = () => {
  const [search, setSearch] = useState('');
  const dataTrending = useTrendingPhotos();
  const dataSearch = useSearch({ title: search });
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const value = evt.target[0].value;
    setSearch(value);
  };
  return (
    <StyledSearch>
      <h1>expolore</h1>
      <div className="trendingRandom">
        <SwiperTrending />
      </div>
      <form onSubmit={HandleSearch}>
        <label>
          <input type="text" placeholder="search Photos" />
        </label>
        <label>
          <button type="submit">search</button>
        </label>
      </form>
      <div className="renderSearch">
        {dataSearch.results &&
          dataSearch.results.map((item) => {
            return <CardPost i={item} key={item.div}/>;
          })}
      </div>
    </StyledSearch>
  );
};

export default Search;
