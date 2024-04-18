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

export const TeacherAddForm = () => {
  const [newTeacherData, setNewTeacherData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newTeacherData);
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
              <select
                name="class"
                id=""
                {...register("class", { required: true })}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
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
