import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePannelOpen }) => {
  //sample array of location
  const location = [
    "24B, Near kapoor's cafe, Bangalore",
    "22C, Near Manja's cafe, Bangalore",
    "20B, Near Soma's cafe, Bangalore",
    "18A, Near Sharma's cafe, Bangalore",
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* this is sample data */}
      {location.map((location, index) => {
        return (
          <div
            key={index}
            className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center justify-start"
            onClick={() => {
              setVehiclePannelOpen(true);
              setPanelOpen(false);
            }}
          >
            <h2 className="bg-[#eee] rounded-full h-8 w-11 flex items-center justify-center">
              <i className="ri-map-pin-fill" />
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
