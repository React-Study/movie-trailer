import http from 'util/api/base';

// MOVIE 관련 상수 적는 곳입니다.
const MOVIE_API_ENDPOINT = '/movie';

export const getMovieDetail = async (movieId, language) => {
  try {
    const res = await http.get({
      url: `${MOVIE_API_ENDPOINT}/${movieId}`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getMovie = async (pageName, paramObj) => {
  try {
    const res = await http.get({
      url: `${MOVIE_API_ENDPOINT}/${pageName}`,
      params: paramObj,
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
