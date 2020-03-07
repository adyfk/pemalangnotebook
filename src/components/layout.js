import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { CssBaseline } from '@material-ui/core';
import Header from './header/index';
import Container from './elements/container';
import Footer from './footer';
import SearchPage from './searchPage';

function Layout({ container, children }) {
  const search = React.useState('');
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
      <Header search={search} siteTitle={data.site.siteMetadata.title} />
      {search[0] ? <SearchPage search={search} /> : (
        <>
          {container && <Container>{children}</Container>}
          {container || children}
        </>
      )}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
