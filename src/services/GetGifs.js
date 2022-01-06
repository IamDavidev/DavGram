const API_KEY = 'shM3obwOZz45bCiiBEjvjq9a5kagrzqR';

const GetGifs = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=15&api_key=shM3obwOZz45bCiiBEjvjq9a5kagrzqR`
  )
    .then((res) => res.json())
    .then((json) => json.data);
  console.log(response);
  return response;
};

export default GetGifs;
