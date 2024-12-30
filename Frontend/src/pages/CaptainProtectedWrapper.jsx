import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.data;
          setCaptain(data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token]);

  if (isLoading) return <div>Loading...</div>;

  return children;
};

export default CaptainProtectedWrapper;
