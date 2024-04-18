// import { teacherList } from "../../../data/teacherList";
import {
  UserListBtn,
  UserListBtnWrapper,
  UserListPageBarWrpper,
  UserListPageHead,
  UserListTable,
  UserListWrapper,
} from "../../../styles/UserListStyle";
import { ParentAddForm } from "./AddParent";

export const ParentsList = () => {
  return (
    <div>
      <UserListPageBarWrpper>
        <UserListPageHead>Parent List</UserListPageHead>
        <ParentAddForm />
      </UserListPageBarWrpper>
      <UserListWrapper>
        <UserListTable>
          <thead>
            <tr>
              <th scope="col">Parent Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {teacherList.map((item) => (
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
            ))} */}
            <tr>
              <td>Abdulla</td>
              <td>Abdulla</td>
              <td>Abdulla</td>
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
          </tbody>
        </UserListTable>
      </UserListWrapper>
    </div>
  );
};
