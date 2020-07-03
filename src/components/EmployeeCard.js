import React from 'react';

// function employee card that returns employee details
function EmployeeCard(props) {
    return (
    <div className="card">
        <div className="img-container">
        <img  
        alt={props.name} 
        src={props.image} />
        </div>
        <div className="content">
        <p>
          Name : {props.name}
        </p>
        <p>
          Department : {props.department}
        </p>
        <p>
          Email : {props.email}
        </p>
        <p>
          Phone : {props.phone}
        </p>
        </div>
    </div>
      
    );
}

export default EmployeeCard;