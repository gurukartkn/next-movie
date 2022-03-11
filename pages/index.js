import Head from "next/head";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Hero } from "../components";
import { Movies } from "../components";

const API_KEY = "e835e6d55545c2cf4ebbebe669b1e444";
const URL = "https://api.themoviedb.org/3";

const endpoints = {
  featured: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  nowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}${endpoints.featured}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setFeatured(res.data.results));

    axios
      .get(`${URL}${endpoints.nowPlaying}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setNowPlaying(res.data.results));

    axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));

    axios
      .get(`${URL}${endpoints.topRated}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));

    axios
      .get(`${URL}${endpoints.upcoming}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results));
  }, []);
  return (
    <div className="mx-auto">
      <Head>
        <title>StreamIt</title>
        <meta
          name="description"
          content="A movie app created using Next JS, TMDB API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero movie={nowPlaying[Math.floor(Math.random() * nowPlaying.length)]} />
      <Movies title="Featured Movies" movies={featured} />
      <Movies title="Top Rated Movies" movies={topRated} />
      <Movies title="Upcoming Movies" movies={upcoming} />
      <Movies title="Popular Movies" movies={popular} />
    </div>
  );
}
