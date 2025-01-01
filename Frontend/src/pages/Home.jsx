import React, { useRef, useState } from "react";
import StriderSvg from "../assets/StriderSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const confrimRidePanelRef = useRef(null);
  const [confrimRidePanelOpen, setConfrimRidePanelOpen] = useState(false);
  const lookingForDriverPanelRef = useRef(null);
  const [lookingForDriverOpen, setlookingForDriverOpen] = useState(false);
  const waitingForDriverPanelRef = useRef(null);
  const [WaitingForDriverOpen, setWaitingForDriverOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (isOpen) {
        gsap.to(panelRef.current, {
          height: "80%",
          padding: 24,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [isOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confrimRidePanelOpen) {
        gsap.to(confrimRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confrimRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confrimRidePanelOpen]
  );

  useGSAP(
    function () {
      if (lookingForDriverOpen) {
        gsap.to(lookingForDriverPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForDriverPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForDriverOpen]
  );

  useGSAP(
    function () {
      if (WaitingForDriverOpen) {
        gsap.to(waitingForDriverPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [WaitingForDriverOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <StriderSvg
        className="w-16 absolute left-2 top-2 h-min"
        style={{ fill: "black" }}
      />

      <div className="h-screen w-screen">
        {/* img for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="p-6 bg-white relative">
          <i
            className="ri-arrow-down-wide-line absolute right-8 top-8 text-2xl opacity-0"
            onClick={() => setIsOpen(false)}
            ref={panelCloseRef}
          />
          <h4 className="text-2xl font-semibold mb-5">Find a trip</h4>
          <form
            className="flex flex-col gap-4 relative"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="line absolute h-20 w-0.5 bg-gray-900 rounded-full top-2 left-6"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full"
              type="text"
              name="pickup"
              id="pickup"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setIsOpen(true)}
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full"
              type="text"
              name="destination"
              id="destination"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setIsOpen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white opacity-0">
          <LocationSearchPanel
            setVehiclePannelOpen={setVehiclePanelOpen}
            setPanelOpen={setIsOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfrimRidePanelOpen={setConfrimRidePanelOpen}
        />
      </div>

      <div
        ref={confrimRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRide
          setConfrimRidePanelOpen={setConfrimRidePanelOpen}
          setlookingForDriverOpen={setlookingForDriverOpen}
        />
      </div>

      <div
        ref={lookingForDriverPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setlookingForDriverOpen={setlookingForDriverOpen} />
      </div>

      <div
        ref={waitingForDriverPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver setWaitingForDriverOpen={setWaitingForDriverOpen} />
      </div>
    </div>
  );
};

export default Home;
