import React from "react";

const VehiclePanel = (props) => {
  const { setVehiclePanelOpen, setConfrimRidePanelOpen, fare, setVehicleType } =
    props;
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          setVehicleType("car");
          setConfrimRidePanelOpen(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            StriderGo{" "}
            <span>
              <i className="ri-user-3-fill" /> 4
            </span>
          </h4>
          <h5 className="font-normal text-sm">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          {`₹${Number(fare.car).toFixed(2)}`}
        </h2>
      </div>

      <div
        onClick={() => {
          setVehicleType("motor");
          setConfrimRidePanelOpen(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill" /> 1
            </span>
          </h4>
          <h5 className="font-normal text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">{`₹${Number(fare.motor).toFixed(
          2
        )}`}</h2>
      </div>

      <div
        onClick={() => {
          setVehicleType("auto");
          setConfrimRidePanelOpen(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            StriderAuto{" "}
            <span>
              <i className="ri-user-3-fill" /> 3
            </span>
          </h4>
          <h5 className="font-normal text-sm">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">{`₹${Number(fare.auto).toFixed(
          2
        )}`}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
