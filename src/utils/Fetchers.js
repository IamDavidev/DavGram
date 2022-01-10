export const fetcher = async (url) =>
  await fetch(url).then((res) => res.json());

export const fetchergifs = async (url) =>
  await fetch(url)
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

export const fetchUser = async (url) =>
  fetch(url)
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
