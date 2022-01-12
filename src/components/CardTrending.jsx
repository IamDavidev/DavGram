import useTrendingPhotos from '../hooks/useTrendingPhotos';

const CardTrending = () => {
  const data = useTrendingPhotos({ limit: 10 });
  return (
    <>
      <h1>suggestions</h1>
      {data &&
        data.map((Tre) => {
          return (
            <div className="suggestionsCard" key={Tre.id}>
              <img src={Tre.urls.small} alt="" />
            </div>
          );
        })}{' '}
    </>
  );
};

export default CardTrending;
