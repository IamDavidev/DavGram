import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SwrTest() {
  const { data, error } = useSWR(
    "https://api.unsplash.com/photos/random/?count=5&client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  if(data) console.log(data);
  return (
    <div>
     <h1>
       hola
     </h1>
    </div>
  );
}
