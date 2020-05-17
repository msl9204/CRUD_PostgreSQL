import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import WritePage from "../WritePage/CreateWrite";

const StyledContainer = styled(Container)`
    margin-top: 20%;
`;

const StyledDiv = styled.div`
    background-color: grey;
`;

const StyledDivContents = styled.div`
    margin-top: 20%;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

export default function SimpleContainer() {
    const { id } = useParams();
    const [data, setdata] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        Axios.get(`http://118.222.73.34:5000/crud/detailView/${id}`).then(
            (response) => {
                setdata(response.data);
            }
        );
    }, [id]);

    function RenderContents() {
        return (
            <React.Fragment>
                <div>
                    <StyledDiv>id : {data[0].id}</StyledDiv>
                    <div>user_id : {data[0].user_id}</div>
                    <div>nickname : {data[0].nickname}</div>
                    <div>title : {data[0].title}</div>
                </div>
                <StyledDivContents>
                    contents : {data[0].contents}
                </StyledDivContents>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setIsEdit(true);
                    }}
                >
                    수정
                </Button>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <StyledContainer maxWidth="sm">
                <div>
                    {data[0] ? (
                        isEdit ? (
                            <WritePage
                                id={data[0].id}
                                user_id={data[0].user_id}
                                nickname={data[0].nickname}
                                title={data[0].title}
                                contents={data[0].contents}
                            />
                        ) : (
                            RenderContents()
                        )
                    ) : (
                        "게시글을 불러올 수 없습니다!"
                    )}
                </div>
            </StyledContainer>
        </React.Fragment>
    );
}
