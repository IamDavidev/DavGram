import { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
import useTrendingPhotos from '../hooks/useTrendingPhotos';

const Search = () => {
  const [search, setSearch] = useState('');
  const dataTrending = useTrendingPhotos();
  const dataSearch = useSearch({ title: search });
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const value = evt.target[0].value;
    console.log('[value] :', value);
    setSearch(value);
  };
  return (
    <>
      <h1>expolore</h1>

      <form onSubmit={HandleSearch}>
        <label>
          search : <input type="text" />
        </label>
        <label>
          <button type="submit">search</button>
        </label>
      </form>
      <div className="renderTrending">
        {dataTrending.map((item) => {
          return (
            <div className="" key={item.id}>
              <img src={item.urls.regular} alt={item.alt_description} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
