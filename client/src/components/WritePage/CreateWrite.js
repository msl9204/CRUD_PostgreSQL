import React, { useState } from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

export default function MultilineTextFields() {
    const history = useHistory();
    const [userid, setUserid] = useState("");
    const [title, setTitle] = useState("");
    const [nickname, setNickname] = useState("");
    const [contents, setContents] = useState("");

    function handleSubmit(event) {
        Axios.post("http://localhost:3000/crud/create", {
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
            <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
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
                </StyledFormControl>
            </form>
        </Container>
    );
}
