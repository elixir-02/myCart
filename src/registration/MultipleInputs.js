import React, { useState } from "react";

const MultipleInputs = () => {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [record, setRecord] = useState([]);

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegistration({ ...registration, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const newRecord = {
      ...registration,
      id: Math.floor(Math.random() * 100000 + 1),
    };
    setRecord([...record, newRecord]);
    setRegistration({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <div className="container my-5 mb-3">
        <h1 style={{ textAlign: "center" }}>Registration Form</h1>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Username
          </label>
          <input
            value={registration.name}
            onChange={handleData}
            name="name"
            type="text"
            className="form-control my-2"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            value={registration.email}
            onChange={handleData}
            name="email"
            type="email"
            className=" my-2 form-control"
          />
        </div>{" "}
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone
          </label>
          <input
            value={registration.phone}
            onChange={handleData}
            name="phone"
            type="number"
            className=" my-2 form-control"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            value={registration.password}
            onChange={handleData}
            name="password"
            type="password"
            className=" my-2 form-control"
          />
        </div>
        <button
          onClick={submitHandle}
          type="button"
          className=" btn btn-info my-3"
        >
          Submit
        </button>
      </div>

      <div className="container mb-3">
        <label htmlFor="textarea" className="form-label">
          Data
        </label>
        <div style={{ height: "60vh" }} className="form-control" rows="3">
          {record.map((curr) => {
            const { name, email, phone, password } = curr;
            return (
              <div key={Math.floor(Math.random() * 100000 + 1)}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
