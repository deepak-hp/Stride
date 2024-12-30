import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) return navigate("/captain-login");

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    });
  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
