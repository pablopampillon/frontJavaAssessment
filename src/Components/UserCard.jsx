import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="row">
      <div className="card">
        <div className="card-content">
          <div className="title-points">
            <p>ID: {props.user.id} </p>
            <p>{props.user.firstName} </p>
            <p>{props.user.lastName} </p>
            <p>{props.user.email} </p>
            <p>{props.user.phoneNumber} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
