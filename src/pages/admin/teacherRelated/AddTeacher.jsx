import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import {
  AddFormContainer,
  AddFormTitle,
  AddButtonWrapper,
  AddFormFieldset,
  SaveBtn,
  AddForm,
  AddFormCloseBtn,
} from "../../../styles/AddFormStyle.jsx";
import { AddBtn } from "../../../styles/UserListStyle.jsx";
import Select from "react-select";

export const TeacherAddForm = () => {
  const [newTeacherData, setNewTeacherData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newTeacherData);

  const options = [
    { value: "1", label: "01" },
    { value: "2", label: "02" },
    { value: "3", label: "03" },
    { value: "4", label: "04" },
    { value: "5", label: "05" },
    { value: "6", label: "06" },
  ];


  const handleSelect =(e) => {
    let classes = []
    e.map((item)=>classes.push(...item.value))
    console.log(classes);
  }


  return (
    <Popup trigger={<AddBtn>Add Teacher</AddBtn>} modal nested>
      {(close) => (
        <AddFormContainer>
          <AddFormTitle> Add Teacher </AddFormTitle>
          <AddForm onSubmit={handleSubmit((data) => setNewTeacherData(data))}>
            <AddFormFieldset>
              <label for="username">Role :</label>
              <input
                type="text"
                id=""
                name="role"
                value={"teacher"}
                readOnly
                {...register("role", { required: true })}
              />
              <br />
              <label for="username">User name:</label>
              <input
                type="text"
                id=""
                name="username"
                {...register("username", { required: true })}
              />
              <br />
              <label for="adminname">Teacher Name:</label>
              <input
                type="text"
                id="lname"
                name="adminName"
                {...register("adminName", { required: true })}
              />
              <br />
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
              />
              <br />
              <label for="phone">Phone:</label>
              <input
                type="number"
                id="email"
                name="phone"
                {...register("phone", { required: true })}
              />
              <br />
              <label for="phone">Class :</label>
              <Select
                options={options}
                isMulti
                name="classes"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleSelect}
              />
              <br/>
              <label for="phone">isHead :</label>
              <input type="checkbox" {...register("isHead")}/>
              <br/>
              <label for="password">Password:</label>
              <input
                type="text"
                id="email"
                name="password"
                {...register("password", { required: true })}
              />
              <br />
              <AddButtonWrapper>
                <SaveBtn type="submit">Save</SaveBtn>
                <AddFormCloseBtn onClick={close}>Close</AddFormCloseBtn>
              </AddButtonWrapper>
            </AddFormFieldset>
          </AddForm>
        </AddFormContainer>
      )}
    </Popup>
  );
};
