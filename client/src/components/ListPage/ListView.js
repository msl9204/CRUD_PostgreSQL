import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import BasicLayout from "../BasicView/Layout";
import moment from "moment";
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
    ContentTime,
} from "../../styles/componentStyles";
import CreateWrite from "../WritePage/CreateWrite";

export default function SimpleTable() {
    const [data, setData] = useState("");

    useEffect(() => {
        Axios.get("http://118.222.73.34:5000/crud/select").then((response) => {
            setData(response.data);
        });
    }, []);

    function DatetoRelative(date) {
        return moment(date).calendar();
    }
    if (data) {
        return BasicLayout(
            <React.Fragment>
                <ContainerText>Articles</ContainerText>
                <ContentBoxArea>
                    {data.map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <ContentBox>
                                <ContentImg />
                                <ContentTextField>
                                    <ContentTitle>{item.title}</ContentTitle>
                                    <ContentTime>
                                        CreateAt :
                                        {DatetoRelative(item.createdAt)}
                                    </ContentTime>
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
    } else {
        return <div></div>;
    }
}
