import { BarChart } from "@mui/x-charts/BarChart";

const Present = [24, 28, 22, 29, 28, 25, 27, 26,24,27,22,26]; //present in class
const Absent = [3, 2, 6, 0, 1, 3, 0, 2, 6, 1, 3, 6];
const xLabels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export default function SimpleBarChart() {
  return (
    <BarChart
      width={350}
      height={300}
      series={[
        { data: Present, label: "Present", id: "presentId" },
        { data: Absent, label: "Absent", id: "absentId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
