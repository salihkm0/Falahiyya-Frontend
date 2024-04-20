import { styled } from "styled-components";

export const Headding = styled.h1`
  font-size: 24px;
  color: #303030;
  padding: 10px 0;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const AttendanceContainer = styled.div`
  width: 100%;
  /* overflow-x: scroll; */
  /* background : #0081de; */
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    height: 3px;
    width: 1px;
    /* cursor:pointer; */
  }
  &::-webkit-scrollbar-track {
    background-color: black;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red;
    cursor: pointer;
  }
  @media (max-width: 600px) {
  }
`;

export const AttTable = styled.table`
  width: 100%;
  margin : 10px 0;
`;

// export const AttendanceTable = styled.table`

// `;

export const AttendanceTableRow = styled.tr`
  /* border-bottom : 1px solid #001f3f; */
  background-color: #dfdfdf;
  position: relative;
`;

export const AttendanceTableHead = styled.th`
  background-color: #001f3f;
  color: #fff;
  padding: 0.5em 1em;
  width: 200px;
  text-align: center;
  @media (max-width: 600px) {
    width: 100px;
    padding: 2px;
    font-size : 12px;
  }
`;
export const AttendanceStatusBtn = styled.td`
  border-top: 1px solid #eee;
  padding: 0.5em 1em;
  width: 200px;
  text-align: center;
  border-bottom: 1px solid #001f3f;
  @media (max-width: 600px) {
    padding: .2em .5em;
    font-size : 14px;
  }
`;
export const AttendanceRoll = styled.td`
  text-align: left;
  width: 100px;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #001f3f;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 600px) {
    padding: .2em .5em;
    font-size : 14px;
  }
`;
export const AttendanceName = styled.td`
  text-align: left;
  width: 400px;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #001f3f;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 600px) {
    padding: .2em .5em;
    font-size : 14px;
  }
`;
// export const StatusButton = styled.input`
//     /* appearance: none; */
//     /* outline: none;
//     border: none;
//     background: transparent;
//     display: inline-block;
//     vertical-align: middle;
//     margin: -2px; */
//     height: 16px;
//     width: 16px;

//     &::after {
//         content: '';
//         position: absolute;
//         top: 0; right:  0; bottom: 0; left: 0;
//         box-sizing: border-box;
//         border: 4px solid ${props => (props.status === 'present' ? '#8dc63f' : '#dcdfe3')};
//         border-radius: 50%;
//     }
// `

export const StatusButton = styled.select`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #09d72c;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => {
    if (props.attendanceStatus === "present") return "#14d402";
    else if (props.attendanceStatus === "absent") return "#ff3a3a";
    else if (props.attendanceStatus === "0") return "#ffaa00";
    else return "#000000";
  }};
  @media (max-width: 600px) {
    padding: .2em .5em;
    font-size : 12px;
  }
`;

export const AttendanceLable = styled.label`
  color: #011457;
  font-size: 16px;
  font-weight: 500;
  padding: 0 5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }

`;
export const AttendanceDate = styled.input`
  color: #061c41;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  height: 25px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000f3f;
  @media (max-width: 600px) {
    height: 18px;
    width: 110px;
    font-size: 14px;
  }
`;
export const AttendanceClass = styled.select`
  color: #061c41;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  width: 40px;
  height: 25px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #000f3f;
  @media (max-width: 600px) {
    height: 18px;

    width: 30px;
  }
`;

export const AttendanceBtn = styled.button`
  color: #e01c1c;
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
  width: auto;
  padding: 6px 10px;
  /* height : 30px; */
  color: #fff;
  background: #f16800;
  border: none;
  outline: none;
  border-radius: 3px;
  @media (max-width: 600px) {
    padding: 4px 5px;
    font-size: 14px;
  }
`;

export const SlelectAlert = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #ee0000;
`;
