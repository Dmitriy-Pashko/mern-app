import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { ArrowUpBoldCircleOutline, Delete } from 'mdi-material-ui';
import list from './controller';

const styles = {
  root: {
    width: '100%',

  },
};

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = list.handleDelete.bind(this);
    this.handleUpdate = list.handleUpdate.bind(this);
  }
  render() {
    return (
      <Fragment>
        <Table style={styles.root}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>BDay Date</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Update/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.workerList.map((worker) => {
              return (
                <TableRow key={worker._id}>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.bdate}</TableCell>
                  <TableCell>{worker.position}</TableCell>
                  <TableCell>{worker.salary}</TableCell>
                  <TableCell>
                    <Button variant="fab" size="medium" style={{ marginRight: '10px' }} onClick={() => { this.handleUpdate(worker); }}>
                      <ArrowUpBoldCircleOutline style={{ fontSize: 48 }} />
                    </Button>
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
      </Fragment>
    );
  }
}

export default WorkerList;
