import React from 'react';
import "../styles/employeesCard.css";

function Employee(props) {
    return (
        <tr className="table">
            <td><img alt={props.name} src={props.image} /></td>
            <td>{props.name}</td>
            <td>{props.department}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default EmployeesCard;