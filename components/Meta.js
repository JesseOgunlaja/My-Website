import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width"></meta>
      <meta charSet="UTF-8"></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <link rel="icon" href="/icon.png" />

    </Head>
  );
};

Meta.defaultProps = {
    title: "Jesse Ogunlaja",
    keywords: "web development, HTML, CSS, JavaScript, React, Next JS",
    description:
      "A page about Jesse Ogunlaja",
  };

export default Meta;
