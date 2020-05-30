import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import BasicLayout from "../BasicView/Layout";
import {
    ContainerText,
    ContentBoxArea,
    ContentBox,
    ContentImg,
    ContentTextField,
    ContentTitle,
    ContentText,
    CreateButton,
    ButtonZone,
} from "../../styles/componentStyles";
import CreateWrite from "../WritePage/CreateWrite";

import { useHistory } from "react-router-dom";

// function CreateButton() {
//     const history = useHistory();

//     return (
//         <Button
//             variant="contained"
//             color="primary"
//             onClick={() => {
//                 history.push("/write");
//             }}
//             style={{ marginTop: "2em" }}
//         >
//             Write
//         </Button>
//     );
// }

export default function SimpleTable() {
    const [data, setData] = useState("");

    useEffect(() => {
        Axios.get("http://118.222.73.34:5000/crud/select").then((response) => {
            setData(response.data);
        });
    }, []);

    return BasicLayout(
        <React.Fragment>
            <ContainerText>Articles</ContainerText>
            <ContentBoxArea>
                {data &&
                    data.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <ContentBox>
                                <ContentImg />
                                <ContentTextField>
                                    <ContentTitle>{item.title}</ContentTitle>
                                    <ContentText>{item.contents}</ContentText>
                                </ContentTextField>
                            </ContentBox>
                        </Link>
                    ))}
            </ContentBoxArea>

            <ButtonZone>
                <Link to={"/write"}>
                    <CreateButton>CREATE</CreateButton>
                </Link>
            </ButtonZone>
        </React.Fragment>
    );
}
