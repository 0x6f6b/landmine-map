"use client";
import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const AnyReactComponent = ({
  mineType,
  landUse,
  killed,
  date,
  lat,
  lng,
}: {
  mineType: string | null;
  landUse: string | null;
  killed: number;
  date: Date;
  lat: number;
  lng: number;
}) => (
  <HoverCard openDelay={0}>
    <HoverCardTrigger>
      <MapPin />
    </HoverCardTrigger>
    <HoverCardContent>
      <div>
        {mineType && <h3 className="text-base font-bold">{mineType}</h3>}
        {landUse && landUse !== "Unknown" && (
          <p className="text-sm">{landUse}</p>
        )}
        <p className="text-sm">
          {killed} killed on {date.toLocaleDateString()}
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const Map = ({
  landmines,
}: {
  landmines: {
    id: string;
    type: string | null;
    lat: number;
    lng: number;
    landUse: string | null;
    killed: number;
    date: Date;
  }[];
}) => {
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
        {landmines.map((landmine) => (
          <AnyReactComponent
            key={landmine.id}
            lat={landmine.lat}
            lng={landmine.lng}
            mineType={landmine.type}
            landUse={landmine.landUse}
            killed={landmine.killed}
            date={landmine.date}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
