import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function BreadCrumb() {
  // const locationPath = location.pathname.split('/').slice(1);
  const locationPath = ['laptop', 'lenovo', 'yoga'];
  const locationNow = locationPath.pop();
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Dashboard
      </Link>
      {locationPath.map((path, index) => {
        const linkPath = [];
        Array.from({ length: index + 1 }).forEach((item, i) => {
          linkPath.push(locationPath[i]);
        });
        return (
          <Link color="inherit" href={`/${linkPath.join('/')}`}>
            {path}
          </Link>
        );
      })}
      <Typography color="textPrimary">{locationNow}</Typography>
    </Breadcrumbs>
  );
}
