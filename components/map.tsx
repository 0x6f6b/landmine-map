"use client";
import GoogleMapReact from "google-map-react";
import GoogleMap from "google-maps-react-markers";

import utmObj from "utm-latlng";

import { features } from "../dataset.json";
import { RefAttributes, useRef, useState } from "react";
import { LucideProps, MapPin } from "lucide-react";

const utm = new utmObj();

interface MapPinProps
  extends Omit<LucideProps, "ref">,
    RefAttributes<SVGSVGElement> {
  lat: number;
  lng: number;
  markerId?: string;
  coordinates: [number, number];
}

const Marker: React.FC<MapPinProps> = ({
  lat,
  lng,
  markerId,
  coordinates,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mineLocations = utm.convertUtmToLatLng(
    coordinates[0],
    coordinates[1],
    48,
    "N"
  ) as { lat: number; lng: number };

  return (
    <MapPin
      markerId={markerId as string}
      lat={lat}
      lng={lng}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      {...props}
    />
  );
};

const Map = () => {
  const onMarkerClick = (
    e: any,
    {
      markerId,
      lat,
      lng,
    }: {
      markerId: any;
      lat: number;
      lng: number;
    }
  ) => {
    console.log("This is ->", markerId);
  };

  return (
    <div style={{ height: "80vh", width: "90%" }}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS as string}
        defaultCenter={{ lat: 12.5657, lng: 104.991 }}
        defaultZoom={7}
        mapMinHeight="80vh"
        // onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log("Map moved", map)}
      >
        {features.map((feature) => (
          <MapPin
            key={feature.properties.IncidentID}
            coordinates={feature.geometry.coordinates}
            markerId={feature.properties.IncidentID}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
