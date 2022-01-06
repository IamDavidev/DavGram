const GetUser = async ({ user }) => {
  const response = await fetch(
    `https://api.unsplash.com/users/${user}?client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`
  )
    .then((res) => res.json())
    .then((data) => {
      const {
        profile_image,
        followers_count,
        total_photos,
        following_count,
        portfolio_ur,
        photos,
      } = data;
      return {
        profile_image,
        followers_count,
        total_photos,
        following_count,
        portfolio_ur,
        photos,
      };
    });
  return response;
};

export default GetUser;
