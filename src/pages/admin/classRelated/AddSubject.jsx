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

export const SubjectAddForm = () => {
  const [newTeacherData, setNewTeacherData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handles input changes for new admin data

  console.log(newTeacherData);
  return (
    <Popup trigger={<AddBtn>Add Subject</AddBtn>} modal nested>
      {(close) => (
        <AddFormContainer>
          <AddFormTitle> Add Subject </AddFormTitle>
          <AddForm onSubmit={handleSubmit((data) => setNewTeacherData(data))}>
            <AddFormFieldset>
              <br />
              <label for="subCode">Subject Code:</label>
              <input
                type="text"
                id="subCode"
                name="subCode"
                {...register("subCode", { required: true })}
              />
              <br />
              <label for="subName">Subject Name:</label>
              <input
                type="text"
                id="subName"
                name="subName"
                {...register("subName", { required: true })}
              />
              <br />
              <label for="subTotalMark">Total Mark:</label>
              <input
                type="number"
                id="subTotalMark"
                name="subTotalMark"
                {...register("subTotalMark", { required: true })}
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
