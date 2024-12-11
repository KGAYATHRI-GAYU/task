import React from "react";

const LawyerProfile = ({ lawyer }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card mb-4 shadow-sm">
        <img
          src={lawyer.image}
          className="card-img-top"
          alt={lawyer.name}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{lawyer.name}</h5>
          <p className="card-text">
            <strong>Specialization:</strong> {lawyer.specialization}
          </p>
          <p className="card-text">
            <strong>Experience:</strong> {lawyer.experience} years
          </p>
          <p className="card-text">
            <strong>Contact:</strong> {lawyer.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;

