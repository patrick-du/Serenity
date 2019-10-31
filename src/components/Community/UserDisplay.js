import React, { Component } from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class UserDisplay extends Component {

    render() {
        return (
            <div className="standardBox overflow-auto">
                <Row noGutters={true}>
                    <Col><p className="rightColTitle">User Database</p></Col>
                    {/* <Col className="text-right">
                        <Link to="/newExercise" >
                            <Button className="buttonOutlineSuccess mr-3">
                                <i class="fas fa-plus"></i>
                            </Button>
                        </Link>
                        <Button className="buttonOutline">
                            <i class="fas fa-chevron-down"></i>
                        </Button>
                    </Col> */}
                </Row>
                <Table className="p-4 mt-3 mb-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => {
                            return (
                                <tr>
                                    <td> {user.name ? user.name : "-"} </td>
                                    <td> {user.email ? user.email : "-"} </td>
                                    <td> {user._id ? user._id : "-"} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>

        )
    }
}
