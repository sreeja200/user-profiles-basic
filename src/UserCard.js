import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { name, email, phone, website, company, address, avatarUrl } = this.props;

    return (
      <div className="card mb-3 shadow-sm">
        <div className="row g-0">
          <div className="col-md-2 d-flex align-items-center justify-content-center p-2">
            <img
              src={avatarUrl}
              alt={name}
              className="img-fluid rounded-circle"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p><b>Email:</b> {email}</p>
              <p><b>Phone:</b> {phone}</p>
              <p><b>Company:</b> {company}</p>
              <p><b>Website:</b> {website}</p>
              <p><b>Address:</b> {address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
