import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import { useEffect } from "react"
import { retrievePosts } from "../../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { ConstructionOutlined } from "@mui/icons-material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CustomizedTables() {

  const posts = useSelector((state) => state.posts)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffext")
    dispatch(retrievePosts());
    console.log(posts);
  });

  if (posts === undefined) {
    return null;
  }
  return (<div class="container">
    <div className="mx-auto">
      <Paper elevation={5}>
        <TableContainer component={Paper} className="mt-5">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title </StyledTableCell>
                <StyledTableCell align="right">Body</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <StyledTableRow key={post.id}>
                  <StyledTableCell component="th" scope="row">
                    {post.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {post.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{post.body}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      component={Link}
                      to={"/NewPost"}
                    >
                      Show
                    </Button>

                    <Button
                      variant="contained"
                      component={Link}
                      to={"/editpost"}

                    >
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      component={Link}
                      to={""}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
    <Footer />
  </div>
  );
}