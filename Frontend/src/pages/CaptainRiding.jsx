import React, { useRef, useState } from "react";
import StriderSvg from "../assets/StriderSvg";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePannel, setFinishRidePannel] = useState(false);
  const finishRidePannelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePannel) {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePannel]);

  return (
    <div className="h-screen">
      <div className="fixed p-4 flex items-center justify-between w-screen">
        <StriderSvg className="w-16 h-min -ml-2" style={{ fill: "black" }} />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-line" />
        </Link>
      </div>

      <div className="h-4/5">
        {/* img for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div
        className="h-1/5 p-6 flex gap-6 items-center justify-between bg-yellow-400 relative"
        onClick={() => setFinishRidePannel(true)}
      >
        <h5
          className="text-center absolute top-0 left-0 w-full"
          //   onClick={() => {
          //     //   setRidePopupPanel(false);
          //   }}
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line" />
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete ride
        </button>
      </div>
      <div
        ref={finishRidePannelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePannel={setFinishRidePannel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
