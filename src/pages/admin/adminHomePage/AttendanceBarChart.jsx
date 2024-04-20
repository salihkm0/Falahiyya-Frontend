import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

const AttendanceBarChart = () => {

    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        maintainAspectRatio: false ,
        plugins: {
          legend: {
          },
          title: {
            display: true,
            text: `Total Attendance Percentage in Year`,
          },
        },
      };
      
    //   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const labels = ['01','02','03' , '04' , '05' , '06'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Presents',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data:  [7, 10, 7, 12, 6, 5],
            backgroundColor: 'rgba(122, 223, 55, 0.82)',
          },
          {
            label: 'Absents',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data: [ 0,4,1,0,3,1 ],
            backgroundColor: 'rgba(186, 36, 36, 0.758)',
          },
        ],
      };



  return (
    <>
      <Bar options={options} data={data} width={350}
  height={400}/>
    </>
  )
}

export default AttendanceBarChart
