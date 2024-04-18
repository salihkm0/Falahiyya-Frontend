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

export const AdminAddForm = () => {
  const [newAdminData, setNewAdminData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newAdminData);
  return (
    <Popup trigger={<AddBtn>Add Admin</AddBtn>} modal nested>
      {(close) => (
        <AddFormContainer>
          <AddFormTitle> Add Admin </AddFormTitle>
          <AddForm onSubmit={handleSubmit((data) => setNewAdminData(data))}>
            <AddFormFieldset>
              <label for="username">Role :</label>
              <input
                type="text"
                id=""
                name="role"
                value={"admin"}
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
              <label for="adminname">Admin Name:</label>
              <input
                type="text"
                id="adminName"
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
