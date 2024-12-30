import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.data;
          setUser(data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);

  if (isLoading) return <div>Loading...</div>;

  return children;
};

export default UserProtectedWrapper;
