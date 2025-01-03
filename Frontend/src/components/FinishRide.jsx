import React from "react";
import { Link } from "react-router-dom";

const FinishRide = ({ setFinishRidePannel }) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          setFinishRidePannel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish This ride</h3>

      <div className="flex items-center justify-between p-4 border-2 bg-yellow-400 rounded-lg mt-6">
        <div className="flex items-center justify-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/736x/0b/e7/65/0be76557df980b9e51b36df5dae0dcb2.jpg"
            alt="riderpic"
          />
          <h2 className="text-lg font-medium">Femme</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full flex flex-col gap-4 p-4">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Somewhere in India, Earth
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Somewhere in India, Earth
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line" />
            <div>
              <h3 className="text-lg font-medium">₹193.29</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-end">
        <Link
          to="/captain-home"
          className="flex justify-center w-full text-lg bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Finish Ride
        </Link>
      </div>
    </div>
  );
};

export default FinishRide;
