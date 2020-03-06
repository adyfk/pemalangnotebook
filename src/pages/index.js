import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';


const useStyles = makeStyles(() => ({
  jumbotron: {
    margin: 20,
    height: '90vh',
    backgroundColor: '#26D1F6',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.jumbotron} />
    </Layout>
  );
};

export default IndexPage;
