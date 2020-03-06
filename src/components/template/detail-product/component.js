import React from 'react';
import Grid from '@material-ui/core/Grid';
import BreadCrumb from '../../elements/breadcrumb';
import Layout from '../../layout';

export default function LaptopDetail(props) {
  return (
    <Layout>
      {JSON.stringify(props.pageContext, null, 4)}
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <BreadCrumb />
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              Photo
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              Detail Photo
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          Describe
        </Grid>
      </Grid>
    </Layout>
  );
}
