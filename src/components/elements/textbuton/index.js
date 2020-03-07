import React from 'react';
import { navigate } from 'gatsby';
import Typography from '@material-ui/core/Typography';

function TextButon({
  children, to, style, ...rest
}) {
  const props = {};
  if (to) {
    props.onClick = () => {
      navigate(to);
    };
  }
  return (
    <Typography
      {...props}
      {...rest}
      style={{
        ...style,
        cursor: 'pointer',
      }}
    >
      {children}
    </Typography>
  );
}
TextButon.defaultValues = {
  propTypography: {},
  classes: {},
  className: '',
  style: {},
};
export default TextButon;
