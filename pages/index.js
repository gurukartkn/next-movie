import Head from "next/head";
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>StreamIt</title>
        <meta
          name="description"
          content="A movie app created using Next JS, TMDB API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home
    </div>
  );
}
