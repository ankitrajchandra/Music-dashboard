import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(params) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < params.value) {
        setPercentage(percentage + 1);
      }
    }, 3);
  }, [percentage]);

  // setPercentage(0);

  return (
    <div style={{textAlign:"center"}}>
      <div style={{ width: 210, marginLeft:0}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;