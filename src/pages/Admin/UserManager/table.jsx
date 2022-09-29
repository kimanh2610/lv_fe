import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material';
import Paper from '@material-ui/core/Paper';

function createData(stt, fullname, email, username, action) {
    return { stt, fullname, email, username, action };
}

const rows = [
    createData(1, "Apple", 5, 3, 1),
    createData(2, "Orange", 2, 2, 1),
    createData(3, "Grapes", 3, 1, 1),
    createData(4, "Tomato", 2, 1.6, 1),
    createData(5, "Mango", 1.5, 4, 1),
];

export default function TableAddUsers() {
    const [rowData, setRowData] = useState(rows);
    const [orderDirection, setOrderDirection] = useState("asc");

    const sortArray = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
            default:
                return arr.sort((a, b) =>
                    a.stt > b.stt ? 1 : b.stt > a.stt ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.stt < b.stt ? 1 : b.stt < a.stt ? -1 : 0
                );
        }
    };

    const handleSortRequest = () => {
        setRowData(sortArray(rows, orderDirection));
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" onClick={handleSortRequest} >
                            <TableSortLabel active={true} direction={orderDirection}>
                                STT
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Học và tên</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center" >Tên đăng nhập</TableCell>
                        <TableCell align="center" >Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row) => (
                        <TableRow key={row.stt}>
                            <TableCell component="th" scope="row" align="center">
                                {row.stt}
                            </TableCell>
                            <TableCell align="center">{row.fullname}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.action}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
