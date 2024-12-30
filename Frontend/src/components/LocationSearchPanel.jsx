import React from "react";

const LocationSearchPanel = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* this is sample data */}
      <div className="flex gap-4 items-center justify-start">
        <h2 className="bg-[#eee] rounded-full h-8 w-8 flex items-center justify-center">
          <i className="ri-map-pin-fill" />
        </h2>
        <h4 className="font-medium">24B, Neaer kapoors cafe, Bangalore</h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
