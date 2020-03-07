import React from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import TextButon from '../../../elements/textbuton';
import { capitalize } from '../../../../utils';
import useStyles from './style';
import './menu.css';

export default function Menu(props) {
  const [state, setState] = React.useState({});
  const classes = useStyles();

  const data = [
    { name: 'accessories' },
    {
      name: 'laptop',
      child: props.category,
    },
    { name: 'marchandise' }];
  return (
    <Grid
      classes={{
        root: classes.container,
      }}
      container
    >
      <Grid lg={5} md={5} item className={classes.menuBox}>
        <div style={{ padding: '15px 20px 15px 25px' }}>
          {data.map((item, index) => {
            const propsTextButton = {};
            if (!item.child) propsTextButton.to = `/product/${item.name}`;
            return (
              <TextButon
                key={item.name}
                display="block"
                className={clsx(classes.leftMenu, { [classes.colorBlue]: state.name === item.name })}
                onMouseEnter={() => {
                  setState({
                    name: item.name,
                    index,
                    [item.name]: Boolean(item.child),
                  });
                }}
                {...propsTextButton}
              >
                {capitalize(item.name)}
              </TextButon>
            );
          })}
        </div>
      </Grid>
      {state[state.name] ? (
        <Grid lg={6} md={6} className={classes.menuBox} item>
          <div className={classes.containerRight}>
            {data[state.index].child.map((subItem) => (
              <div key={subItem.name} className={classes.containerParentSubList}>
                {capitalize(subItem.name)}
                {subItem.list.map((list) => (
                  <TextButon
                    key={list}
                    display="block"
                    to={`/product/${subItem.name}/${list}`}
                    className={classes.subList}
                  >
                    {capitalize(list)}
                  </TextButon>
                ))}
              </div>
            ))}
          </div>
        </Grid>
      ) : <Grid lg={6} md={6} item />}
    </Grid>
  );
}
