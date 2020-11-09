import React from 'react';
import Layout from 'src/components/Layout';
import Text from 'src/components/Text';
import Link from 'src/components/Link';
import Grid from 'src/components/Grid';
import GridItem from 'src/components/GridItem';
import { spacing } from 'src/config/theme';
import { routes } from 'src/config/routes';
import bio from 'src/config/bio';

const Bio = () => (
  <Layout>
    <Text variant="section-title" style={{ marginBottom: spacing.BASE_4 }}>
      ABOUT ME
    </Text>
    <Text style={{ marginBottom: spacing.BASE_2 }}>
      I currently work for{' '}
      <Link newTab href="https://www.icis.com/">
        ICIS
      </Link>{' '}
      building analytics products for the petrochemical industry. Previously, I
      worked for{' '}
      <Link newTab href="https://risk.lexisnexis.co.uk/">
        LexisNexis Risk Solutions
      </Link>
      . Before that, I studied Computer Systems at Nottingham Trent University.
    </Text>
    <Text style={{ marginBottom: spacing.BASE_2 }}>
      Outside of my IDE, I enjoy attending conferences such as{' '}
      <Link newTab href="https://reactadvanced.com/">
        React Advanced
      </Link>{' '}
      and{' '}
      <Link newTab href="https://javascript-conference.com/">
        iJS
      </Link>
      , learning new skills and complaining about the weather.
    </Text>
    <Text style={{ marginBottom: spacing.BASE_4 }}>
      For more information, please{' '}
      <Link href={routes.contact.path}>get in touch</Link>.
    </Text>
    <Text variant="section-title" style={{ marginBottom: spacing.BASE_4 }}>
      What I do
    </Text>
    <Grid>
      {bio.map(({ content, ...card }) => (
        <GridItem key={card.heading} {...card}>
          <Text>{content}</Text>
        </GridItem>
      ))}
    </Grid>
  </Layout>
);

export default Bio;
