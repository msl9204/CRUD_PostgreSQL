import React, { useState, useEffect } from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const StyledFormControl = styled(FormControl)`
    width: 40vw;
    height: 40vh;

    margin-top: 30px;

    .contents {
        margin-top: 30px;
    }

    .button {
        margin-top: 30px;
        max-width: 100px;
    }
`;

const StyledTextField = styled(TextField)`
    max-width: 200px;
    margin-top: 30px;
`;

export default function MultilineTextFields(props) {
    const { id } = useParams();
    const history = useHistory();
    const [userid, setUserid] = useState("");
    const [title, setTitle] = useState("");
    const [nickname, setNickname] = useState("");
    const [contents, setContents] = useState("");

    // 수정하면 state에 받아옴
    useEffect(() => {
        if (props.user_id) {
            console.log(props.user_id);
            setUserid(() => props.user_id);
            setTitle(() => props.title);
            setNickname(() => props.nickname);
            setContents(() => props.contents);

            console.log(userid);
        }
    }, [props]);

    function handleCreateSubmit(event) {
        Axios.post("http://118.222.73.34:5000/crud/create", {
            user_id: userid,
            title: title,
            nickname: nickname,
            contents: contents,
        })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    history.push("/");
                } else {
                    alert("입력에 실패했습니다.");
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
                    history.push("/");
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

    return (
        <Container>
            <form
                autoComplete="off"
                // props 에서 받은 것이 있다면 = 수정한다면, UpdateSubmit을 불러오고
                // ListView에서 새로 작성하는 것이라면, CreateSubmit을 불러옴
                onSubmit={(event) =>
                    props.user_id
                        ? handleUpdateSubmit(event)
                        : handleCreateSubmit(event)
                }
            >
                <StyledFormControl>
                    <StyledTextField
                        id="user-id"
                        placeholder="아이디"
                        value={userid}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    ></StyledTextField>
                    <StyledTextField
                        id="title"
                        placeholder="제목"
                        value={title}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    ></StyledTextField>
                    <StyledTextField
                        id="nickname"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    ></StyledTextField>

                    <TextField
                        className="contents"
                        multiline
                        rows={30}
                        placeholder="Contents"
                        variant="outlined"
                        fullWidth
                        value={contents}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    />
                    <Button
                        className="button"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        쓰기
                    </Button>
                    <Button
                        className="button"
                        variant="contained"
                        color="primary"
                    >
                        취소
                    </Button>
                </StyledFormControl>
            </form>
        </Container>
    );
}
