import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function SimpleContainer() {
    const { id } = useParams();
    const [data, setdata] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3000/crud/detailView/${id}`).then(
            (response) => {
                setdata(response.data);
            }
        );
    }, [id]);

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <div>
                    {data[0] ? (
                        <div>
                            <div>{data[0].id}</div>
                            <div>{data[0].user_id}</div>
                            <div>{data[0].nickname}</div>
                            <div>{data[0].contents}</div>
                        </div>
                    ) : null}
                </div>
            </Container>
        </React.Fragment>
    );
}
