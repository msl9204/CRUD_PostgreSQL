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
} from "../../styles/componentStyles";

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
    const [data, setdata] = useState("");

    useEffect(() => {
        Axios.get("http://118.222.73.34:5000/crud/select").then((response) => {
            setdata(response.data);
        });
    }, []);

    return BasicLayout(
        <React.Fragment>
            <ContainerText>Articles</ContainerText>
            <ContentBoxArea>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32. The standard chunk of Lorem
                            Ipsum used since the 1500s is reproduced below for
                            those interested. Sections 1.10.32 and 1.10.33 from
                            "de Finibus Bonorum et Malorum" by Cicero are also
                            reproduced in their exact original form, accompanied
                            by English versions from the 1914 translation by H.
                            Rackham.
                        </ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
                <ContentBox>
                    <ContentImg />
                    <ContentTextField>
                        <ContentTitle>Javascript는 무엇인가?</ContentTitle>
                        <ContentText>Test -1</ContentText>
                    </ContentTextField>
                </ContentBox>
            </ContentBoxArea>
        </React.Fragment>
    );

    // return (
    //     <Container style={{ marginTop: "3em" }}>
    //         {data && (
    //             <React.Fragment>
    //                 <TableContainer component={Paper}>
    //                     <Table component="div" aria-label="simple table">
    //                         <TableHead component="div">
    //                             <TableRow component="div">
    //                                 <TableCell component="div">Title</TableCell>
    //                                 <TableCell component="div" align="center">
    //                                     작성자
    //                                 </TableCell>
    //                                 <TableCell component="div" align="center">
    //                                     작성일자
    //                                 </TableCell>
    //                                 <TableCell component="div" align="center">
    //                                     수정일자
    //                                 </TableCell>
    //                             </TableRow>
    //                         </TableHead>
    //                         <TableBody component="div">
    //                             {data
    //                                 ? data.map((item) => (
    //                                       <TableRow
    //                                           component={Link}
    //                                           to={`/detail/${item.id}`}
    //                                           key={item.id}
    //                                           style={{ textDecoration: "none" }}
    //                                       >
    //                                           <TableCell
    //                                               component="div"
    //                                               scope="row"
    //                                           >
    //                                               {item.title}
    //                                           </TableCell>
    //                                           <TableCell
    //                                               component="div"
    //                                               align="center"
    //                                           >
    //                                               {item.nickname}
    //                                           </TableCell>
    //                                           <TableCell
    //                                               component="div"
    //                                               align="center"
    //                                           >
    //                                               {item.createdAt}
    //                                           </TableCell>
    //                                           <TableCell
    //                                               component="div"
    //                                               align="center"
    //                                           >
    //                                               {item.updatedAt}
    //                                           </TableCell>
    //                                       </TableRow>
    //                                   ))
    //                                 : null}
    //                         </TableBody>
    //                     </Table>
    //                 </TableContainer>

    //                 <CreateButton />
    //             </React.Fragment>
    //         )}
    //     </Container>
    // );
}
