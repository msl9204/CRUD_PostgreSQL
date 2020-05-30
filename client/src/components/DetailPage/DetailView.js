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

    return BasicLayout(
        data &&
            data.map((item) => (
                <React.Fragment>
                    <ContainerText>{item.title}</ContainerText>
                    <ContentBoxArea>
                        <DetailContent>{item.contents}</DetailContent>
                    </ContentBoxArea>
                    <ButtonZone>
                        <DeleteButton onClick={DeletePost}>Delete</DeleteButton>
                        <BackButton onClick={backAction}>Back</BackButton>
                    </ButtonZone>
                </React.Fragment>
            ))
    );

    // function RenderContents() {
    //     return (
    //         <StyledContainer>
    //             <StyledContents>
    //                 <div>
    //                     <div className="content-nickname">
    //                         작성자 : {data[0].nickname}
    //                     </div>
    //                     <div className="content-title">{data[0].title}</div>
    //                 </div>
    //                 <StyledCardContents>{data[0].contents}</StyledCardContents>
    //                 <div>
    //                     <Button
    //                         variant="contained"
    //                         color="primary"
    //                         onClick={() => {
    //                             setIsEdit(true);
    //                         }}
    //                     >
    //                         수정
    //                     </Button>
    //                     <Button
    //                         variant="contained"
    //                         color="primary"
    //                         onClick={(event) => {
    //                             DeletePost(event);
    //                         }}
    //                     >
    //                         삭제
    //                     </Button>
    //                 </div>
    //             </StyledContents>
    //         </StyledContainer>
    //     );
    // }

    // return (
    //     <React.Fragment>
    //         <div>
    //             {/* 수정버튼을 누르면 수정Form을 랜더링하고, 아니라면 Contents를 보여줌 */}
    //             {data[0] ? (
    //                 isEdit ? (
    //                     <div>
    //                         <WritePage
    //                             id={data[0].id}
    //                             user_id={data[0].user_id}
    //                             nickname={data[0].nickname}
    //                             title={data[0].title}
    //                             contents={data[0].contents}
    //                         />
    //                     </div>
    //                 ) : (
    //                     <RenderContents />
    //                 )
    //             ) : null}
    //         </div>
    //     </React.Fragment>
    // );
}
