import React from "react";
import {
    Container,
    Header,
    MainContainer,
    ContainerText,
    ContentBoxArea,
} from "../../styles/componentStyles";

// 전체 컨테이너

export default function BasicLayout(object) {
    return (
        <Container>
            <Header />
            <MainContainer>{object}</MainContainer>
        </Container>
    );
}
