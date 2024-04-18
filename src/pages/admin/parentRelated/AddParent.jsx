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

export const ParentAddForm = () => {
  const [newTeacherData, setNewTeacherData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newTeacherData);
  return (
    <Popup trigger={<AddBtn>Add Parent</AddBtn>} modal nested>
      {(close) => (
        <AddFormContainer>
          <AddFormTitle> Add Parent </AddFormTitle>
          <AddForm onSubmit={handleSubmit((data) => setNewTeacherData(data))}>
            <AddFormFieldset>
              <label for="username">Role :</label>
              <input
                type="text"
                id=""
                name="role"
                value={"parent"}
                readOnly
                {...register("role", { required: true })}
              />
              <br />
              {/* <label for="username">User name:</label>
              <input
                type="text"
                id=""
                name="username"
                {...register("username", { required: true })}
              /> */}
              <br />
              <label for="parentName">Parent Name:</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                {...register("parentName", { required: true })}
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
                id="phone"
                name="phone"
                {...register("phone", { required: true })}
              />
              <br />
              <label for="password">Password:</label>
              <input
                type="text"
                id="password"
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
