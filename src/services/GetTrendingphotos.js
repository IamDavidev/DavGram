export const GetTrendingPhotos = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?count=5&client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`
  ).then((res) => res.json());
  return response;
};


export const GetTrendingGiffs = async () =>{
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${'shM3obwOZz45bCiiBEjvjq9a5kagrzqR'}&limit=5`
  ).then((res) => res.json());
  return response;
}

