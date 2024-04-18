import {
  UserListBtn,
  UserListBtnWrapper,
  UserListPageBarWrpper,
  UserListPageHead,
  UserListTable,
  UserListWrapper,
} from "../../../styles/UserListStyle";
import { ClassAddForm } from "./AddClass";


export const ClassList = () => {
  return (
    <div>
      <UserListPageBarWrpper>
        <UserListPageHead>Class List</UserListPageHead>
        <ClassAddForm />
      </UserListPageBarWrpper>
      <UserListWrapper>
        <UserListTable>
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Teacher</th>
              <th scope="col">Time</th>
              <th scope="col">Subjects</th>
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
              <td>Class 1</td>
              <td>Teacher 1</td>
              <td>7.30 AM - 9.15 AM</td>
              <td>Math, English, Science</td>
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
            <tr>
              <td>Class 2</td>
              <td>Teacher 2</td>
              <td>7.30 AM - 9.15 AM</td>
              <td>Math, English, Science</td>
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
            <tr>
              <td>Class 3</td>
              <td>Teacher 3</td>
              <td>7.30 AM - 9.15 AM</td>
              <td>Math, English, Science</td>
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
            <tr>
              <td>Class 4</td>
              <td>Teacher 1</td>
              <td>6.00 AM - 7.30 AM</td>
              <td>Math, English, Science</td>
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
            <tr>
              <td>Class 5</td>
              <td>Teacher 2</td>
              <td>6.00 AM - 7.30 AM</td>
              <td>Math, English, Science</td>
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
            <tr>
              <td>Class 6</td>
              <td>Teacher 3</td>
              <td>6.00 AM - 7.30 AM</td>
              <td>Math, English, Science</td>
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
