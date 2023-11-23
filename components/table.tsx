import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import ReactPaginate from "react-paginate";
import UserAPI from '../apis/UserAPI';

const Users = () => {   
  const [userList, setUserList] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 4;

  useEffect(() => {
    getUserWithFetch();
  }, []);

  var usersJSON = {
    "items": [
      {
        "id": 1,
        "name": "user1",
        "surname": "user1",
        "username": "user_one",
        "email": "user.one@example.com"
      },
      {
        "id": 2,
        "name": "user2",
        "surname": "user2",
        "username": "user_two",
        "email": "user.two@example.com"
      },
      {
        "id": 3,
        "name": "user3",
        "surname": "user3",
        "username": "user_three",
        "email": "user.three@example.com"
      },
      {
          "id": 4,
          "name": "user4",
          "surname": "user4",
          "username": "user_four",
          "email": "user.four@example.com"
      },
      {
          "id": 5,
          "name": "user5",
          "surname": "user5",
          "username": "user_five",
          "email": "user.five@example.com"
      },
      {
          "id": 6,
          "name": "user6",
          "surname": "user6",
          "username": "user_six",
          "email": "user.six@example.com"
      },
      {
          "id": 7,
          "name": "user7",
          "surname": "user7",
          "username": "user_seven",
          "email": "user.seven@example.com"
      },
      {
          "id": 8,
          "name": "user8",
          "surname": "user8",
          "username": "user_eight",
          "email": "user.eight@example.com"
      }
    ],
    "total": 8
  }

  // const UserAPI = require('../apis/UserAPI');

  // UserAPI.handler(function(data) {
  //   //do something with the data
  // });

  useEffect(() => {
    const getUsersPage = async () => {
    //   const response = await fetch( `http://localhost:8082/users?page=0&limit=${limit}`);
    //   const data = await response.json();
    const data = usersJSON;
    // const data = UserAPI.handler.userJSON;
    var result: any = [];

    for(var i in data.items) {
      result.push(data.items[i]);
    }
    const total = data.total;
    setpageCount(Math.ceil(total / limit));
    setUserList(result);
  };

    getUsersPage();
  }, [limit]);

  const getUserWithFetch = async () => {
    // const response = await fetch("http://localhost:8082/users");
    // const jsonData = await response.json();
    // const jsonData = usersJSON;
    var result: any = [];

    // for(var i in jsonData.items) {
    //   result.push(jsonData.items[i]);
    // }
    setUserList(result);
  };
  
  const paginatedUsers = async (currentPage: any) => {
    // const response = await fetch(`http://localhost:8082/users?page=${currentPage}&limit=${limit}`);
    // const data = await response.json();
    // const data = usersJSON;
    var result = [];

    // for(var i in data.items) {
    //   result.push(data.items[i]);
    // }
    return result;
  };

  const handlePageClick = async (data: any) => {
    // let currentPage = data.selected;
    let currentPage = 1;

    const commentsFormServer: any = await paginatedUsers(currentPage);

    setUserList(commentsFormServer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Get Users</h2>
      </header>
      <Container className="container">
        <Table className="table table-striped table-bordered">
            <TableHead className="row-header">
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Surname</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="left">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user: any) => (
                <>
                  <TableRow key={user.id} className="row-data">
                    <TableCell align="left" className="row-item">{user.name}</TableCell>
                    <TableCell align="left" className="row-item">{user.surname}</TableCell>
                    <TableCell align="left" className="row-item">{user.username}</TableCell>
                    <TableCell align="left" className="row-item">{user.email}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
        </Table>
      </Container>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );

};
export default Users;