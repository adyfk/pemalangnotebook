import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
      borderRadius: 5,
    },
  },
}));

export default function CardProduct(props) {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <img style={{ borderRadius: '5px 5px 5px 5px' }} width="100%" src={props.acf.image?.['source_url']} alt={props.acf.image?.['alt_text']} />
      </Grid>
      <Grid item style={{ marginTop: 5 }}>
        <Typography align="center" style={{ fontSize: '1.2em', lineHeight: 1 }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: 10 }}>
        <Typography style={{ marginBottom: 15 }} variant="body2">
          <Box>
            Rp
            {' '}
            <CurrencyFormat value={props.acf.price} displayType="text" thousandSeparator />
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
