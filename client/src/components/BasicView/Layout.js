import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    height: 150px;
    left: 0px;
    top: 0px;

    background: #ffffff;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: auto;
    left: 220px;
    top: 149px;
    align-items: center;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContainerText = styled.h1`
    width: 123px;
    height: 42px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    margin-top: 50px;
    margin-bottom: 50px;

    color: #000000;
`;

const ContentBoxArea = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1440px;
    height: auto;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 25px 25px 25px;
    width: 400px;
    height: 500px;
    left: 277px;
    top: 312px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContentImg = styled.div`
    width: 100%;
    height: 40%;
    left: 302px;
    top: 336px;

    background: #e9e9e9;
`;

const ContentText = styled.div`
    width: 100%;
    height: 60%;
    left: 302px;
    top: 441px;

    background: #9e9e9e;
`;

export default function BasicLayout() {
    return (
        <Container>
            <Header />
            <MainContainer>
                <ContainerText>Articles</ContainerText>
                <ContentBoxArea>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                    <ContentBox>
                        <ContentImg />
                        <ContentText>123456</ContentText>
                    </ContentBox>
                </ContentBoxArea>
            </MainContainer>
        </Container>
    );
}
