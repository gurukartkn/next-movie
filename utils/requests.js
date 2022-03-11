const API_KEY = process.env.API_KEY;

const Movies = {
  fetchFeatured: {
    title: "Featured Movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  },
  fetchNowPlaying: {
    title: "Now Playing",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchLatest: {
    title: "Latest Movies",
    url: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
  },
  fetchPopular: {
    title: "Popular Movies",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetTopRated: {
    title: "Top Rated Movies",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchUpcoming: {
    title: "Upcoming Movies",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchSimilar: {
    title: "Similar Movies",
    url: `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
  },
  searchMovie: {
    title: "Search",
    url: `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`,
  },
};

export default Movies;
