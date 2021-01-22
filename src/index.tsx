import React from "react";
import { MapkitProvider } from "react-mapkit";
import Fieldset from "part:@sanity/components/fieldsets/default";
import config from "config:mapkit-input";
import { MapView } from "./MapView";

console.log("config,", config);

const MapComponent = ({ type, value, markers, onChange }) => {
  return (
    <Fieldset
      legend={type.title}
      description={type.description}
      markers={markers}
    >
      <div style={{ width: "100%", height: "500px" }}>
        <MapkitProvider tokenOrCallback={config.token}>
          <MapView value={value} type={type} onChange={onChange} />
        </MapkitProvider>
      </div>
    </Fieldset>
  );
};

export default MapComponent;
