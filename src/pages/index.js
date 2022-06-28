import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>
          Tutorial of the Gatsby homepage 
        </p>
        <StaticImage src="https://picsum.photos/id/237/200/300"></StaticImage>
      </Layout>
  );
};

export default IndexPage
