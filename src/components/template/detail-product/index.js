/* eslint-disable react/no-danger */
import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import BreadCrumb from '../../elements/breadcrumb';
import Layout from '../../layout';
import useStyles from './styles';


export default function LaptopDetail(props) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const { image, available } = props.pageContext.acf;
  return (
    <Layout container>
      <Grid container spacing={3} className={classes.container}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <BreadCrumb />
        </Grid>
        <Grid style={{ marginBottom: 40 }} item lg={5} md={5} sm={12} xs={12}>
          <Grid container>
            <Grid className={classes.containerImage} item lg={12} md={12} sm={12} xs={12}>
              <img
                alt={image[index]?.['alt_text']}
                width="100%"
                className={classes.image}
                src={image[index]?.['source_url']}
              />
              {available || (
              <div className={classes.emptyStock}>
                <Typography>
                  <Box fontSize="2.5em" color="white">SOLD OUT</Box>
                </Typography>
              </div>
              )}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid wrap="nowrap" style={{ marginTop: 10 }} justify="center" spacing={2} container>
                {image.map((item, idx) => (
                  <Grid item onClick={() => setIndex(idx)}>
                    <img
                      width="80"
                      className={clsx(classes.imageSmall, {
                        [classes.imageSmallActive]: index === idx,
                      })}
                      alt={item.alt_text}
                      src={item.source_url}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <div className={classes.content}>
            <Typography>
              <Box dangerouslySetInnerHTML={{ __html: props.pageContext.title }} fontSize="2em" />
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: props.pageContext.content }} />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
