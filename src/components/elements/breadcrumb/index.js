import React from 'react';
import { globalHistory } from '@reach/router';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextButton from '../textbuton';
import { capitalize } from '../../../utils';

export default function BreadCrumb() {
  const { location } = globalHistory;
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
        return <Typography key={path}>{capitalize(path || '')}</Typography>;
      })}
      <Typography color="textPrimary">{capitalize(locationNow || '')}</Typography>
    </Breadcrumbs>
  );
}
