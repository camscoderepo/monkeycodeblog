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
          Monkey who codes on a daily basis. This is my blog and what I hope to
          do with it is give people a resource that shows examples that you can't 
          find as easily elsewhere. Everything is copied fairly quickly on the net
          these days but I plan to give more in depth solutions to things than others
          have elsewhere here, even if it takes longer to produce content.
          <br />
          <br />
          I am determined to help my fellow developer and monkies anyway that I can!
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
