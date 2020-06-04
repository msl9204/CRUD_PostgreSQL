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
    LogOutButton,
    LoginButton,
} from "../../styles/componentStyles";
import { useAuth } from "../../auth/useAuth";

export default function SimpleTable() {
    const [data, setData] = useState("");
    const auth = useAuth();

    auth.currentUser();

    useEffect(() => {
        Axios.get("http://118.222.73.34:5000/crud/select").then((response) => {
            setData(response.data);
        });
    }, []);

    function DatetoRelative(date) {
        return moment(date).calendar();
    }

    function Decode(blob) {
        if (blob) {
            var buf = new Buffer(blob, "base64");
            return buf;
        }
    }

    if (data) {
        return BasicLayout(
            <React.Fragment>
                <ContainerText>Articles</ContainerText>
                <ContentBoxArea>
                    {data.map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <ContentBox>
                                <React.Fragment>
                                    <ContentImg path={Decode(item.img)} />
                                </React.Fragment>

                                <ContentTextField>
                                    <ContentTitle>{item.title}</ContentTitle>
                                    <ContentTime>
                                        CreateAt :{" "}
                                        {DatetoRelative(item.createdAt)}
                                    </ContentTime>
                                    <ContentText>{item.contents}</ContentText>
                                </ContentTextField>
                            </ContentBox>
                        </Link>
                    ))}
                </ContentBoxArea>

                <ButtonZone>
                    {auth.user ? (
                        <React.Fragment>
                            <LogOutButton
                                onClick={() => {
                                    auth.signout().then((response) =>
                                        console.log(response)
                                    );
                                }}
                            >
                                Logout
                            </LogOutButton>
                            <Link to={"/write"}>
                                <CreateButton>CREATE</CreateButton>
                            </Link>
                        </React.Fragment>
                    ) : (
                        <Link to={"/login"}>
                            <LoginButton>Login</LoginButton>
                        </Link>
                    )}
                </ButtonZone>
            </React.Fragment>
        );
    } else {
        return <div></div>;
    }
}
