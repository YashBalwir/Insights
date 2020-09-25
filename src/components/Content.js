import React from 'react';
import GraphCardBar from './GraphCardBar';
import GraphCardLine from './GraphCardLine';
import GraphCardPie from './GraphCardPie';
//import LineChart from './charts/LineChart';
//import BarChart from './charts/BarChart';
//import PieChart from './charts/PieChart';
import { Grid } from '@material-ui/core';

const Content= () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<GraphCardLine />
			</Grid>
			<Grid item xs={12} sm={6}>
				<GraphCardPie />
			</Grid>
			<Grid item xs={12} sm={6}>
				<GraphCardBar />
			</Grid>
			<Grid item xs={12} sm={6}>
				<GraphCardLine />
			</Grid>
			<Grid item xs={12} sm={6}>
				<GraphCardBar />
			</Grid>
			<Grid item xs={12} sm={6}>
				<GraphCardPie />
			</Grid>
		</Grid>
	);
};

export default Content;