import Head from "next/head";

const MetaTags = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/* Facebook */}
      <meta property="og:site_name" content="Lửa hạnh phúc"></meta>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={meta.url || "https://luahanhphuc.com"}
      />
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:description"
        content={
          meta.description ||
          'Dự án "Lửa hạnh phúc" là dự án được thành lập bởi sinh viên trường đại học FPT.'
        }
      />
      <meta property="og:image" content={meta.img || "https://luahanhphuc.com/thumbnail.jpg"} />
      <meta property="og:image:alt" content="Lửa hạnh phúc" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content="1881282985689458" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={meta.url} />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.img || "https://luahanhphuc.com/thumbnail.jpg"} />
      <meta property="twitter:image:alt" content="Lửa hạnh phúc"/>
      <meta property="twitter:image:width" content="1200"/>
      <meta property="twitter:image:height" content="630"/>
    </Head>
  );
};

export default MetaTags;
