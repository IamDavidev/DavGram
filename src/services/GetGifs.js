const API_KEY = 'shM3obwOZz45bCiiBEjvjq9a5kagrzqR';

const GetGifs = async ({limit}) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=${limit}&api_key=shM3obwOZz45bCiiBEjvjq9a5kagrzqR`
  )
    .then((res) => res.json())
    .then((json) => {
      const { data } = json;
      const dataGifs = data.map((gif) => {
        const { url } = gif.images.downsized_medium;
        const { id, title } = gif;
        return {
          url,
          id,
          title,
        };
      });
      return dataGifs;
    });
  response;
  return response;
};

export default GetGifs;
