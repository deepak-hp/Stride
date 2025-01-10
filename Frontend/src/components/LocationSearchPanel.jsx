import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setPanelOpen,
  setVehiclePannelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (sugession) => {
    if (activeField === "pickup") {
      setPickup(sugession);
    } else if (activeField === "destination") {
      setDestination(sugession);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {suggestions.map((location, index) => {
        return (
          <div
            key={index}
            className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center justify-start"
            onClick={() => {
              handleSuggestionClick(location.description);
              // setVehiclePannelOpen(true);
              // setPanelOpen(false);
            }}
          >
            <h2 className="bg-[#eee] rounded-full h-8 w-11 flex items-center justify-center">
              <i className="ri-map-pin-fill" />
            </h2>
            <h4 className="font-medium">{location.description}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
