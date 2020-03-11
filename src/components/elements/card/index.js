import React, { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
  },
  containerImage: {
    position: 'relative',
  },
}));

export default function CardProduct(props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  return (
    <Grid
      className={classes.container}
      container
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={classes.containerImage}>
          <img width="100%" src={props.acf.image?.['source_url']} alt={props.acf.image?.['alt_text']} />
          {!props.acf.available && !hover && <Overlay empty />}
          {hover && <Overlay />}
        </div>
      </Grid>
      <Grid item>
        <Typography style={{ textOverflow: 'clip', overflow: 'hidden' }}>
          <Box fontSize="16px" fontWeight={500} marginLeft={0.5} lineHeight={1} height={35} p={0.5}>
            {props.title}
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={{ textOverflow: 'clip', overflow: 'hidden' }}>
          <Box fontSize="14px" p={0.5} marginLeft={0.5} marginY={1}>
            Rp
            {' '}
            <CurrencyFormat value={props.acf.price} displayType="text" thousandSeparator />
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}

const useStylesOverlay = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

function Overlay(props) {
  const classes = useStylesOverlay();
  return (
    <div className={classes.container}>
      {props.empty || <Hover />}
      {props.empty && <Empty />}
    </div>
  );
}

const useStylesHover = makeStyles(() => ({
  hoverText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    letterSpacing: 1,
  },
  border: {
    border: '2px solid #FFFFFF',
  },
}));
function Hover() {
  const classes = useStylesHover();
  return (
    <Typography className={classes.hoverText}>
      <Box p={1} className={classes.border}>
        SEE MORE
      </Box>
    </Typography>
  );
}


const useStylesEmpty = makeStyles(() => ({
  emptyText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    letterSpacing: 1,
  },
  borderBottom: {
    width: 20,
    border: '1px solid #FFFFFF',
  },
}));

function Empty() {
  const classes = useStylesEmpty();
  return (
    <>
      <Typography className={classes.emptyText}>
        KOSONG
      </Typography>
      <div className={classes.borderBottom} />
    </>
  );
}
