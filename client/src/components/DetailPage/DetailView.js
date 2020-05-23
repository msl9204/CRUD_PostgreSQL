import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import WritePage from "../WritePage/CreateWrite";

const StyledContainer = styled(Container)`
    display: flex;
`;

const StyledContents = styled.div`
    min-width: 900px;
    min-height: 900px;
    flex-direction: column;
    margin: 5rem 0 0 0;
    justify-self: center;
    align-self: center;

    .content-title {
        font-size: 20px;
        font-weight: bold;
    }

    Button {
        margin-top: 1rem;
        max-width: 100px;
    }
`;

const StyledCardContents = styled(Card)`
    flex-grow: 1;
    margin-top: 3%;

    padding: 1.5rem;
    min-width: 40%;
    min-height: 500px;
`;

export default function SimpleContainer() {
    const { id } = useParams();
    const history = useHistory();
    const [data, setdata] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    function DeletePost(event) {
        Axios.post(`http://118.222.73.34:5000/crud/delete/${id}`, {
            id: id,
        })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    history.push("/");
                } else {
                    console.log(response);
                    alert("입력에 실패했습니다.");
                }
            })
            .catch((err) => console.log(err));
        event.preventDefault();
    }

    useEffect(() => {
        Axios.get(`http://118.222.73.34:5000/crud/detailView/${id}`).then(
            (response) => {
                setdata(response.data);
            }
        );
    }, [id]);

    function RenderContents() {
        return (
            <StyledContainer>
                <StyledContents>
                    <div>
                        <div className="content-nickname">
                            작성자 : {data[0].nickname}
                        </div>
                        <div className="content-title">{data[0].title}</div>
                    </div>
                    <StyledCardContents>{data[0].contents}</StyledCardContents>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                setIsEdit(true);
                            }}
                        >
                            수정
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => {
                                DeletePost(event);
                            }}
                        >
                            삭제
                        </Button>
                    </div>
                </StyledContents>
            </StyledContainer>
        );
    }

    return (
        <React.Fragment>
            <div>
                {/* 수정버튼을 누르면 수정Form을 랜더링하고, 아니라면 Contents를 보여줌 */}
                {data[0] ? (
                    isEdit ? (
                        <div>
                            <WritePage
                                id={data[0].id}
                                user_id={data[0].user_id}
                                nickname={data[0].nickname}
                                title={data[0].title}
                                contents={data[0].contents}
                            />
                        </div>
                    ) : (
                        <RenderContents />
                    )
                ) : null}
            </div>
        </React.Fragment>
    );
}
