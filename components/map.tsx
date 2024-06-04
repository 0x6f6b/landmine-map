"use client";
import GoogleMapReact from "google-map-react";
import utmObj from "utm-latlng";

import { features } from "../dataset.json";

const utm = new utmObj();

interface AnyReactComponentProps {
  key: number;
  lat: number;
  lng: number;
  text: string | null;
}

const AnyReactComponent = ({ text }: AnyReactComponentProps) => (
  <div
    style={{
      backgroundColor: "red",
      color: "white",
      height: 25,
      width: 25,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    }}
  >
    {text}
  </div>
);

const Map = () => {
  return (
    <div style={{ height: "100vh", width: "90%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS as string,
        }}
        defaultCenter={{
          lat: 12.5657,
          lng: 104.991,
        }}
        defaultZoom={7}
      >
        {features.map((feature) => (
          <AnyReactComponent
            key={feature.properties.IncidentID}
            lat={
              (
                utm.convertUtmToLatLng(
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                  48,
                  "N"
                ) as { lat: number; lng: number }
              ).lat
            }
            lng={
              (
                utm.convertUtmToLatLng(
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                  48,
                  "N"
                ) as { lat: number; lng: number }
              ).lng
            }
            text={feature.properties.MINE_TYPE}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
