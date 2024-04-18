import { styled } from "styled-components";

export const AdminHomePageHeadding = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 20px 0;
  color: #656565;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const AttendanceChartContainer = styled.div`
  width:400px;
  height: auto;
  padding: 20px;
  margin : 50px 0;
  border: 1px solid #ccc;
  @media (max-width: 600px) {
    width: 300px;
    padding: 10px;
  margin : 10px 0;

  }
`;
export const AttendanceChartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 10px;
  @media (max-width: 600px) {
  justify-content: center;

  }
`;
export const AttendanceChartHeading = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #414141;
  text-align: center;
  margin-bottom: 20px;
`;

export const QuickDetailsWrapper = styled.div`
  width: 100%;
  height: auto;
  /* background : #be0808; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin : 50px 0;
  @media (max-width: 600px) {
    gap: 6px;
    justify-content: center;
  }
`;
export const QuickDetailsCard = styled.div`
  width: 250px;
  height: 120px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(71, 71, 71, 0.422) 0px 10px 10px -5px;
  ${(props) => {
    switch (props.bgColor) {
      case "red":
        return `background:#ff7b72;`;
      case "green":
        return `background:#9acd32;`;
      case "blue":
        return `background:#4fc3f7;`;
      case "orenge":
        return `background:#f7b74f;`;
      default:
        return ``;
    }
  }}
  @media (max-width:  600px) {
    width: 150px;
    height: 80px;
    padding: 10px;
  }
`;
export const QuickDetailsTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const QuickDetailsCount = styled.p`
  font-size: 30px;
  font-weight: 700;
  /* text-align : center; */

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
