import styled from "styled-components";

// LayoutStart
// 전체 컨테이너
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Header
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 0px;
    padding: 0 50px 0 50px;
    background: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
`;

const HeaderText = styled.div`
    /* background: red; */
    flex-grow: 6;
    height: 50%;
    font-size: 2rem;
    padding-left: 70px;
`;

const HeaderSearch = styled.div`
    /* background: pink; */
    flex-grow: 1;
    height: 50%;
`;

const HeaderCategory = styled.div`
    /* background: blue; */
    flex-grow: 1;
    height: 50%;
`;

// Page이름 포함하는 컨테이너
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: auto;
    left: 220px;
    top: 149px;
    align-items: center;
    background: #f5f6fa;
    box-sizing: border-box;
`;
// LayoutEnd

// Page 이름

const ContainerText = styled.h1`
    font-size: 36px;
    line-height: 42px;

    margin-top: 50px;
    margin-bottom: 50px;

    color: #000000;
`;
// 페이지 마다 바뀌는 컨테이너 영역
const ContentBoxArea = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    justify-content: ${(props) => props.single && "center"};
    width: 1440px;
    height: auto;
`;

// ListView Start
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 25px 25px 25px;
    width: calc(200px + 10vw);
    height: 450px;
    border-radius: 10px;

    padding: 20px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContentImg = styled.div`
    width: 100%;
    height: 40%;

    border-radius: 10px;

    background-image: url(${(props) => props.path});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const ContentTextField = styled.div`
    width: 100%;
    height: 60%;
`;

const ContentTitle = styled.h3`
    font-size: 1.5rem;
    margin-top: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;

    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const ContentTime = styled.div`
    margin-top: 5px;

    display: block;
    background-color: #c7ecee;
`;

const ContentText = styled.h6`
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
`;

const CreateButton = styled.button`
    margin: 20px 10px 0 0;
    width: 150px;
    height: 60px;

    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);

    background: #00a8ff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 1rem;
    &:hover {
        background: #82ccdd;
        transition-duration: 0.5s;
        cursor: pointer;
    }
`;

// CreateWrite.js
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const WriteTitle = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    min-width: 450px;
    max-width: 450px;
    height: 60px;
    font-size: 1.3rem;
    margin-bottom: 30px;
    padding-left: 20px;
    padding-right: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    &:focus {
        outline: none;
    }
`;
const WriteContent = styled.textarea`
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-align: start;
    border-radius: 15px;
    font-size: 1rem;
    padding: 15px;
    min-width: 800px;
    max-width: 800px;
    height: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    &:focus {
        outline: none;
    }
`;

const WriteButton = styled.button`
    margin: 20px 10px 0 0;
    width: 150px;
    height: 60px;

    background: #00a8ff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 1rem;
    &:hover {
        background: #82ccdd;
        transition-duration: 0.5s;
        cursor: pointer;
    }
`;

const CancelButton = styled(WriteButton)`
    background: #eb4d4b;

    &:hover {
        background: #ff7979;
    }
`;

const LogOutButton = styled(CancelButton)``;

const UploadContainer = styled.div`
    display: flex;
    align-items: center;
`;

const HideInputFile = styled.input`
    display: none;
`;

const AddImage = styled.label`
    padding-top: 10px;
    margin-right: 10px;
    line-height: normal;
    width: 100px;
    height: 40px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    background: #c4c4c4;
    border-radius: 30px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
`;

const ImageName = styled.div`
    background: lightgrey;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
`;

//DetailPage start

const DetailContent = styled(ContentBox)`
    width: 50vw;
    height: 70vh;
    word-wrap: break-word;
`;

const ButtonZone = styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    position: fixed;
    bottom: 10%;
    right: 5%;
`;

const BackButton = styled(CreateButton)``;

const DeleteButton = styled(CancelButton)``;

const EditButton = styled(CreateButton)`
    background-color: #6ab04c;
`;

const LoginButton = styled(EditButton)``;

export {
    Container,
    Header,
    MainContainer,
    ContainerText,
    ContentBoxArea,
    ContentBox,
    ContentImg,
    ContentTextField,
    ContentTitle,
    ContentText,
    Form,
    WriteTitle,
    WriteContent,
    WriteButton,
    CancelButton,
    CreateButton,
    DetailContent,
    BackButton,
    DeleteButton,
    ButtonZone,
    ContentTime,
    EditButton,
    HideInputFile,
    AddImage,
    UploadContainer,
    ImageName,
    HeaderText,
    HeaderSearch,
    HeaderCategory,
    LogOutButton,
    LoginButton,
};
