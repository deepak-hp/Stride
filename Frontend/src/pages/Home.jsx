import React from "react";
import logo from "../assets/strider.svg";
import { Link } from "react-router-dom";
// import bgimage from "../assets/StriderIntro.jpg";

const Home = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: `url(${bgimage})` }}
        className="bg-[url(https://images.unsplash.com/photo-1581465764076-8425d6ad25b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover h-screen w-full flex justify-between flex-col bg-cyan-900"
      >
        <img className="w-14" src={logo} alt="" />
        <div className="bg-white py-4 px-4">
          <h2 className="text-2xl font-bold">Get started with Strider</h2>
          <Link
            to="/login"
            className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
