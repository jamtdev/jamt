import React from 'react';
import Layout from 'src/components/Layout';
import Text from 'src/components/Text';
import LinkButton from 'src/components/LinkButton';
import { spacing } from 'src/config/theme';
import { routes } from 'src/config/routes';

const IndexPage = () => (
  <Layout>
    <Text variant="section-title" style={{ marginBottom: spacing.BASE_4 }}>
      INTRO
    </Text>
    <Text
      variant="h1"
      htmlElement="h3"
      style={{ marginBottom: spacing.BASE_3 }}
    >
      Hi, I&#39;m James
    </Text>
    <Text style={{ marginBottom: spacing.BASE_2 }}>
      I’m a London-based software engineer focused on building fast, scalable
      and beautiful web applications.
    </Text>
    <Text style={{ marginBottom: spacing.BASE_3 }}>
      Good front-end development is hard; it has to connect the dots between
      business goals and meaningful user experiences with tools that are
      becoming increasingly complex and varied. My work blends technical
      expertise, modern design patterns and key UX principles to tackle this
      challenge and ultimately deliver great products.
    </Text>
    <LinkButton testId="Intro__FindOutMore" href={routes.bio.path}>
      Find out more
    </LinkButton>
  </Layout>
);

export default IndexPage;
