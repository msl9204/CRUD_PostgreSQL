import React, { useEffect, useState } from "react";
import BasicLayout from "../BasicView/Layout";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import WritePage from "../WritePage/CreateWrite";

import {
    ContainerText,
    ContentBoxArea,
    DetailContent,
    BackButton,
    DeleteButton,
    ButtonZone,
    EditButton,
} from "../../styles/componentStyles";

export default function SimpleContainer() {
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    function backAction() {
        history.push("/");
    }

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
                setData(response.data);
            }
        );
    }, [id]);

    if (!isEdit) {
        return BasicLayout(
            data &&
                data.map((item) => (
                    <React.Fragment key={item.id}>
                        <ContainerText>{item.title}</ContainerText>
                        <ContentBoxArea single>
                            <DetailContent>{item.contents}</DetailContent>
                        </ContentBoxArea>
                        <ButtonZone>
                            <BackButton onClick={backAction}>Back</BackButton>
                            <EditButton
                                onClick={() => {
                                    setIsEdit(true);
                                }}
                            >
                                Edit
                            </EditButton>
                            <DeleteButton onClick={DeletePost}>
                                Delete
                            </DeleteButton>
                        </ButtonZone>
                    </React.Fragment>
                ))
        );
    } else {
        return (
            <div>
                {data &&
                    data.map((item) => (
                        <WritePage
                            title={item.title}
                            contents={item.contents}
                            isEdit={true}
                        />
                    ))}
            </div>
        );
    }
}
