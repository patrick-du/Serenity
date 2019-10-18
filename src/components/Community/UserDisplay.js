import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class UserDisplay extends Component {
    render() {
        return (
            <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => {
                            return (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
        )
    }
}
