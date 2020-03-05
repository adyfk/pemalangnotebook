import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { CssBaseline } from '@material-ui/core';
import Header from './header/index';
import Container from './elements/container';

const Layout = ({ children }) => {
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
      <Container>{children}</Container>
      <footer>
        ©
        {new Date().getFullYear()}
        , Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
