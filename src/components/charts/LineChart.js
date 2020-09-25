import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:['B','W','S','L','C','N'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            617594,
                            181045, 
                            153060, 
                            106519, 
                            105162, 
                            95072 
                         ],
                         backgroundColor:[
              'rgba(255,99,132,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#555'
                    }
                ]
            }
        }
    }


    render(){
        return (
            <div className="chart">
                <Line 
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:false,
                            text:'Largest cities in Massachusetts',
                            fontSize:10
                        },
                    }}
                />
            </div>
        )
    }
}

export default LineChart;