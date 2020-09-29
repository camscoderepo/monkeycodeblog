import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          Monkey who codes on a daily basis. This is my blog I hope to
          give people a resource that shows examples that are original or go a little
          more in depth. Everything is copied fairly quickly on the net
          these days but I hope that I can produce content that is valuable to the dev
          community.
          <br />
          <br />
          I am determined to help my fellow developer in anyway that I can!
          Feel free to reach out for any inquires or  questions!
        </TextBody>
        <Button href="mailto:your&#64;email.com">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/codemonkey.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
