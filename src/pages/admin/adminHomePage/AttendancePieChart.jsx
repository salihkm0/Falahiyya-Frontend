import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export const AttendancePieChartInMonth = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Total Attendance", "Total Absent","Total Holidys"],
    datasets: [
      {
        label: "Total Attentance in Month",
        data: [67,14,9],
        backgroundColor: [
          "rgba(3, 105, 25, 0.687)",
          "rgba(191, 5, 5, 0.783)",
          "rgba(227, 110, 0, 0.783)",
        ],
        borderColor: [
            "rgb(0, 174, 38)",
            "rgb(227, 0, 0)",
            "rgb(227, 110, 0)",
        ],
        borderWidth: 1,
      },
      
    ],
  };

  return (
    <>
      <Pie data={data} />
    </>
  );
};


export const AttendancePieChartInYear = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
      labels: ["Total Attendance", "Total Absent","Total Holidys"],
      datasets: [
        {
          label: "Total Attentance In Year",
          data: [67,14,9],
          backgroundColor: [
            "rgba(3, 105, 25, 0.687)",
            "rgba(191, 5, 5, 0.783)",
            "rgba(227, 110, 0, 0.783)",
          ],
          borderColor: [
              "rgb(0, 174, 38)",
              "rgb(227, 0, 0)",
              "rgb(227, 110, 0)",
          ],
          borderWidth: 1,
        },
        
      ],
    };
  
    return (
      <>
        <Pie data={data} />
      </>
    );
  };


// {
//     label: "Total Attendance In Month",
//     data: [22,5,3],
//     backgroundColor: [
//       "rgba(3, 214, 49, 0.844)",
//       "rgba(234, 5, 5, 0.933)",
//       "rgba(242, 127, 5, 0.97)",
//     ],
//     borderColor: [
//         "rgb(0, 174, 38)",
//         "rgb(227, 0, 0)",
//         "rgb(227, 110, 0)",
//     ],
//     borderWidth: 1,
//   },