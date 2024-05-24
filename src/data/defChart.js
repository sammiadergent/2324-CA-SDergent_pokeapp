import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DefChart({ def }) {
  let data = [
    {
      label: 'Label 1',
      value: def,
      color: 'rgba(88, 103, 225, 1)',
      cutout: '65%',
    },
    {
      label: 'Label 2',
      value: 360 - def,
      color: 'rgba(88, 103, 225, 0.5)',
      cutout: '50%',
    },
  ];

  const options = {
    plugins: {
      responsive: false,
    },
    cutout: data.map((item) => item.cutout),
    aspectRatio: 4.1,
  };

  const finalData = {
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={finalData} options={options} />;
}
export default DefChart;
