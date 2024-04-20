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
  width: 600px;
  /* background : #d342; */
  height: 500px;
  padding: 20px;
  margin: 50px 0;
  /* border: 1px solid #ccc; */

  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    width: 100%;
    /* padding: 10px; */
    /* margin: 10px 0; */
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
  margin: 50px 0;
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

export const NewAdmissinListContainer = styled.div`
  width: 100%;
  height: auto;
  /* background : #dc090964; */
  margin: 20px 0;
`;
export const NewAdmissinListHead = styled.h3`
  font-size: 22px;
  color: #434343;
`;
export const NewAdmissinListTable = styled.table`
  width: 100%;
  margin: 50px auto;
  /* border-collapse : collapse; */
  @media (max-width: 600px) {
    margin: 30px auto;
  }
  th,
  td {
    padding: 8px 2%;
    text-align: left;
    border: 1px solid #02104857;
    color: #021048;
    @media (max-width: 600px) {
      font-size: 12px;
      padding: 5px 1px;
    }
  }
  th {
    background: #021048;
    color: white;
  }
  td {
    border-bottom: 2px solid #de64008f;
  }
`;

export const DetailsCardContainer = styled.div`
  /* background: #021048; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 10px;
  @media (max-width: 600px) {
  }
`;
export const DetailsCard = styled.div`
  /* background: #021048; */
  ${(props) => {
    switch (props.bgColor) {
      case "red":
        return `background:#ff7b72;
        border: 1px solid #fc6358;`;
      case "green":
        return `background:#9acd32;
        border: 1px solid #82b61a;`;
      case "blue":
        return `background:#4fc3f7;
        border: 1px solid #1fa3e0;`;
      case "orenge":
        return `background:#f7b74f;
        border: 1px solid #eb9e21;`;
      default:
        return ``;
    }
  }}
  width: 400px;
  height: auto;
  
  padding : 10px 0;
  border-radius : 3px;
  @media (max-width: 600px) {
    width: 300px;
    height: auto;
  }
`;
export const DetailsCardTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  @media (max-width: 600px) {
  font-size: 20px;
  }
`;
export const DetailsCardImgWrapper = styled.div`
  /* background: #021048; */
  padding: 5px;
  width: 100%;
  height: 150px;
  /* border: 1px solid #021048; */
  display: grid;
  place-items: center;
  
  @media (max-width: 600px) {
    height: 100px;
  }
  img {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 3px solid #5d5d5d8a;

    @media (max-width: 600px) {
      height: 80px;
      width: 80px;
    }
  }
`;
export const DetailsCardBody = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  /* border: 1px solid #021048; */
  /* background: #021048; */
  /* padding : 10px 0; */
  text-align : center;
`;
export const DetailsCardSubTitle = styled.p`
    font-size: 18px;
  font-weight: 500;
  line-height:5px;
  margin-bottom  : 20px;
  @media (max-width: 600px){
    font-size: 14px;
  }
`
export const DetailsCardContact = styled.p`
    font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
  @media (max-width: 600px){
    font-size: 16px;
  }
`
