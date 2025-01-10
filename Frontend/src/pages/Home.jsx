import React, { act, useRef, useState } from "react";
import StriderSvg from "../assets/StriderSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
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

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (isPanelOpen) {
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
    [isPanelOpen]
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

  async function findTrip() {
    setVehiclePanelOpen(true);
    setIsPanelOpen(false);

    const respose = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setFare(respose.data);
  }

  async function createRide() {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

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
            onClick={() => setIsPanelOpen(false)}
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
              onChange={handlePickupChange}
              onClick={() => {
                setIsPanelOpen(true);
                setActiveField("pickup");
              }}
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full"
              type="text"
              name="destination"
              id="destination"
              placeholder="Enter your destination"
              value={destination}
              onChange={handleDestinationChange}
              onClick={() => {
                setIsPanelOpen(true);
                setActiveField("destination");
              }}
            />
          </form>
          <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
          >
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className="bg-white opacity-0">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setVehiclePannelOpen={setVehiclePanelOpen}
            setPanelOpen={setIsPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
          setVehicleType={setVehicleType}
          fare={fare}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfrimRidePanelOpen={setConfrimRidePanelOpen}
        />
      </div>

      <div
        ref={confrimRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfrimRidePanelOpen={setConfrimRidePanelOpen}
          setlookingForDriverOpen={setlookingForDriverOpen}
        />
      </div>

      <div
        ref={lookingForDriverPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setlookingForDriverOpen={setlookingForDriverOpen}
        />
      </div>

      <div
        ref={waitingForDriverPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver
          ride={ride}
          // setVehicleFound={setVehicleFound}
          setWaitingForDriverOpen={setWaitingForDriverOpen}
        />
      </div>
    </div>
  );
};

export default Home;
