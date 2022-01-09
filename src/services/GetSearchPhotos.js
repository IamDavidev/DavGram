const getSearchPhotos = async ({ title }) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?query=${title}&client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`
  ).then((res) => res.json());

  return response;
};

export default getSearchPhotos;
