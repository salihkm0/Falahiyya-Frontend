import { styled } from "styled-components"

export const AddFormContainer = styled.div`
    width : 500px;
    height :auto;
    background : #9393934e;
    backdrop-filter : blur(10px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius : 10px;
    padding : 20px;
    @media (max-width:  600px){
        width : 300px;
    }
`
export const AddFormTitle = styled.h2`
    font-size : 28px;
    text-align : center;
    margin-top : 20px;
`
export const AddForm  = styled.form`
    display : flex;
    flex-direction : column;
    gap : 10px ;
    align-items : start;
`
export const AddFormFieldset = styled.fieldset`
    display : flex;
    flex-direction : column;
    align-items : start;
    justify-content : space-around; 
    border : none;
    width : 100%;
    height : 100%;
    padding : 20px;
    & > label{
        color : #07093e;
        font-weight : bold;
    }
    & > input{
        margin :6px 0 ;
        width : 100% ;
        height : 30px;
        border-radius : 4px;
        border : 1px solid lightgrey;
        outline : none;
        padding : 0 10px;
    } 
`;

export const AddButtonWrapper = styled.div `
    display : flex;
    justify-content : center;
    gap : 10px;
    button{
        cursor : pointer;
        transition : all .3s ease;
        &:hover{
            transform : scale(1.05);
        };
    }
`
export const SaveBtn = styled.button`
    padding :  8px 30px;
    cursor : pointer;
    outline : none;
    border : none;
    font-weight : 500;
    transition : all .3s ease;
    border-radius : 3px;
    color : #fff;
    background :#021048;
`
export const AddFormCloseBtn = styled.button`
    padding :  8px 30px;
    cursor : pointer;
    outline : none;
    border : none;
    font-weight : 500;
    transition : all .3s ease;
    border-radius : 3px;
    color : #fff;
    background :#3e3e3e;
`


// export const ErrorMessage = styled.p`
//     color : red;
//     text-align : left;
//     font-size : 12px;
//     line-height : 18px;
//     letter-spacing : -0.03em;
//     font-weight : 400;
// `;