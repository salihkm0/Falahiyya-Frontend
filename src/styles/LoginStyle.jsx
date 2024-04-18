import { styled } from "styled-components";

export const LoginContainer = styled.div`
  background: #2c3338;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const FormContainer = styled.div`
  background: transparent;
  /* background : #0081de; */
  width: 400px;
  height: auto;
  padding: 20px;
  border : 1px solid #ccc;
  border-radius : 3px;
`;

export const Form = styled.form`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const FormField = styled.div`
  width: 100%;
  height: 50px;
  background: #363b41;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
`;
export const IconContainer = styled.div`
  width: 70px;
  height: 100%;
  background: #363b41;
  display: grid;
  place-items: center;
`;
export const InputStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0;
  background-color: #3b4148;
  color: #fff;
  font-size: 18px;
  padding: 0 10px;
  &::placeholder {
    font-size: 16px;
    color: #7e7d7d;
  }
  &:hover,
  &:focus {
    background-color: #434a52;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin :0;

  }
`;
export const SubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background: #ea4c88;
  font-weight: bold;
  display: grid;
  place-items: center;
  color: #eee;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.25rem;
  font-size: 16px;

  &:hover,
  &:focus {
    background-color: #d44179;
  }
`;
export const FormHeadingContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  gap:0;
  justify-content : center;
  color : #fff;
  padding : 30px 0;
`
export const FormHeading = styled.p`
  font-size : 26px;
  font-weight : 800;
  line-height : 0px;
`
export const FormSubHeading = styled.p`
  font-size : 18px;
  font-weight : 600;
  /* line-height : 20px; */
`

