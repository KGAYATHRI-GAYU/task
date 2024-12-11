import React from "react";

const services = [
  { title: "Family Law", description: "Divorce, custody, and more." },
  { title: "Corporate Law", description: "Compliance and contracts." },
  { title: "Criminal Law", description: "Defense and legal representation." },
];

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

