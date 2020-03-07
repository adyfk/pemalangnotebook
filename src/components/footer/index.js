import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function Footer() {
  return (
    <Grid container id="footer">
      <Grid item lg={12} md={12} xs={12} align="center">
        <img src="" alt="test" />
      </Grid>
      <Grid item lg={12} md={12} xs={12} align="center">
        Icon
      </Grid>
      <Grid item lg={12} md={12} xs={12} align="center">
        <Typography> Copyright © 2020  </Typography>
      </Grid>
    </Grid>
  );
}
