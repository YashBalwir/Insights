import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PieChart from './charts/PieChart'

const useStyles = makeStyles({
  root: {
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GraphCardBar = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card >
      <CardContent>
        <PieChart />
      </CardContent>  
    </Card>
  );
}

export default GraphCardBar;

