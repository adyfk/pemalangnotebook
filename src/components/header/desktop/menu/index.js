import React from 'react';
import { Grid } from '@material-ui/core';
import './menu.css';
import TextButon from '../../../elements/textbuton';
import { capitalize } from '../../../../utils';

export default function Menu() {
  const [state, setState] = React.useState({});
  const data = [
    { name: 'accessories' },
    {
      name: 'laptop',
      child: [
        { name: 'lenovo', list: ['yoga', 'Thinkpad Series', 'Carbon Series'] },
        { name: 'dell', list: ['Inspiron Series', 'Latitude Series'] },
      ],
    },
    { name: 'marchandise' }];
  return (
    <Grid
      container
      style={{
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        minHeight: 200,
        width: state[state.name] ? 350 : 175,
      }}
    >
      <Grid lg={5} md={5} item>
        <div style={{ padding: '15px 25px 15px 20px' }}>
          {data.map((item, index) => {
            const props = {};
            if (!item.child) props.to = `/product/${item.name}`;
            return (
              <TextButon
                style={{ padding: 3, fontSize: 15, color: state.name === item.name ? '#00A9FF' : 'rgba(0, 0, 0, 0.7)' }}
                onMouseEnter={() => {
                  setState({
                    name: item.name,
                    index,
                    [item.name]: Boolean(item.child),
                  });
                }}
                {...props}
              >
                {capitalize(item.name)}
              </TextButon>
            );
          })}
        </div>
      </Grid>
      {state[state.name] && (
      <Grid lg={7} md={7} style={{ borderLeft: '0.3px solid #AAAAAA' }} item>
        <div style={{ padding: '10px 20px 10px 15px' }}>
          {data[state.index].child.map((subItem) => (
            <div style={{ padding: 5, fontSize: 15, color: 'rgba(0, 0, 0, 0.7)' }}>
              {capitalize(subItem.name)}
              {subItem.list.map((list) => (
                <TextButon
                  to={`/product/${subItem.name}/${list}`}
                  style={{
                    color: '#AAAAAA',
                    fontSize: 12,
                    padding: 1,
                  }}
                >
                  {list}
                </TextButon>
              ))}
            </div>
          ))}
        </div>
      </Grid>
      )}
    </Grid>
  );
}
