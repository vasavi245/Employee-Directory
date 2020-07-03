import React from 'react';
import "./styles/employeeCard.css"

// function employee card that returns employee details
function EmployeeCard(props) {
    return (
    <div className="card my-4 py-4 px-10 bg-light shadow d-flex flex-wrap ">
       <div className="row">   
        <div className="col-sm">
               <img className="img-container rounded-circle card-img shadow-md border"
               style={{ maxWidth: "60px" }}
               alt={props.name} 
               src={props.image} />
        </div>
        <div className="col-sm"> 
               <p className="card-text font-weight-bold">
               {props.name}
               </p>
        </div>
        <div className="col-sm">
            <p>
            {props.department}
            </p>
        </div>
        <div className="col-sm">
            <p className="text-primary">
            {props.email}
            </p>
        </div>
        <div className="col-sm">
           <p className="card-text">
           {props.phone}
           </p>
        </div>
        </div>
           
    </div>
      
    );
}

export default EmployeeCard;