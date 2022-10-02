const axios = require("axios").default;
import {
  END_POINTD,
  TMDB_API_KEY,
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
} from "../constants/urls/TmdbBaseUrls";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = () => TMDB_HTTP_REQUEST.get(END_POINTD.NOW_PLAYING);
const getUpcomingMovies = () => TMDB_HTTP_REQUEST.get(END_POINTD.UPCOMING);
const getPosters = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;
export { getNowPlayingMovies, getUpcomingMovies, getPosters };

