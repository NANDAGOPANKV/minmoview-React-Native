const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const TMDB_TRENDING_NOW =
  "https://api.themoviedb.org/3/trending/all/day?api_key=791a91c424b6282b64f65a5f23456a02";
const TMDB_API_KEY = "791a91c424b6282b64f65a5f23456a02";

const END_POINTD = {
  NOW_PLAYING: "/movie/now_playing?",
  UPCOMING: "/movie/upcoming?",
};

export {
  TMDB_IMAGE_BASE_URL,
  END_POINTD,
  TMDB_API_KEY,
  TMDB_BASE_URL,
  TMDB_TRENDING_NOW,
};
