import React, { useState, useEffect } from "react";
import Axios from "axios";

import BasicLayout from "../BasicView/Layout";
import { useHistory, useParams } from "react-router-dom";
import {
    ContainerText,
    ContentBoxArea,
    Form,
    WriteTitle,
    WriteContent,
    WriteButton,
    CancelButton,
} from "../../styles/componentStyles";

export default function MultilineTextFields(props) {
    const { id } = useParams();
    const history = useHistory();
    const [userid, setUserid] = useState("");
    const [title, setTitle] = useState("");
    const [nickname, setNickname] = useState("");
    const [contents, setContents] = useState("");

    function backAction() {
        history.push("/");
    }

    // 수정하면 state에 받아옴
    useEffect(() => {
        if (props.user_id) {
            setUserid(() => props.user_id);
            setTitle(() => props.title);
            setNickname(() => props.nickname);
            setContents(() => props.contents);
        }
    }, [props.user_id, props.title, props.nickname, props.contents]);

    function handleCreateSubmit(event) {
        if (!title) {
            alert("제목은 반드시 입력해주세요");
        }

        Axios.post("http://118.222.73.34:5000/crud/create", {
            title: title,
            contents: contents,
        })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    history.push("/");
                } else {
                    alert("입력에 실패했습니다.");
                    console.log(response);
                }
            })
            .catch((err) => console.log(err));
        event.preventDefault();
    }

    function handleUpdateSubmit(event) {
        Axios.post(`http://118.222.73.34:5000/crud/update/${id}`, {
            user_id: userid,
            title: title,
            nickname: nickname,
            contents: contents,
        })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    history.go();
                } else {
                    alert("입력에 실패했습니다.");
                }
            })
            .catch((err) => console.log(err));
        event.preventDefault();
    }

    function handleChange(event) {
        if (event.target.id === "user-id") {
            setUserid(event.target.value);
        }

        if (event.target.id === "title") {
            setTitle(event.target.value);
        }

        if (event.target.id === "nickname") {
            setNickname(event.target.value);
        }

        if (event.target.tagName === "TEXTAREA") {
            setContents(event.target.value);
        }
    }

    return BasicLayout(
        <React.Fragment>
            <ContainerText>Write</ContainerText>
            <ContentBoxArea single>
                <Form onSubmit={handleCreateSubmit}>
                    <WriteTitle
                        type="text"
                        placeholder="제목"
                        required
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <WriteContent
                        type="text"
                        placeholder="내용"
                        value={contents}
                        onChange={(event) => {
                            setContents(event.target.value);
                        }}
                    />
                    <div>
                        <WriteButton type="submit">Write</WriteButton>
                        <CancelButton type="button" onClick={backAction}>
                            Cancel
                        </CancelButton>
                    </div>
                </Form>
            </ContentBoxArea>
        </React.Fragment>
    );

    // return (
    //     <Container>
    //         <Styledform
    //             autoComplete="off"
    //             // props 에서 받은 것이 있다면 = 수정한다면, UpdateSubmit을 불러오고
    //             // ListView에서 새로 작성하는 것이라면, CreateSubmit을 불러옴
    //             onSubmit={(event) =>
    //                 props.user_id
    //                     ? handleUpdateSubmit(event)
    //                     : handleCreateSubmit(event)
    //             }
    //         >
    //             <StyledFormControl>
    //                 <StyledTextField
    //                     id="user-id"
    //                     placeholder="아이디"
    //                     value={userid}
    //                     field
    //                     onChange={(event) => {
    //                         handleChange(event);
    //                     }}
    //                 ></StyledTextField>
    //                 <StyledTextField
    //                     id="nickname"
    //                     placeholder="닉네임"
    //                     value={nickname}
    //                     field
    //                     onChange={(event) => {
    //                         handleChange(event);
    //                     }}
    //                 ></StyledTextField>
    //                 <StyledTextField
    //                     id="title"
    //                     placeholder="제목"
    //                     value={title}
    //                     field
    //                     onChange={(event) => {
    //                         handleChange(event);
    //                     }}
    //                 ></StyledTextField>

    //                 <StyledContents
    //                     className="contents"
    //                     multiline
    //                     rows={30}
    //                     placeholder="Contents"
    //                     variant="outlined"
    //                     fullWidth
    //                     value={contents}
    //                     onChange={(event) => {
    //                         handleChange(event);
    //                     }}
    //                 />
    //                 <StyledButtonGroup>
    //                     <Button
    //                         className="button"
    //                         variant="contained"
    //                         color="primary"
    //                         type="submit"
    //                     >
    //                         쓰기
    //                     </Button>
    //                     <Button
    //                         className="button"
    //                         variant="contained"
    //                         color="primary"
    //                         onClick={() => {
    //                             if (props.user_id) {
    //                                 history.go();
    //                             } else {
    //                                 history.push("/");
    //                             }
    //                         }}
    //                     >
    //                         취소
    //                     </Button>
    //                 </StyledButtonGroup>
    //             </StyledFormControl>
    //         </Styledform>
    //     </Container>
    // );
}
