import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { ArrowUpBoldCircleOutline, Delete } from 'mdi-material-ui';
import list from './controller';

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = list.handleDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>BDay Date</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Update/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {this.props.list.map((worker) => {
              return (
                <TableRow key={worker._id}>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.bdate}</TableCell>
                  <TableCell>{worker.position}</TableCell>
                  <TableCell>{worker.salary}</TableCell>
                  <TableCell>
                    <Link to={`/update/${worker._id}`}>
                      <Button variant="fab" size="medium" style={{ marginRight: '10px' }} >
                        <ArrowUpBoldCircleOutline style={{ fontSize: 48 }} />
                      </Button>
                    </Link>
                    <Button variant="fab" size="medium" onClick={(e) => { this.handleDelete(worker._id, e); }}>
                      <Delete style={{ fontSize: 48 }} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
            }
          </TableBody>
        </Table>
        <Link to="/create"><Button>Create Worker</Button></Link>
      </Fragment>
    );
  }
}

export default WorkerList;
