import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

// import makeStyles from '@material-ui/core/styles/makeStyles';
// const useStyles = makeStyles(() => ({
//   icon: {
//     fill: 'grey',
//     margin: 6,
//     '&:hover': {
//       cursor: 'pointer',
//       fill: '#F79220',
//     },
//   },
// }));

export default function CardProduct(props) {
//   const classes = useStyles();
  return (
    <Grid container spacing={1} direction="column" alignItems="center">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <img width="100%" src={props.acf.image?.url} alt={props.acf.image?.alt} />
      </Grid>
      <Grid item>
        <Typography align="center" style={{ fontSize: '1.2em', lineHeight: 1 }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          <Box>
            Rp
            {' '}
            {props.acf.price}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
