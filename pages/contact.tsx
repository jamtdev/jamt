import React from 'react';
import Layout from 'src/components/Layout';
import Link from 'src/components/Link';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';
import { spacing } from 'src/config/theme';
import ContactItem from 'src/components/ContactItem';

const ContactPage = () => (
  <Layout>
    <Text variant="section-title" style={{ marginBottom: spacing.BASE_4 }}>
      Get in touch
    </Text>

    <ContactItem icon="linkedin">
      <Text>
        Connect with me on{' '}
        <Link href="https://www.linkedin.com/in/james-taylor-uk/">
          LinkedIn
        </Link>
        .
      </Text>
    </ContactItem>
    <ContactItem icon="github">
      <Text>
        Check out my <Link href="https://github.com/jamtdev">GitHub</Link>.
      </Text>
    </ContactItem>
    <ContactItem icon="twitter">
      <Text>
        Follow me on <Link href="https://twitter.com/jamtdev">Twitter</Link>.
      </Text>
    </ContactItem>
    <ContactItem icon="send">
      <Text>
        Send me an <Link href="mailto:james@jamt.dev">email</Link>.
      </Text>
    </ContactItem>
  </Layout>
);

export default ContactPage;
