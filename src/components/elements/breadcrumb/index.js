import React from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextButton from '../textbuton';

export default function BreadCrumb() {
  const locationPath = location.pathname.split('/').slice(1);
  const locationNow = locationPath.pop();
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <TextButton to="/">
        Dashboard
      </TextButton>
      {locationPath.map((path, index) => {
        const linkPath = [];
        Array.from({ length: index + 1 }).forEach((item, i) => {
          linkPath.push(locationPath[i]);
        });
        return <Typography>{path}</Typography>;
      })}
      <Typography color="textPrimary">{locationNow}</Typography>
    </Breadcrumbs>
  );
}
