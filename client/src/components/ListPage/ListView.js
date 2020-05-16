import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function CreateButton() {
    const history = useHistory();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
                history.push("/write");
            }}
        >
            Write
        </Button>
    );
}

export default function SimpleTable() {
    const [data, setdata] = useState("");

    useEffect(() => {
        Axios.get("http://118.222.73.34:5000/crud/select").then((response) => {
            setdata(response.data);
        });
    }, []);

    const classes = useStyles();

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table
                    component="div"
                    className={classes.table}
                    aria-label="simple table"
                >
                    <TableHead component="div">
                        <TableRow component="div">
                            <TableCell component="div">Title</TableCell>
                            <TableCell component="div" align="center">
                                작성자
                            </TableCell>
                            <TableCell component="div" align="center">
                                작성일자
                            </TableCell>
                            <TableCell component="div" align="center">
                                수정일자
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody component="div">
                        {data
                            ? data.map((item) => (
                                  <TableRow
                                      component={Link}
                                      to={`/detail/${item.id}`}
                                      key={item.id}
                                  >
                                      <TableCell component="div" scope="row">
                                          {item.title}
                                      </TableCell>
                                      <TableCell component="div" align="center">
                                          {item.nickname}
                                      </TableCell>
                                      <TableCell component="div" align="center">
                                          {item.createdAt}
                                      </TableCell>
                                      <TableCell component="div" align="center">
                                          {item.updatedAt}
                                      </TableCell>
                                  </TableRow>
                              ))
                            : null}
                    </TableBody>
                </Table>
            </TableContainer>

            <CreateButton />
        </Container>
    );
}
