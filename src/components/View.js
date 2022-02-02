import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, username, email, address, phone } = user;

  const loadUser = async () => {
    const getUserData = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(getUserData.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="create-user-form">
      <div className="view-form-card">
        <h1 className="user-info-h1">User Information</h1>
        <hr />
        <h4>User ID: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>Username: {username}</h4>
        <h4>Email: {email}</h4>
        <h4>Address: {address}</h4>
        <h4>Phone: {phone}</h4>
        <hr />
        <Link to="/" className="view-btn-on-homepage">
          Go To Home
        </Link>
      </div>
    </div>
  );
}
