import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Grid } from '@material-ui/core';
import { globalHistory } from '@reach/router';
import { capitalize } from '../../../utils';
import TextButton from '../textbuton';

const useStyles = makeStyles({
  root: {
  },
});

export default function RecursiveTreeView(props) {
  const classes = useStyles();
  const { location } = globalHistory;
  const [expanded, setExpanded] = React.useState(['laptop', ...props.expands]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };
  // console.log(expanded);
  function label({ nodes, bool }) {
    let to = `/${nodes.name}`;
    if (nodes.parent) to = `/${nodes.parent}${to}`;
    if (!bool) return <TextButton to={`/product${to}`}>{capitalize(nodes.name)}</TextButton>;
    return (
      <Grid container alignItems="center">
        <Grid item>{capitalize(nodes.name)}</Grid>
        {expanded.includes(nodes.name) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </Grid>
    );
  }
  const renderTree = (nodes) => {
    const sub = Array.isArray(nodes.children);
    return (
      <TreeItem key={nodes.name} nodeId={nodes.name} label={label({ nodes, bool: sub })}>
        {sub ? nodes.children.map((node) => renderTree({ ...node, parent: nodes.name })) : null}
      </TreeItem>
    );
  };

  return (
    <TreeView
      className={classes.root}
      onNodeToggle={handleToggle}
      defaultExpanded={['laptop', ...props.expands]}
      defaultSelected={[location.pathname.split('/').pop()]}
    >
      {props.data.map((data) => renderTree(data))}
    </TreeView>


  );
}
RecursiveTreeView.defaultValues = {
  expands: [],
};
