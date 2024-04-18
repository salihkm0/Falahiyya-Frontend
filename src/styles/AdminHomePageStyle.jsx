import { styled } from "styled-components";

export const AdminHomePageHeadding = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 20px 0;
  color: #656565;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin: 30px 0;
  }
`;
export const AttendanceChartContainer = styled.div`
  width: 400px;
  height: auto;
  padding: 20px;
  border : 1px solid #ccc;
  @media (max-width: 600px) {
    width: 300px;
    padding: 10px;
  }
`;
export const AttendanceChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap :wrap;
    width :100%;
    height : auto;
    gap : 10px;
`
export const AttendanceChartHeading = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #414141;
  text-align: center;
  margin-bottom: 20px;
`;
