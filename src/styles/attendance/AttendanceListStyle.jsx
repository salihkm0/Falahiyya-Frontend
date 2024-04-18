import { styled } from "styled-components";

export const AttendanceListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  /* background: #731818; */
  &::-webkit-scrollbar {
    height: 6px;
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: #001f3f;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff6a00;
    cursor : pointer;
  }
`;
export const ListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  /* overflow: scroll; */
  margin: 10px 0;
  color : #001f3f;
`;
export const TableRow = styled.tr``;
export const TableHead = styled.th`
  background-color: #001f3f;
  color: #fff;
  padding: 0.5em 1em;
  border : 1px solid #ffffff;
`;
export const TableData = styled.td`
  padding: 0.5em 1em;
  border : 1px solid #ffffff;
  border-bottom: 1px solid #001f3f;
`;

export const MissedCol = styled.td`
  border : 1px solid #ffffff;
  background-color: #ffecec;
  color: #f00;
  text-align: center;
  width: 100px;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #001f3f;
  font-size: 16px;
  font-weight: 600;
`;
export const MissedHead = styled.th`
  background-color: #f00;

  width: 100px;
  text-align: center;
  padding: 5px 10px;
  border : 1px solid #ffffff;
  font-size: 18px;
  font-weight: 600;
`;
export const TotalAttendanceCol = styled.td`
  color: rgb(173, 95, 0);
  background-color: rgba(255, 167, 60, 0.566);
  border : 1px solid #ffffff;
  width: 100px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #001f3f;
  font-size: 16px;
  font-weight: 600;
`;
export const TotalAttendanceHead = styled.th`
  background-color: rgb(207, 114, 0);
  width: 100px;
  text-align: center;
  padding: 5px;
  border : 1px solid #ffffff;
  font-size: 18px;
  font-weight: 600;
`;
export const AttendancePercentageHead = styled.th`
  background-color: rgb(17, 207, 0);
  min-width: 120px;
  text-align: center;
  padding: 5px;
  border : 1px solid #ffffff;
  font-size: 18px;
  font-weight: 600;
`;

export const AttendancePercentageCol = styled.td`
  color: rgb(35, 173, 0);
  background-color: rgba(79, 255, 60, 0.566);
  border : 1px solid #ffffff;
  width: 120px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #001f3f;
  font-size: 16px;
  font-weight: 600;
`;

export const ListLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`
export const InputWrapper = styled.div`
  display :flex;
  align-items:center;
  gap : 10px;
`
export const  AttendanceListForm = styled.form`
  display :flex;
  gap : 10px;
  flex-wrap : wrap;
  align-items:center;

`
export const ListClassSelect = styled.select`
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
`
export const ListDateSelect = styled.input`
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
`