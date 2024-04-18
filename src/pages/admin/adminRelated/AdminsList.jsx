import React from "react";

import { adminList } from "../../../data/adminList";
import {
  UserListBtn,
  UserListBtnWrapper,
  UserListPageBarWrpper,
  UserListPageHead,
  UserListTable,
  UserListWrapper,
} from "../../../styles/UserListStyle";
import { AdminAddForm } from "./AddAdmin";

export const AdminsList = () => {
  return (
    <div>
      <UserListPageBarWrpper>
        <UserListPageHead>Admins List</UserListPageHead>
        <AdminAddForm />
      </UserListPageBarWrpper>
      <UserListWrapper>
        <UserListTable>
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Admin Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((item) => (
              <tr key={item.username}>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <UserListBtnWrapper>
                    <UserListBtn $orange type="button" class="btn btn-primary">
                      Edit
                    </UserListBtn>

                    <UserListBtn $red type="button" class="btn btn-primary">
                      Delete
                    </UserListBtn>
                  </UserListBtnWrapper>
                </td>
              </tr>
            ))}
          </tbody>
        </UserListTable>
      </UserListWrapper>
    </div>
  );
};
