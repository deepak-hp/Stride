import React from "react";

const WaitingForDriver = ({ setWaitingForDriverOpen }) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => setWaitingForDriverOpen(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line" />
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="rideImg"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Anamadaya</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">KA 01 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruthi Swift</p>
        </div>
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
      <div>
        {/* <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
      Confrim Ride
    </button> */}
      </div>
    </div>
  );
};

export default WaitingForDriver;
