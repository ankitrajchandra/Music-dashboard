import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    
  labels: ['Unique Plays', 'Others'],
  datasets: [
    {
    //   label: '# of Votes',
      // data: [window.value1, window.value2],
  
      data: [239, 2102],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
  options:{
    Legend:{
      display:false
    }
  }

};


export function Pichart(props) {

    window.value1 = props.unique;
    window.value2 = props.total;
  return <Pie data={data} />;
}
