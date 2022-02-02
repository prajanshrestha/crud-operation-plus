import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, username, email, address, phone } = user;

  const onInputChange = (e) => {
    return setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user).then(() => {
      navigate("/");
    });
  };

  return (
    <form className="create-user-form">
      <div className="form-card">
        <input
          type="text"
          placeholder="NAME"
          className="input-fields"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          placeholder="USERNAME"
          className="input-fields"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="email"
          placeholder="E-MAIL"
          className="input-fields"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          placeholder="ADDRESS"
          className="input-fields"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          placeholder="PHONE"
          className="input-fields"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />

        <Link
          to="/"
          className="view-btn-on-homepage"
          type="submit"
          onClick={submit}
        >
          Create User
        </Link>
      </div>
    </form>
  );
}
