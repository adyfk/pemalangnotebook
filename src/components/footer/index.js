import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Location from '../../assets/icons/location.svg';
import Phone from '../../assets/icons/phone.svg';
import At from '../../assets/icons/at.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Tokopedia from '../../assets/icons/tokopedia.svg';
import Shoopie from '../../assets/icons/shopee.svg';
import useStyles from './style';
import Logo from '../Image/Logo';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.containerFooter}>
      <Grid container justify="center" id="footer">
        <Grid item lg={12} md={12} xs={12} className={classes.containerBrand} align="center">
          <Logo height="50" />
          <div>
            <span>Laptop Premium , Jaminan Puas & Garansi Kualitas</span>
          </div>
        </Grid>
        <Grid
          className={classes.containerContact}
          item
          lg={12}
          align="center"
        >
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Pemalang+Notebook/@-7.0233675,109.2990386,11z/data=!4m8!1m2!2m1!1spemalangnotebook!3m4!1s0x2e6fdbf9ae35b289:0xbce30252a49de28a!8m2!3d-6.8843925!4d109.3807411">
            <Location className={classes.icon} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/0818883632">
            <Phone className={classes.icon} />
          </a>
          <a href="mailto:pemalangnotebook@gmail.com">
            <At className={classes.icon} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pemalangnotebook/?hl=id">
            <Instagram className={classes.icon} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tokopedia.com/pemalangnotebook">
            <Tokopedia className={classes.icon} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tokopedia.com/pemalangnotebook">
            <Shoopie className={classes.icon} />
          </a>
        </Grid>
        <Grid item lg={12} md={12} xs={12} align="center">
          <Typography className={classes.textCopyright}>
            Copyright ©
            {' '}
            {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
