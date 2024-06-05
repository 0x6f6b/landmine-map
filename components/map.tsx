"use client";
import { Marker } from "react-leaflet";
import GoogleMap from "google-maps-react-markers";

import utmObj from "utm-latlng";

import { features } from "../dataset.json";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const utm = new utmObj();

interface AnyReactComponentProps {
  key: number;
  lat: number;
  lng: number;
  text: string | null;
}

const AnyReactComponent = ({ mineType }: any) => (
  <HoverCard openDelay={0}>
    <HoverCardTrigger>
      <MapPin />
    </HoverCardTrigger>
    <HoverCardContent>Mine Type: {mineType}</HoverCardContent>
  </HoverCard>
);

const Map = () => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const onMarkerClick = (
    e: any,
    {
      markerId,
      lat,
      lng,
    }: {
      markerId: any;
      lat: any;
      lng: any;
    }
  ) => {
    console.log("This is ->", markerId);
  };

  return (
    <div style={{ height: "80vh", width: "90%" }}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS as string}
        defaultCenter={{
          lat: 12.5657,
          lng: 104.991,
        }}
        defaultZoom={7}
        mapMinHeight="80vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log("Map moved", map)}
      >
        {features.map((feature) => (
          <AnyReactComponent
            key={feature.properties.IncidentID}
            lat={
              (
                utm.convertUtmToLatLng(
                  feature.geometry.coordinates[0],
                  feature.geometry.coordinates[1],
                  48,
                  "N"
                ) as { lat: number; lng: number }
              ).lat
            }
            lng={
              (
                utm.convertUtmToLatLng(
                  feature.geometry.coordinates[0],
                  feature.geometry.coordinates[1],
                  48,
                  "N"
                ) as { lat: number; lng: number }
              ).lng
            }
            mineType={feature.properties.MINE_TYPE || "Unknown"}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
