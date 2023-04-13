import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width"></meta>
      <meta charSet="UTF-8"></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <link rel="icon" href="/favico.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "OGUNJX.com",
  keywords:
    " Jesse Ogunlaja's website, Jesse's website, ogunjx's website, Jesse Ogunlaja, Jesse, OGUNJX",
  description: "Jesse Ogunlaja's website. The place for all my projects.",
};

export default Meta;
