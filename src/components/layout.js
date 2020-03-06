import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { CssBaseline } from '@material-ui/core';
import Header from './header/index';
import Container from './elements/container';
import Footer from './footer';

const Layout = ({ container, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      {container && <Container>{children}</Container>}
      {container || children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
