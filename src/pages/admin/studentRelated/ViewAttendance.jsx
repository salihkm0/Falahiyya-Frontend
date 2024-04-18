import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AttendanceListContainer,
  AttendanceListForm,
  AttendancePercentageCol,
  AttendancePercentageHead,
  InputWrapper,
  ListClassSelect,
  ListDateSelect,
  ListLabel,
  ListTable,
  MissedCol,
  MissedHead,
  TableData,
  TableHead,
  TableRow,
  TotalAttendanceCol,
  TotalAttendanceHead,
} from "../../../styles/attendance/AttendanceListStyle";
import { AttendanceBtn } from "../../../styles/attendance/AttendanceStyle";

export const ViewAttendance = () => {

  const [todayDay, setTodayDay] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [monthDays, setMonthDays] = useState();
  const [singleDays, setSingleDays] = useState([]);
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const getTodayDate = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    setTodayDay(dd)
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is  0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}`;
    setTodayDate(today);
  };

  const getFormDate = () => {
    let date = new Date(data.date);
    let month = String(date.getMonth() + 1).padStart(2, "0"); //January is  0!
    let year = date.getFullYear();
    let monthDays = daysInMonth(month, year);
    setMonthDays(monthDays);
    // setData({...data , 'date':`${year}-${month}`})
  };

  // console.log(monthDays)

  const getAllDays = () => {
    // setSingleDays([]);
    if (monthDays != "") {
      for (let i = 1; i <= monthDays; i++) {
        setSingleDays((old) => [...old, i]);
      }
    } else {
      alert("Please select a valid Month and Year");
    }
  };

  console.log(singleDays);

  useEffect(() => {
    // setMonthDays([])
    setSingleDays([])
    getAllDays();
    getTodayDate();
    getFormDate();
  }, [data]);

  // console.log(monthDays)
  return (
    <>
      <AttendanceListForm onSubmit={handleSubmit((data) => setData(data))}>
        <InputWrapper>
          <ListLabel htmlFor="class">Select Class : </ListLabel>
          <ListClassSelect
            name="class"
            id="class"
            {...register("class", { required: true })}
            required
          >
            <option value="">Please Select Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </ListClassSelect>
        </InputWrapper>
        <InputWrapper>
          <ListLabel htmlFor="month">Select Month : </ListLabel>
          <ListDateSelect
            name="month"
            type="month"
            defaultValue={todayDate}
            id="month"
            {...register("date", { required: true })}
            required
          />
        </InputWrapper>
        <AttendanceBtn type="submit">Submit</AttendanceBtn>
      </AttendanceListForm>
      <AttendanceListContainer>
        <ListTable>
          <TableRow>
            <TableHead>Roll no</TableHead>
            <TableHead>Admi. no</TableHead>
            <TableHead>Name</TableHead>
            {singleDays.map((day, index) => (
              <TableHead key={index}>{day}</TableHead>
            ))}
            {/* <TableHead>1</TableHead>
            <TableHead>2</TableHead>
            <TableHead>3</TableHead>
            <TableHead>4</TableHead>
            <TableHead>5</TableHead>
            <TableHead>6</TableHead>
            <TableHead>7</TableHead>
            <TableHead>8</TableHead>
            <TableHead>9</TableHead>
            <TableHead>10</TableHead>
            <TableHead>11</TableHead>
            <TableHead>12</TableHead>
            <TableHead>13</TableHead>
            <TableHead>14</TableHead>
            <TableHead>15</TableHead>
            <TableHead>16</TableHead>
            <TableHead>17</TableHead>
            <TableHead>18</TableHead>
            <TableHead>19</TableHead>
            <TableHead>20</TableHead>
            <TableHead>21</TableHead>
            <TableHead>22</TableHead>
            <TableHead>23</TableHead>
            <TableHead>24</TableHead>
            <TableHead>25</TableHead>
            <TableHead>26</TableHead>
            <TableHead>27</TableHead>
            <TableHead>28</TableHead>
            <TableHead>29</TableHead>
            <TableHead>30</TableHead> */}
            <MissedHead>Total Absent</MissedHead>
            <TotalAttendanceHead>Total Attendance</TotalAttendanceHead>
            <AttendancePercentageHead>Attendance(%)</AttendancePercentageHead>
          </TableRow>
          <TableRow>
            <TableData>01</TableData>
            <TableData>101</TableData>
            <TableData>Salih</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>H</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>H</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>H</TableData>
            <TableData>H</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <MissedCol>03</MissedCol>
            <TotalAttendanceCol>5</TotalAttendanceCol>
            <AttendancePercentageCol>70</AttendancePercentageCol>
          </TableRow>
          <TableRow>
            <TableData>02</TableData>
            <TableData>102</TableData>
            <TableData>Muhammed Shahan</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>H</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>H</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>H</TableData>
            <TableData>H</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>P</TableData>
            <TableData>A</TableData>
            <TableData>A</TableData>
            <MissedCol>03</MissedCol>
            <TotalAttendanceCol>4</TotalAttendanceCol>
            <AttendancePercentageCol>70</AttendancePercentageCol>
          </TableRow>
        </ListTable>
      </AttendanceListContainer>
    </>
  );
};
