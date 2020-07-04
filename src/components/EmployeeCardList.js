import React from 'react';
import EmployeeCard from "./EmployeeCard";

// mapping the list of employees
function EmployeeCardList({ data }) {
    return (
        data.map(employee => (
            <EmployeeCard 
            key={employee.id}
            image={employee.image}
            name={employee.name}
            department={employee.department}
            email={employee.email}
            phone={employee.phone}
            />
        ))
    )
}

export default EmployeeCardList;