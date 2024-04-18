// import { teacherList } from "../../../data/teacherList";
import {
  UserListBtn,
  UserListBtnWrapper,
  UserListPageBarWrpper,
  UserListPageHead,
  UserListTable,
  UserListWrapper,
} from "../../../styles/UserListStyle";
import { SubjectAddForm } from "./AddSubject";

export const SubjectList = () => {
  return (
    <div>
      <UserListPageBarWrpper>
        <UserListPageHead>Subject List</UserListPageHead>
        <SubjectAddForm />
      </UserListPageBarWrpper>
      <UserListWrapper>
        <UserListTable>
          <thead>
            <tr>
              <th scope="col">Subject Code</th>
              <th scope="col">Subject Name</th>
              <th scope="col">Total Mark</th>
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
              <td>0001</td>
              <td>Sub1</td>
              <td>50</td>
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
              <td>0002</td>
              <td>Sub2</td>
              <td>50</td>
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
              <td>0003</td>
              <td>Sub3</td>
              <td>50</td>
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
              <td>0004</td>
              <td>Sub4</td>
              <td>50</td>
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
