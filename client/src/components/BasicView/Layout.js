import React from "react";
import {
    Container,
    Header,
    MainContainer,
    HeaderText,
    HeaderSearch,
    HeaderCategory,
} from "../../styles/componentStyles";

// 전체 컨테이너

export default function BasicLayout(object) {
    return (
        <Container>
            <Header>
                <HeaderText>MinSoo의 블로그</HeaderText>
                <HeaderSearch>Search</HeaderSearch>
                <HeaderCategory>Category</HeaderCategory>
            </Header>
            <MainContainer>{object}</MainContainer>
        </Container>
    );
}
