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
import DetailView from "../DetailPage/DetailView";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable() {
    const [data, setdata] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3000/crud/select").then((response) => {
            setdata(response.data);
        });
    }, []);

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">작성자</TableCell>
                        <TableCell align="center">작성일자</TableCell>
                        <TableCell align="center">수정일자</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        ? data.map((item) => (
                              <TableRow
                                  component={Link}
                                  to={`/detail/${item.id}`}
                                  key={item.id}
                              >
                                  <TableCell component="th" scope="row">
                                      {item.title}
                                  </TableCell>
                                  <TableCell align="center">
                                      {item.nickname}
                                  </TableCell>
                                  <TableCell align="center">
                                      {item.createdAt}
                                  </TableCell>
                                  <TableCell align="center">
                                      {item.updatedAt}
                                  </TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
