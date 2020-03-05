import React from 'react';
import { navigate } from 'gatsby';
import Typography from '@material-ui/core/Typography';

function TextButon({
  children, to, ...rest
}) {
  const props = {
    classes: rest.classes || {},
    className: rest.className || '',
    variant: rest.variant,
  };
  if (to) {
    props.onClick = () => {
      navigate(to);
    };
  }
  return (
    <Typography
      style={{
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default TextButon;
