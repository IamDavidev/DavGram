export const fetcherPhotos = async (url) => await fetch(url).then((res) => res.json());
