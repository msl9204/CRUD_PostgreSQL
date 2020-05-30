import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";

import BasicLayout from "../BasicView/Layout";
import { useHistory, useParams } from "react-router-dom";
import {
    ContainerText,
    ContentBoxArea,
    Form,
    WriteTitle,
    WriteContent,
    ButtonZone,
    WriteButton,
    CancelButton,
    AddImage,
    HideInputFile,
    UploadContainer,
    ImageName,
} from "../../styles/componentStyles";

export default function WritePage(props) {
    const { id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [imageData, setImageData] = useState("");
    const [imageName, setImageName] = useState("");
    const [imageSize, setImageSize] = useState("");

    console.log(imageData);

    function handleCreateSubmit(event) {
        Axios.post("http://118.222.73.34:5000/crud/create", {
            title: title,
            contents: contents,
            img: imageData,
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
            title: title,
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

    function backAction() {
        history.push("/");
    }

    useEffect(() => {
        setTitle(() => props.title);
        setContents(() => props.contents);
    }, [props.title, props.contents]);

    return BasicLayout(
        <React.Fragment>
            <ContainerText>Write</ContainerText>
            <ContentBoxArea single>
                <Form
                    onSubmit={(event) =>
                        props.isEdit
                            ? handleUpdateSubmit(event)
                            : handleCreateSubmit(event)
                    }
                >
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
                    <ButtonZone>
                        <WriteButton type="submit">Write</WriteButton>
                        <CancelButton type="button" onClick={backAction}>
                            Cancel
                        </CancelButton>
                    </ButtonZone>
                    <UploadContainer>
                        <AddImage htmlFor="add_file">Add Image</AddImage>
                        {imageName && (
                            <ImageName>
                                {imageName} ({imageSize}){" MB"}
                            </ImageName>
                        )}
                        <HideInputFile
                            id="add_file"
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                                let Reader = new FileReader();
                                Reader.readAsBinaryString(
                                    event.target.files[0]
                                );

                                Reader.onload = function (e) {
                                    setImageData(e.target.result);
                                };

                                setImageName(event.target.files[0].name);
                                setImageSize(
                                    (
                                        event.target.files[0].size /
                                        (1024 * 1024)
                                    ).toFixed(2)
                                );
                            }}
                        />
                    </UploadContainer>
                </Form>
            </ContentBoxArea>
        </React.Fragment>
    );
}
