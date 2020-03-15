import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';
import '../../src/styles/global.css';

export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="sKpYYIMKz_d3kNiOowsfwo_U9j998mlCpu5c9UV2pvI" />
      </Helmet>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
}
