import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCaptain, isLoading, setIsLoading } =
    useContext(CaptainDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainLoginData = {
      email,
      password,
    };

    setIsLoading(true);
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainLoginData
    );
    setIsLoading(false);

    if (res.status === 200) {
      const data = await res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">Whats your email</h3>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg placeholder:text-base">
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center">
            Want to join our fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg"
        >
          Sign up as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
