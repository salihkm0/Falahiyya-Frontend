import { teacherList } from "../../../data/teacherList";
import {
  UserListBtn,
  UserListBtnWrapper,
  UserListPageBarWrpper,
  UserListPageHead,
  UserListTable,
  UserListWrapper,
} from "../../../styles/UserListStyle";
import { TeacherAddForm } from "./AddTeacher";

export const TeachersList = () => {
  return (
    <div>
      <UserListPageBarWrpper>
        <UserListPageHead>Teacher List</UserListPageHead>
        <TeacherAddForm />
      </UserListPageBarWrpper>
      <UserListWrapper>
        <UserListTable>
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Teacher Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Classes</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {teacherList.map((item) => (
              <tr key={item.username}>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{`${item.class[0]} , ${item.class[1]}`}</td>
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
