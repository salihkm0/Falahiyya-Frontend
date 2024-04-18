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

export const ClassAddForm = () => {
  const [newTeacherData, setNewTeacherData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newTeacherData);
  return (
    <Popup trigger={<AddBtn>Add Class</AddBtn>} modal nested>
      {(close) => (
        <AddFormContainer>
          <AddFormTitle> Add Class </AddFormTitle>
          <AddForm onSubmit={handleSubmit((data) => setNewTeacherData(data))}>
            <AddFormFieldset>
              <label for="className"> Class :</label>
              <input
                type="text"
                id="className"
                name="className"
                {...register("className", { required: true })}
              />
              <br />
              <label for="classTeacher">Class Teacher:</label>
              <input
                type="text"
                id="classTeacher"
                name="classTeacher"
                {...register("classTeacher", { required: true })}
              />
              <br />
              <label for="classTime">class Time:</label>
              <input
                type="text"
                id="classTime"
                name="classTime"
                {...register("classTime", { required: true })}
              />
              <br />
              <label for="Subjects">Subjects:</label>
              <input
                type="text"
                id="Subjects"
                name="Subjects"
                {...register("Subjects", { required: true })}
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
